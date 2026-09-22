
import { useState, useRef, useEffect } from "react";
import "./App.css";


function gerarId() {
  return (
    Date.now().toString(36) +
    "-" +
    Math.random().toString(36).slice(2, 11)
  );
}

// ==========================================
// PHIA - INTERFACE PRINCIPAL
// ==========================================

export default function App() {

  const [conversas, setConversas] = useState(() => {
    try {
      const salvas = JSON.parse(
        localStorage.getItem("phia_conversas")
      );

      return Array.isArray(salvas) ? salvas : [];
    } catch {
      return [];
    }
  });

  const [conversaAtual, setConversaAtual] = useState(null);
  const [menuAberto, setMenuAberto] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  const finalChat = useRef(null);
  const textareaRef = useRef(null);

  // ==========================================
  // SALVAR HISTÓRICO
  // ==========================================

  useEffect(() => {
    try {
      localStorage.setItem(
        "phia_conversas",
        JSON.stringify(conversas)
      );
    } catch (erro) {
      console.error("Erro ao salvar conversas:", erro);
    }
  }, [conversas]);

  // ==========================================
  // ROLAR ATÉ A ÚLTIMA MENSAGEM
  // ==========================================

  useEffect(() => {
    finalChat.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [conversas, conversaAtual]);

  // ==========================================
  // CONVERSA ATUAL
  // ==========================================

  const conversa = conversas.find(
    (item) => item.id === conversaAtual
  );

  const mensagens = conversa?.mensagens || [];

  // ==========================================
  // CRIAR NOVA CONVERSA
  // ==========================================

  function novaConversa() {
    setConversaAtual(null);
    setMensagem("");
    setMenuAberto(false);
    textareaRef.current?.focus();
  }

  // ==========================================
  // ABRIR CONVERSA
  // ==========================================

  function abrirConversa(id) {
    setConversaAtual(id);
    setMenuAberto(false);
  }

  // ==========================================
  // EXCLUIR CONVERSA
  // ==========================================

  function excluirConversa(id) {
    setConversas((anteriores) =>
      anteriores.filter((item) => item.id !== id)
    );

    if (conversaAtual === id) {
      setConversaAtual(null);
    }
  }

  // ==========================================
  // ENVIAR MENSAGEM
  // ==========================================

  async function enviarMensagem() {

    const texto = mensagem.trim();

    if (!texto || carregando) return;

    const id = conversaAtual ?? gerarId();

    const mensagemUsuario = {
      id: gerarId(),
      tipo: "usuario",
      texto
    };

    if (!conversaAtual) {

      const nova = {
        id,
        titulo: texto.slice(0, 35),
        mensagens: [mensagemUsuario]
      };

      setConversas((anteriores) => [
        nova,
        ...anteriores
      ]);

      setConversaAtual(id);

    } else {

      setConversas((anteriores) =>
        anteriores.map((item) =>
          item.id === id
            ? {
                ...item,
                mensagens: [
                  ...item.mensagens,
                  mensagemUsuario
                ]
              }
            : item
        )
      );
    }

    setMensagem("");
    setCarregando(true);

    try {

      // ======================================
      // INTELIGÊNCIA DA PHIA
      // ======================================
      // Aqui conectaremos futuramente
      // o mecanismo de inteligência próprio.

      const resposta =
        "Recebi sua mensagem! A interface da phIA está funcionando. Agora precisamos conectar meu mecanismo de inteligência.";

      const mensagemPhia = {
        id: gerarId(),
        tipo: "phia",
        texto: resposta
      };

      setConversas((anteriores) =>
        anteriores.map((item) =>
          item.id === id
            ? {
                ...item,
                mensagens: [
                  ...item.mensagens,
                  mensagemPhia
                ]
              }
            : item
        )
      );

    } catch (erro) {

      console.error("Erro na phIA:", erro);

      setConversas((anteriores) =>
        anteriores.map((item) =>
          item.id === id
            ? {
                ...item,
                mensagens: [
                  ...item.mensagens,
                  {
                    id: gerarId(),
                    tipo: "phia",
                    texto:
                      "Ocorreu um erro ao processar sua mensagem."
                  }
                ]
              }
            : item
        )
      );

    } finally {
      setCarregando(false);
    }
  }

  // ==========================================
  // INTERFACE
  // ==========================================

  return (

    <div className="app">

      {/* FUNDO DO MENU NO CELULAR */}

      <div
        className={
          "sidebar-backdrop " +
          (menuAberto ? "visible" : "")
        }
        onClick={() => setMenuAberto(false)}
      />

      {/* MENU LATERAL */}

      <aside
        className={
          "sidebar " +
          (menuAberto ? "open" : "")
        }
      >

        <div className="sidebar-top">

          <span className="brand">phIA</span>

          <button
            className="icon-button close-sidebar"
            onClick={() => setMenuAberto(false)}
            aria-label="Fechar menu"
          >
            ✕
          </button>

        </div>

        <button
          className="new-chat"
          onClick={novaConversa}
        >
          <span>＋</span>
          Nova conversa
        </button>

        <p className="sidebar-label">
          HISTÓRICO
        </p>

        <div className="conversation-list">

          {conversas.map((item) => (

            <div
              className={
                "conversation-item " +
                (conversaAtual === item.id
                  ? "selected"
                  : "")
              }
              key={item.id}
            >

              <button
                className="conversation-select"
                onClick={() =>
                  abrirConversa(item.id)
                }
              >
                <span>▤</span>
                <span>{item.titulo}</span>
              </button>

              <button
                className="icon-button delete-chat"
                onClick={() =>
                  excluirConversa(item.id)
                }
                aria-label="Excluir conversa"
              >
                ✕
              </button>

            </div>

          ))}

        </div>

        <div className="sidebar-footer">
          phIA • Inteligência Artificial
        </div>

      </aside>

      {/* ÁREA PRINCIPAL */}

      <main className="chat-area">

        {/* CABEÇALHO */}

        <header className="chat-header">

          <button
            className="icon-button menu-button"
            onClick={() =>
              setMenuAberto(true)
            }
            aria-label="Abrir menu"
          >
            ☰
          </button>

          <span className="header-brand">
            phIA
          </span>

          <button
            className="icon-button"
            onClick={novaConversa}
            aria-label="Nova conversa"
          >
            ＋
          </button>

        </header>

        {/* MENSAGENS */}

        <section className="chat-scroll">

          {mensagens.length === 0 ? (

            <div className="welcome">

              <div className="welcome-logo">
                phIA
              </div>

              <h1>
                Como posso ajudar você?
              </h1>

              <p>
                Sua inteligência artificial pessoal.
              </p>

            </div>

          ) : (

            <div className="messages">

              {mensagens.map((item) => (

                <div
                  key={item.id}
                  className={
                    "message-row " +
                    (item.tipo === "usuario"
                      ? "from-user"
                      : "from-phia")
                  }
                >

                  {item.tipo === "phia" && (

                    <div className="avatar phia-avatar">
                      P
                    </div>

                  )}

                  <div className="message-bubble">
                    {item.texto}
                  </div>

                  {item.tipo === "usuario" && (

                    <div className="avatar user-avatar">
                      U
                    </div>

                  )}

                </div>

              ))}

              {carregando && (

                <div className="message-row from-phia">

                  <div className="avatar phia-avatar">
                    P
                  </div>

                  <div className="message-bubble">
                    Pensando...
                  </div>

                </div>

              )}

              <div ref={finalChat} />

            </div>

          )}

        </section>

        {/* CAMPO DE MENSAGEM */}

        <div className="composer-area">

          <div className="composer">

            <textarea
              ref={textareaRef}
              value={mensagem}
              placeholder="Pergunte alguma coisa..."
              rows={1}
              onChange={(evento) =>
                setMensagem(evento.target.value)
              }
              onKeyDown={(evento) => {

                if (
                  evento.key === "Enter" &&
                  !evento.shiftKey &&
                  !evento.nativeEvent.isComposing
                ) {
                  evento.preventDefault();
                  enviarMensagem();
                }

              }}
            />

            <button
              className="send-button"
              onClick={enviarMensagem}
              disabled={
                !mensagem.trim() || carregando
              }
              aria-label="Enviar mensagem"
            >
              ➤
            </button>

          </div>

          <p className="composer-caption">
            phIA • Desenvolvida por Raphael Camargo
          </p>

        </div>

      </main>

    </div>

  );
}