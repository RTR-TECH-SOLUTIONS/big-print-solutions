// Datele firmei, într-un singur loc. Preluate de pe site-ul vechi (bigprintsolutions.ro/contact).
export const site = {
  name: 'Big Print Solutions',
  brand: 'Ilustrator Advertising',
  legalName: 'SC Ilustrator SRL',
  since: 1998,
  city: 'Râmnicu Vâlcea',
  address: 'Strada Gib Mihăescu nr. 8, Râmnicu Vâlcea',
  phone: '0723 372 338',
  phoneHref: 'tel:+40723372338',
  // al doilea mobil apare pe materialele firmei din galeriile site-ului vechi; e și numărul de WhatsApp
  phone2: '0773 925 407',
  phone2Href: 'tel:+40773925407',
  landline: '0250 730 335',
  landlineHref: 'tel:+40250730335',
  fax: '0350 811 523',
  email: 'ilustratoradv@yahoo.com',
  whatsapp: '40773925407',
  facebook: 'https://www.facebook.com/bigprintsolutions',
  cui: 'RO 10589915',
  regCom: 'J38/226/1998',
  bank: 'BCR Râmnicu Vâlcea',
  iban: 'RO42 RNCB 0263 0289 1355 0001',
  // TODO(real): programul nu apare pe site-ul vechi, de confirmat cu clientul.
  hours: 'Luni - Vineri, 9:00 - 17:00',
  mapEmbed:
    'https://www.google.com/maps?q=Strada+Gib+Mih%C4%83escu+8,+R%C3%A2mnicu+V%C3%A2lcea&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Strada+Gib+Mih%C4%83escu+8+R%C3%A2mnicu+V%C3%A2lcea'
};

export const nav = [
  { label: 'Print format mare', href: '/print-format-mare' },
  { label: 'Firme și litere', href: '/firme-si-litere-volumetrice' },
  { label: 'Colantări auto', href: '/colantari-auto' },
  { label: 'Alte servicii', href: '/alte-servicii' },
  { label: 'Prețuri', href: '/preturi' },
  { label: 'Portofoliu', href: '/portofoliu' },
  { label: 'Contact', href: '/contact' }
];

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Link intern care respectă `base` din astro.config. */
export const u = (path: string) => `${base}${path}`;

/** Link click-to-chat cu mesaj precompletat. */
export const wa = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const waDefault = wa('Bună ziua! Aș dori o ofertă pentru: ');
