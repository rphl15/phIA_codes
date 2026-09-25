          {mensagens.length === 0 ? (
            <div className="welcome">
              <div className="welcome-logo">
                Raphix
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
                  {item.tipo !== "usuario" && (
                    <div className="avatar phia-avatar">
                      R
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
                    R
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
            Raphix • Desenvolvida no Brasil
          </p>
        </div>
      </main>
    </div>
  );
}
