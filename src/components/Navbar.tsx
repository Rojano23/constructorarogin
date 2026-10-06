import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { asset } from '../config/site';
const links = ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Contacto'];
export function Navbar() {
 const [open, setOpen] = useState(false);
 const toggle = useRef<HTMLButtonElement>(null);
 useEffect(() => {
  const close = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } };
  const resize = () => { if (window.innerWidth > 850) setOpen(false); };
  window.addEventListener('keydown', close); window.addEventListener('resize', resize);
  return () => { window.removeEventListener('keydown', close); window.removeEventListener('resize', resize); };
 }, [open]);
 return <><a className="skip-link" href="#contenido">Saltar al contenido</a><header className="header"><div className="container nav-inner"><a className="brand" href="#inicio" aria-label="Constructora ROGIN, inicio"><img src={asset('logo/rogin_logo_web.png')} width="256" height="256" alt="Logo de Constructora ROGIN"/><span>ROGIN<small>CONSTRUCTORA</small></span></a><button ref={toggle} className="menu-toggle" aria-controls="navigation" aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button><nav id="navigation" aria-label="Principal" className={open ? 'navigation open' : 'navigation'}>{links.map(label => <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="button small" href="#contacto" onClick={() => setOpen(false)}>Hablemos <ArrowUpRight size={16}/></a></nav></div></header></>;
}
