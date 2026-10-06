import { services } from '../data/services';
import { SectionHeading } from './SectionHeading';
export function Services() {
 return <section id="servicios" className="section services"><div className="container"><div className="intro-row"><SectionHeading eyebrow="Servicios" title="Soluciones integrales para cada proyecto.">Atendemos las necesidades de la obra con servicios de construcción, rehabilitación y mantenimiento.</SectionHeading></div><div className="service-grid">{services.map(({title, description, icon: Icon}, i) => <article className="service-card" key={title}><div className="service-top"><Icon size={30} strokeWidth={1.3}/><span>0{i+1}</span></div><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>;
}
