import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
export function App() { return <><Navbar/><main id="contenido" tabIndex={-1}><Hero/><About/><Services/><Projects/><Contact/></main><Footer/><WhatsAppButton floating/></>; }
