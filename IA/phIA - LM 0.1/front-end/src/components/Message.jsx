import { Bot, User } from 'lucide-react';
export default function Message({ message }) {
  const isUser = message.role === 'user';
  return <div className={`message-row ${isUser ? 'from-user' : 'from-phia'}`}>
    {!isUser && <div className="avatar phia-avatar"><Bot size={19}/></div>}
    <div className="message-bubble">{message.text}</div>
    {isUser && <div className="avatar user-avatar"><User size={18}/></div>}
  </div>;
}
