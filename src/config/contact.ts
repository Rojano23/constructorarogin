export const contact = {
  email: 'contacto@constructorarogin.com',
  website: 'https://www.constructorarogin.com',
  whatsapp: '529617857513',
};
export const quoteUrl = `mailto:${contact.email}?subject=${encodeURIComponent('Solicitud de cotización — Constructora ROGIN')}`;

const whatsappMessage = 'Hola, me interesa solicitar información sobre los servicios de Constructora ROGIN.';
export const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
