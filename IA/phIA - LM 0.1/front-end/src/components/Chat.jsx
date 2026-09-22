import { useEffect, useRef, useState } from 'react';
import { ArrowUp, Menu, Plus } from 'lucide-react';
import Message from './Message.jsx';
export default function Chat({ conversation, onSend, onOpenMenu, onNew }) {
  const [draft, setDraft] = useState('');
  const bottomRef = useRef(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [conversation?.id, conversation?.messages.length]);
  const submit = event => { event.preventDefault(); const text = draft.trim(); if (!text) return; onSend(text); setDraft(''); };
  return <main className="chat-area">
    <header className="chat-header"><button className="icon-button menu-button" onClick={onOpenMenu} aria-label="Abrir menu"><Menu size={22}/></button><span className="header-brand">phIA</span><button className="icon-button" onClick={onNew} aria-label="Nova conversa"><Plus size={22}/></button></header>
    <div className="chat-scroll" role="log" aria-label="Mensagens da conversa">
      {conversation?.messages.length ? <div className="messages">{conversation.messages.map(message => <Message key={message.id} message={message}/>)}<div ref={bottomRef}/></div> : <div className="welcome"><div className="welcome-logo">phIA</div><h1>Como posso ajudar você?</h1><p>Sua inteligência artificial, em desenvolvimento.</p></div>}
    </div>
    <div className="composer-area"><form className="composer" onSubmit={submit}><textarea value={draft} onChange={event => setDraft(event.target.value)} onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); submit(event); } }} rows="1" placeholder="Pergunte alguma coisa..." aria-label="Digite sua mensagem"/><button className="send-button" type="submit" disabled={!draft.trim()} aria-label="Enviar mensagem"><ArrowUp size={21}/></button></form><p className="composer-caption">A phIA ainda não está conectada ao modelo de IA.</p></div>
  </main>;
}
