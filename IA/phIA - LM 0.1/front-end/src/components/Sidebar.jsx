import { MessageSquare, Plus, Trash2, X } from 'lucide-react';
export default function Sidebar({ conversations, activeId, onSelect, onNew, onDelete, open, onClose }) {
  return <><div className={`sidebar-backdrop ${open ? 'visible' : ''}`} onClick={onClose} />
    <aside className={`sidebar ${open ? 'open' : ''}`} aria-label="Histórico de conversas">
      <div className="sidebar-top"><span className="brand">phIA</span><button className="icon-button close-sidebar" onClick={onClose} aria-label="Fechar menu"><X size={21}/></button></div>
      <button className="new-chat" onClick={onNew}><Plus size={18}/> Nova conversa</button>
      <p className="sidebar-label">CONVERSAS</p>
      <nav className="conversation-list">{conversations.map(conversation => <div className={`conversation-item ${activeId === conversation.id ? 'selected' : ''}`} key={conversation.id}>
        <button className="conversation-select" onClick={() => onSelect(conversation.id)} title={conversation.title}><MessageSquare size={17}/><span>{conversation.title}</span></button>
        <button className="icon-button delete-chat" aria-label={`Excluir ${conversation.title}`} onClick={() => onDelete(conversation.id)}><Trash2 size={16}/></button>
      </div>)}</nav><div className="sidebar-footer">phIA · Frontend v0.1</div>
    </aside></>;
}
