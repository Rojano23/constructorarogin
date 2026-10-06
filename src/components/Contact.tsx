import { ArrowUpRight, Mail, MapPin, Globe } from 'lucide-react';
import { contact, quoteUrl } from '../config/contact';
import { site } from '../config/site';
import { WhatsAppButton } from './WhatsAppButton';
export function Contact() {
 return <section id="contacto" className="section contact"><div className="container contact-grid"><div><span className="eyebrow">Contacto</span><h2>Hablemos de tu próximo proyecto</h2><p>Cuéntanos las necesidades de tu proyecto y nuestro equipo podrá ponerse en contacto contigo.</p><a className="button light" href={quoteUrl}>Solicitar cotización <ArrowUpRight size={18}/></a></div><div className="contact-details"><a href={`mailto:${contact.email}`}><Mail size={22}/><span><small>CORREO ELECTRÓNICO</small>{contact.email}</span></a><a href={contact.website}><Globe size={22}/><span><small>SITIO WEB</small>www.constructorarogin.com</span></a><div><MapPin size={22}/><span><small>UBICACIÓN</small>{site.location}</span></div><div className="actions"><a className="button outline" href={`mailto:${contact.email}`}>Enviar correo <ArrowUpRight size={17}/></a><WhatsAppButton/></div></div></div></section>;
}
