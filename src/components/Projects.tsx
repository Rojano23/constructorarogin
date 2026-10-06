import { asset } from '../config/site';
import { projects } from '../data/projects';
import { SectionHeading } from './SectionHeading';
export function Projects() {
 return <section id="proyectos" className="section container projects"><div className="intro-row"><SectionHeading eyebrow="Proyectos destacados" title="Nuestra experiencia, en obra.">Una selección de trabajos en infraestructura urbana, espacios hospitalarios y mantenimiento institucional en Veracruz.</SectionHeading></div><div className="project-grid">{projects.map((p) => <article className="project-card" key={p.name}><div className="project-image"><img src={asset(`projects/${p.image}`)} alt={p.alt} width={p.width} height={p.height} loading="lazy"/></div><div className="project-body"><div className="project-meta"><span>{p.sector}</span><span>{p.year}</span></div><h3>{p.name}</h3><span className="project-location">{p.location}</span><p>{p.description}</p></div></article>)}</div></section>;
}
