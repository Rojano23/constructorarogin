import { MessageCircle } from 'lucide-react';
import { contact, whatsappUrl } from '../config/contact';

export function WhatsAppButton({ floating = false }: { floating?: boolean }) {
 if (!contact.whatsapp) return null;
 return <a
  className={floating ? 'whatsapp-float' : 'button outline'}
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={floating ? 'Solicitar información a Constructora ROGIN por WhatsApp (abre en otra pestaña)' : undefined}
 >
  <MessageCircle size={floating ? 25 : 20} aria-hidden="true"/>
  {!floating && 'WhatsApp'}
 </a>;
}
