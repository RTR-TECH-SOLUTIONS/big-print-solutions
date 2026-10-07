// Lucrări reale ale clientului, luate din galeriile de pe site-ul vechi (bigprintsolutions.ro).
// Originalele sunt în _client-material/galerii, convertite în public/lucrari/<prefix>-<nr>.webp.
// TODO(real): legendele (client + ce s-a executat) sunt deduse din poze, de verificat cu clientul.
import dims from './foto-dims.json';

export type WorkKind = 'firme' | 'auto' | 'fatade' | 'print' | 'alte';

export interface Work {
  file: string;
  w: number;
  h: number;
  client: string;
  what: string;
  kind: WorkKind;
}

export const kindLabel: Record<WorkKind, string> = {
  firme: 'Firme și litere',
  auto: 'Auto și moto',
  fatade: 'Vitrine și panouri',
  print: 'Print',
  alte: 'Alte lucrări'
};

const sizes = dims as unknown as Record<string, [number, number]>;

const list: [file: string, client: string, what: string, kind: WorkKind][] = [
  // Firme luminoase
  ['fl-16', 'Proper Pizza & Pasta', 'Casetă luminoasă și copertină', 'firme'],
  ['fl-18', 'Proper Pizza & Pasta', 'Firma aprinsă, noaptea', 'firme'],
  ['fl-05', 'Restaurant Casa Domnească', 'Litere volumetrice pe fronton', 'firme'],
  ['fl-08', 'Ferrara', 'Litere volumetrice aurii', 'firme'],
  ['fl-10', 'Diana', 'Firmă luminoasă cu litere și sigle', 'firme'],
  ['fl-02', 'Diana Supermarket', 'Panou de fronton', 'firme'],
  ['fl-12', 'Registrul Auto Român', 'Litere volumetrice pe clădire', 'firme'],
  ['fl-06', 'Sport Time', 'Casetă luminoasă cu print', 'firme'],
  ['fl-09', 'Ferrara Design', 'Litere decupate, la interior', 'firme'],
  ['fl-15', 'Instalații termice și sanitare', 'Fronton cu casetă luminoasă', 'firme'],
  ['fl-14', 'Proper Pizza & Pasta', 'Sigla volumetrică, în lucru', 'firme'],
  // Firme din polistiren
  ['fp-05', 'GSM Service', 'Litere volumetrice din polistiren', 'firme'],
  ['fp-13', 'Cinema 3D', 'Litere volumetrice de mari dimensiuni', 'firme'],
  ['fp-11', 'Cinema 3D', 'Detaliu de grosime', 'firme'],
  ['fp-06', 'VEVE', 'Litere volumetrice în două culori', 'firme'],
  ['fp-12', 'Extro Fruct', 'Litere și siglă volumetrică', 'firme'],
  ['fp-04', 'Extro Fruct', 'Litere montate pe colț de clădire', 'firme'],
  ['fp-02', 'GSM Shop & Service', 'Litere din polistiren, verde', 'firme'],
  ['fp-20', 'Pensiunea Relax', 'Litere volumetrice pentru pensiune', 'firme'],
  ['fp-09', 'The Place', 'Placă ovală cu litere în relief', 'firme'],
  ['fp-03', 'Irreversible by Bozo', 'Litere cursive, în timpul montajului', 'firme'],
  ['fp-17', 'Diana', 'Siglă rotundă volumetrică', 'firme'],
  ['fp-18', 'Diana', 'Litere volumetrice pe copertină', 'firme'],
  ['fp-25', 'Megainvest', 'Litere pe toată lungimea clădirii', 'firme'],
  ['fp-21', 'Piața Simian', 'Litere montate prin alpinism utilitar', 'firme'],
  // Totemuri
  ['tt-04', 'Euromarket', 'Totem publicitar', 'firme'],
  ['tt-02', 'Diana', 'Casetă pe stâlp', 'firme'],
  ['tt-01', 'Totem stradal', 'Totem la intrarea în incintă', 'firme'],
  // Decor auto
  ['au-07', 'Prestachim', 'Colantare dubă Ford Transit', 'auto'],
  ['au-01', 'RoRec', 'Colantare integrală de autobuz', 'auto'],
  ['au-04', 'Rodach', 'Colantare integrală cu print', 'auto'],
  ['au-06', 'Damila și Rodach', 'Reclamă pe autobuz', 'auto'],
  ['au-08', 'Damila', 'Colantare parțială VW Caddy', 'auto'],
  ['au-14', 'Diana', 'Inscripționare autoutilitară', 'auto'],
  ['au-20', 'Diana', 'Camion frigorific cu print', 'auto'],
  ['au-15', 'Nurvil', 'Inscripționare VW Caddy', 'auto'],
  ['au-10', 'Nurvil Anvelope', 'Colantare uși spate', 'auto'],
  ['au-12', 'Magazin de mobilă', 'Print pe laterala dubei', 'auto'],
  ['au-13', 'Dacia pick-up', 'Inscripționare laterală', 'auto'],
  ['au-18', 'Diana', 'Citroën Berlingo cu print', 'auto'],
  ['au-16', 'Suzuki', 'Stickere de carenă', 'auto'],
  // Stickere motoare și ambarcațiuni
  ['st-03', 'Evinrude 5', 'Stickere pe capac de motor', 'auto'],
  ['st-10', 'Ambarcațiune', 'Nume și număr de înmatriculare', 'auto'],
  ['st-02', 'Mercury 25', 'Kit de stickere pentru motor', 'auto'],
  ['st-05', 'Evinrude 20', 'Kit de stickere pentru motor', 'auto'],
  ['st-06', 'Selva 80', 'Kit de stickere pentru motor', 'auto'],
  ['st-13', 'Mercury', 'Stickere decupate pe contur', 'auto'],
  ['st-04', 'Suzuki Four Stroke', 'Kit de stickere pentru motor', 'auto'],
  // Print autocolant, vitrine
  ['pa-01', 'Diana Market', 'Fațadă cu vitrine colantate', 'fatade'],
  ['pa-03', 'Diana Supermarket', 'Fronton și vitrine colantate integral', 'fatade'],
  ['pa-07', 'Diana', 'Vitrine cu autocolant printat', 'fatade'],
  ['pa-12', 'Diana', 'Fațadă de sticlă colantată', 'fatade'],
  ['pa-06', 'Market Diana', 'Chioșc cu fronton și vitrine', 'fatade'],
  ['pa-13', 'Magazin alimentar', 'Vitrine printate', 'fatade'],
  ['pa-10', 'Magazin în mall', 'Montaj de print pe perete', 'fatade'],
  ['pa-14', 'Pension Cafe Relax', 'Autocolant decupat pe geam', 'fatade'],
  ['gs-01', 'Cinema', 'Autocolant sablat pe perete de sticlă', 'fatade'],
  ['gs-02', 'Cinema', 'Geam sablat cu siglă', 'fatade'],
  // Panouri
  ['pn-03', 'Diana', 'Fronton pe colț de clădire', 'fatade'],
  ['pn-06', 'Motors Top', 'Montaj de fronton', 'fatade'],
  ['pn-01', 'Magazin de ceasuri', 'Panou printat în mall, la montaj', 'fatade'],
  ['pn-07', 'Diana', 'Panou printat în magazin', 'fatade'],
  ['pn-09', 'Magazin de mobilă', 'Panou publicitar pe structură', 'fatade'],
  ['pn-05', 'Birou de asigurări', 'Placă de firmă', 'fatade'],
  ['pn-02', 'Diana', 'Echipa la montajul fațadei', 'fatade'],
  // Print: banner, hârtie, mesh, canvas
  ['pa-09', 'Diana', 'Autocolant pentru vitrine, în imprimantă', 'print'],
  ['pa-04', 'Autocolant printat', 'Print eco-solvent, la ieșirea din imprimantă', 'print'],
  ['ph-09', 'Muzica pentru toți', 'Afișe de concert', 'print'],
  ['ph-02', 'Afișe de film', 'Print pe hârtie foto', 'print'],
  ['ph-06', 'Meniu luminos', 'Print backlit pentru casete de meniu', 'print'],
  ['ph-08', 'Afiș de spectacol', 'Afiș montat pe clădire', 'print'],
  ['pb-06', 'Compact', 'Banner de concert, finisat', 'print'],
  ['pb-08', 'Banner stradal', 'Banner suspendat peste stradă', 'print'],
  ['pb-03', 'Proconsul', 'Banner pe remorcă de bicicletă', 'print'],
  ['pb-05', 'Oktoberfest', 'Publicitate pe bicicletă', 'print'],
  ['pb-02', 'Vopsitorie auto', 'Banner pe remorcă', 'print'],
  ['pm-02', 'Damila și Rodach', 'Mesh pentru fundal de scenă', 'print'],
  ['pm-01', 'Mesh de mari dimensiuni', 'Întins în atelier înainte de montaj', 'print'],
  ['pc-02', 'Canvas', 'Tablouri pe șasiu', 'print'],
  ['pc-03', 'Canvas', 'Tablou pe șasiu, cu margine printată', 'print'],
  ['pc-01', 'Canvas', 'Detaliu de textură', 'print'],
  ['pc-05', 'Tapet personalizat', 'Imitație de cărămidă', 'print'],
  // Alte lucrări
  ['pd-04', 'Pardoseală epoxidică', 'Print cu valuri, sub rășină', 'alte'],
  ['pd-02', 'Pardoseală epoxidică', 'Print cu boabe de cafea', 'alte'],
  ['pd-05', 'Pardoseală epoxidică', 'Baie cu print de plajă', 'alte'],
  ['sg-01', 'Diana', 'Pixuri inscripționate prin tampografie', 'alte'],
  ['sg-02', 'Diana', 'Tampografie, în lucru', 'alte'],
  ['sg-03', 'Hardwood', 'Pixuri și brichete inscripționate', 'alte'],
  ['el-05', 'Brichetă', 'Inscripționare prin tampografie', 'alte'],
  ['el-04', 'Materiale electorale', 'Bannere în imprimantă', 'alte'],
  ['el-08', 'Materiale electorale', 'Banner de mari dimensiuni pe clădire', 'alte'],
  ['al-01', 'Piața Simian', 'Montaj prin alpinism utilitar', 'alte'],
  ['al-04', 'Montaj la înălțime', 'Litere fixate pe acoperiș', 'alte'],
  ['al-02', 'Montaj la înălțime', 'Lucru pe fațadă, fără schelă', 'alte'],
  ['im-01', 'Imprimantă eco-solvent', 'Utilaj din atelier', 'alte'],
  ['im-03', 'Imprimantă eco-solvent', 'Disponibilă second-hand', 'alte'],
  ['im-06', 'Cutter-plotter', 'Decupare pe contur', 'alte'],
  ['im-07', 'Imprimantă eco-solvent', 'Probă de print', 'alte'],
  ['ft-01', 'Fotografie de interior', 'Restaurant', 'alte']
];

export const works: Work[] = list.map(([file, client, what, kind]) => {
  const size = sizes[file];
  if (!size) throw new Error(`Lipsește poza ${file} din foto-dims.json`);
  return { file, w: size[0], h: size[1], client, what, kind };
});

export const workByFile = (file: string) => {
  const work = works.find((w) => w.file === file);
  if (!work) throw new Error(`Lucrare necunoscută: ${file}`);
  return work;
};

// Clienți enumerați de firmă pe site-ul vechi.
export const clients = [
  'Hidroelectrica', 'Petrom', 'Diana', 'Boromir', 'CET Govora', 'Junkers', 'Hervil',
  'Honterus Sibiu', 'Hardwood', 'Deco', 'Gerovil', 'Dacos', 'Antares',
  'Primăria Râmnicu Vâlcea', 'Muzeul Județean Vâlcea', 'Uniunea Artiștilor Plastici Vâlcea',
  'Clubul Sportiv Oltchim', 'Televiziunea VTV', 'Conexvil', 'Vadova', 'Prestachim',
  'Citymedia', 'Tipografia Honterus', 'Forumul Democrat din Sibiu', 'Arpo Curtea de Argeș'
];
