import { asset, site } from '../config/site';
import { contact } from '../config/contact';
export function Footer() {
 return <footer className="container footer"><div className="footer-main"><a className="brand" href="#inicio"><img src={asset('logo/rogin_logo_web.png')} width="256" height="256" loading="lazy" alt="Logo ROGIN"/><span>ROGIN<small>CONSTRUCTORA</small></span></a><p>{site.name}<br/>Construimos soluciones que perduran.</p><div><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.website}>www.constructorarogin.com</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Constructora ROGIN S.A. de C.V.</span><span>Desarrollo web por RX23 Digital</span></div></footer>;
}
