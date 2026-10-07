// TODO(real): TOATE prețurile de mai jos sunt ORIENTATIVE, puse pentru demo după nivelul pieței din România.
// Clientul nu avea prețuri pe site-ul vechi. Se înlocuiesc cu lista lui înainte de publicare.
// Prețurile sunt în lei, fără TVA.

export type Unit = 'mp' | 'buc' | 'cm' | 'ml';

export interface PriceRow {
  id: string;
  name: string;
  spec: string;
  use: string;
  price: number;
  unit: Unit;
  /** rândurile cu `calc` apar în calculatorul de pe pagina Prețuri */
  calc?: boolean;
}

export interface PriceGroup {
  id: string;
  title: string;
  note: string;
  page: string;
  rows: PriceRow[];
}

export const unitLabel: Record<Unit, string> = {
  mp: 'lei/mp',
  buc: 'lei/buc',
  cm: 'lei/cm înălțime',
  ml: 'lei/ml'
};

export const priceGroups: PriceGroup[] = [
  {
    id: 'print',
    title: 'Print format mare',
    note: 'Print eco-solvent la 720 sau 1440 dpi. Comanda minimă se taxează ca 1 mp.',
    page: '/print-format-mare',
    rows: [
      { id: 'banner-frontlit', name: 'Banner frontlit', spec: 'PVC 510 g/mp', use: 'Exterior, 2-3 ani', price: 28, unit: 'mp', calc: true },
      { id: 'banner-blockout', name: 'Banner blockout', spec: 'PVC 610 g/mp, print față-verso', use: 'Bannere suspendate, vizibile din două părți', price: 52, unit: 'mp', calc: true },
      { id: 'mesh', name: 'Mesh', spec: 'PVC perforat 270 g/mp', use: 'Fațade și schele, lasă vântul să treacă', price: 34, unit: 'mp', calc: true },
      { id: 'autocolant-monomeric', name: 'Autocolant monomeric', spec: 'Lucios sau mat, 100 microni', use: 'Suprafețe plane, până la 3 ani', price: 36, unit: 'mp', calc: true },
      { id: 'autocolant-polimeric', name: 'Autocolant polimeric laminat', spec: '80 microni + laminare UV', use: 'Vitrine, panouri, 5-7 ani', price: 62, unit: 'mp', calc: true },
      { id: 'one-way', name: 'One way vision', spec: 'Folie perforată 60/40', use: 'Geamuri: reclamă la exterior, vizibilitate din interior', price: 58, unit: 'mp', calc: true },
      { id: 'sablat', name: 'Autocolant geam sablat', spec: 'Folie sablată, decupată pe contur', use: 'Birouri, uși de sticlă, vitrine', price: 65, unit: 'mp', calc: true },
      { id: 'backlit', name: 'Backlit', spec: 'Folie translucidă pentru casete', use: 'Casete luminoase, citylight', price: 55, unit: 'mp', calc: true },
      { id: 'canvas', name: 'Canvas', spec: 'Pânză 350 g/mp, cu sau fără șasiu', use: 'Tablouri, decor interior', price: 78, unit: 'mp', calc: true },
      { id: 'tapet', name: 'Tapet personalizat', spec: 'Suport vinilic texturat', use: 'Pereți în restaurante, hoteluri, birouri', price: 72, unit: 'mp', calc: true },
      { id: 'poster', name: 'Hârtie poster', spec: 'Blueback sau foto 200 g/mp', use: 'Afișe, planșe CAD, hărți', price: 26, unit: 'mp', calc: true }
    ]
  },
  {
    id: 'firme',
    title: 'Firme și litere volumetrice',
    note: 'Prețul final depinde de font, grosime și locul de montaj. Măsurătoarea este gratuită în Râmnicu Vâlcea.',
    page: '/firme-si-litere-volumetrice',
    rows: [
      { id: 'litere-polistiren', name: 'Litere din polistiren extrudat', spec: 'Grosime 3-10 cm, vopsite', use: 'Fațade, pensiuni, hoteluri', price: 7, unit: 'cm' },
      { id: 'litere-pvc', name: 'Litere din PVC expandat', spec: 'Forex 10-19 mm, frezate CNC', use: 'Interior, recepții, standuri', price: 9, unit: 'cm' },
      { id: 'litere-plexi', name: 'Litere din plexiglas', spec: 'Acril 5-10 mm, cu distanțiere', use: 'Sedii de firmă, cabinete', price: 14, unit: 'cm' },
      { id: 'litere-led', name: 'Litere volumetrice cu LED', spec: 'Față din plexiglas opal, lateral aluminiu', use: 'Firmă vizibilă noaptea', price: 26, unit: 'cm' },
      { id: 'caseta', name: 'Casetă luminoasă', spec: 'Profil aluminiu, față backlit sau plexiglas', use: 'Magazine, farmacii, saloane', price: 950, unit: 'mp' },
      { id: 'alucobond', name: 'Fronton din alucobond', spec: 'Bond 3 mm pe structură metalică', use: 'Placări de fațadă și frontoane', price: 420, unit: 'mp' },
      { id: 'totem', name: 'Totem publicitar', spec: 'Structură metalică, placare bond, opțional iluminat', use: 'Parcări, benzinării, parcuri comerciale', price: 4800, unit: 'buc' }
    ]
  },
  {
    id: 'auto',
    title: 'Colantări auto',
    note: 'Prețurile includ print, laminare și aplicare. Grafica se cotează separat dacă nu aveți machetă.',
    page: '/colantari-auto',
    rows: [
      { id: 'auto-usi', name: 'Inscripționare uși', spec: 'Autocolant decupat, 2 uși', use: 'Logo, telefon, site', price: 350, unit: 'buc' },
      { id: 'auto-partial', name: 'Colantare parțială', spec: 'Print polimeric laminat, laterale + spate', use: 'Autoutilitare tip Caddy, Dokker', price: 1400, unit: 'buc' },
      { id: 'auto-integral', name: 'Colantare integrală', spec: 'Folie cast laminată', use: 'Autoturism sau autoutilitară mică', price: 4200, unit: 'buc' },
      { id: 'auto-duba', name: 'Dubă mare', spec: 'Print polimeric laminat, laterale + uși spate', use: 'Transit, Sprinter, Master', price: 2600, unit: 'buc' },
      { id: 'auto-autobuz', name: 'Autobuz, o latură', spec: 'Print polimeric + one way pe geamuri', use: 'Campanii pe transport public', price: 3900, unit: 'buc' },
      { id: 'auto-prelata', name: 'Prelată TIR', spec: 'Print direct pe prelată', use: 'Semiremorci, o latură', price: 2900, unit: 'buc' },
      { id: 'auto-moto', name: 'Kit stickere moto / ATV', spec: 'Autocolant gros laminat, decupat pe contur', use: 'Motociclete, ATV, snowmobile, ambarcațiuni', price: 480, unit: 'buc' }
    ]
  },
  {
    id: 'promo',
    title: 'Promoționale și serigrafie',
    note: 'Prețuri pe bucată, cu inscripționare într-o culoare, la tirajul indicat. La tiraje mai mari prețul scade.',
    page: '/alte-servicii',
    rows: [
      { id: 'cana', name: 'Cană personalizată', spec: 'Ceramică albă 330 ml, print color', use: 'De la 10 bucăți', price: 22, unit: 'buc' },
      { id: 'tricou', name: 'Tricou inscripționat', spec: 'Bumbac 150 g, serigrafie o culoare', use: 'De la 20 de bucăți', price: 32, unit: 'buc' },
      { id: 'pix', name: 'Pix inscripționat', spec: 'Plastic, tampografie o culoare', use: 'De la 100 de bucăți', price: 2, unit: 'buc' },
      { id: 'bricheta', name: 'Brichetă inscripționată', spec: 'Tampografie o culoare', use: 'De la 100 de bucăți', price: 3, unit: 'buc' },
      { id: 'mousepad', name: 'Mouse pad', spec: 'Print color, 22 x 18 cm', use: 'De la 10 bucăți', price: 18, unit: 'buc' },
      { id: 'steag', name: 'Steag', spec: 'Poliester 110 g, 90 x 150 cm', use: 'Instituții, firme, evenimente', price: 85, unit: 'buc' },
      { id: 'placuta', name: 'Plăcuță sau indicator', spec: 'PVC ori bond, cu autocolant laminat', use: 'Plăcuțe stradale, semne de orientare', price: 45, unit: 'buc' }
    ]
  },
  {
    id: 'finisaje',
    title: 'Finisaje și montaj',
    note: 'Se adaugă la prețul de print, după caz.',
    page: '/preturi',
    rows: [
      { id: 'capse', name: 'Tiv și capse la banner', spec: 'Capse din 50 în 50 cm', use: 'Inclus la comenzi peste 5 mp', price: 4, unit: 'ml' },
      { id: 'laminare', name: 'Laminare', spec: 'Lucioasă sau mată, protecție UV', use: 'Autocolante de exterior', price: 18, unit: 'mp' },
      { id: 'aplicare', name: 'Aplicare autocolant', spec: 'Pe geam, panou sau perete', use: 'În Râmnicu Vâlcea și împrejurimi', price: 25, unit: 'mp' },
      { id: 'montaj-inaltime', name: 'Montaj la înălțime', spec: 'Alpinism utilitar, fără schelă', use: 'Mesh-uri, litere și bannere pe clădiri', price: 45, unit: 'mp' }
    ]
  }
];

export const groupById = (id: string) => priceGroups.find((g) => g.id === id)!;

export const minPrice = (id: string) => Math.min(...groupById(id).rows.map((r) => r.price));

export const fmt = (n: number) => n.toLocaleString('ro-RO');
