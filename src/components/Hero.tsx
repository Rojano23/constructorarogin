import { ArrowUpRight, ArrowDown, MapPin } from 'lucide-react';
import { asset } from '../config/site';

export function Hero() {
 return <section id="inicio" className="hero">
  <img className="hero-background" src={asset('hero/rogin-hero-panoramico.webp')} width="1672" height="941" alt="" fetchPriority="high"/>
  <div className="hero-overlay" aria-hidden="true"/>
  <div className="container hero-content">
   <div className="hero-copy">
    <span className="eyebrow">CONSTRUCTORA ROGIN S.A. DE C.V.</span>
    <h1>Construimos soluciones <em>que perduran.</em></h1>
    <p>Experiencia en obra civil, infraestructura, construcción y mantenimiento para proyectos públicos, institucionales y particulares.</p>
    <div className="actions">
     <a className="button" href="#contacto">Solicitar cotización <ArrowUpRight size={19}/></a>
     <a className="text-link" href="#proyectos">Conocer proyectos <ArrowDown size={18}/></a>
    </div>
    <div className="hero-location"><MapPin size={15}/> Xalapa, Veracruz <span>Obra civil · Infraestructura · Construcción</span></div>
   </div>
  </div>
 </section>;
}
