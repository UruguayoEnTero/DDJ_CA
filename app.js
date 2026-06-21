// DDJ CA Colombia — Capa de datos (localStorage)
const DB_KEY = 'ddj_ca_v3';
const STAFF_PASS = 'DDJ2026';

function getDB() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return initDB();
}

function saveDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function initDB() {
  const db = {
    currentUser: null,
    expedientes: [
      {
        id: 'EXP-2026-001',
        tipo: 'Penal',
        titulo: 'Caso homicidio agravado — Sector Industrial Norte',
        estado: 'En proceso',
        tribunal: 'Corte Suprema de Justicia',
        partes: { parte1: 'Estado de CA Colombia', parte2: 'Carlos R. Mendoza' },
        rol1: 'Acusador',
        rol2: 'Acusado',
        fechaApertura: '2026-01-15',
        descripcion: 'Proceso penal por delito de homicidio agravado ocurrido el 10 de enero de 2026 en el sector industrial norte. Se adelanta investigación con múltiples testigos.',
        actuaciones: [
          { fecha: '2026-01-15', descripcion: 'Apertura del expediente y admisión de la acusación formal.', funcionario: 'Mag. Elena Torres' },
          { fecha: '2026-01-22', descripcion: 'Primera audiencia de imputación de cargos celebrada. El acusado se declara no culpable.', funcionario: 'Mag. Elena Torres' },
          { fecha: '2026-02-05', descripcion: 'Audiencia preparatoria programada para el 20 de febrero.', funcionario: 'Sec. Marco Reyes' },
        ]
      },
      {
        id: 'EXP-2026-002',
        tipo: 'Civil',
        titulo: 'Disputa de propiedad — Av. Libertad 450',
        estado: 'Abierto',
        tribunal: 'Tribunal Superior de Justicia',
        partes: { parte1: 'Inmobiliaria Los Pinos S.A.', parte2: 'Juan D. Vargas' },
        rol1: 'Demandante',
        rol2: 'Demandado',
        fechaApertura: '2026-02-10',
        descripcion: 'Proceso civil por disputa de titularidad sobre inmueble ubicado en Av. Libertad 450. La parte demandante alega contrato de compraventa incumplido.',
        actuaciones: [
          { fecha: '2026-02-10', descripcion: 'Radicación de la demanda civil y asignación al Tribunal Superior.', funcionario: 'Juez A. Pérez' },
        ]
      }
    ],
    documentos: [
      { id: 'DOC-001', codigo: 'COD-001', titulo: 'Código Penal', categoria: 'Penal', contenido: 'CÓDIGO PENAL DE CA COLOMBIA\n\nArtículo 1. Principio de legalidad.\nNadie podrá ser sancionado por una conducta que no esté expresamente tipificada en este código al momento de su comisión.\n\nArtículo 2. Clasificación de penas.\nLas penas se clasifican en: privativas de libertad, restrictivas de derechos y pecuniarias.\n\nArtículo 3. Responsabilidad penal.\nSolo será penalmente responsable quien cometa la conducta por dolo o culpa.', fechaActualizacion: '2026-01-01', actualizadoPor: 'Administración' },
      { id: 'DOC-002', codigo: 'COD-002', titulo: 'Código de Procedimiento Penal', categoria: 'Procesal', contenido: 'CÓDIGO DE PROCEDIMIENTO PENAL DE CA COLOMBIA\n\nArtículo 1. Principios rectores.\nEl proceso penal se rige por los principios de publicidad, oralidad, inmediación y contradicción.\n\nArtículo 2. Derecho a la defensa.\nTodo imputado tiene derecho a ser asistido por un defensor de su elección desde el momento de la aprehensión.', fechaActualizacion: '2026-01-01', actualizadoPor: 'Administración' },
      { id: 'DOC-003', codigo: 'COD-003', titulo: 'Constitución del Servidor', categoria: 'Constitucional', contenido: 'CONSTITUCIÓN POLÍTICA DE CA COLOMBIA\n\nArtículo 1. Estado social de derecho.\nCA Colombia es un Estado social de derecho, fundado en el respeto de la dignidad humana, el trabajo, la solidaridad y la legalidad.\n\nArtículo 2. Fines del Estado.\nGarantizar la vida, convivencia, trabajo, justicia e igualdad de todos los ciudadanos.', fechaActualizacion: '2026-01-01', actualizadoPor: 'Administración' },
      { id: 'DOC-004', codigo: 'COD-004', titulo: 'Ley de Tránsito', categoria: 'Administrativo', contenido: 'LEY DE TRÁNSITO DE CA COLOMBIA\n\nArtículo 1. Licencia obligatoria.\nTodo conductor debe portar licencia vigente al momento de conducir cualquier vehículo motorizado.\n\nArtículo 2. Clasificación de infracciones.\nLas infracciones de tránsito se clasifican en leves, graves y gravísimas según su impacto en la seguridad vial.', fechaActualizacion: '2026-01-01', actualizadoPor: 'Administración' },
      { id: 'DOC-005', codigo: 'COD-005', titulo: 'Régimen Disciplinario', categoria: 'Administrativo', contenido: 'RÉGIMEN DISCIPLINARIO DE FUNCIONARIOS PÚBLICOS\n\nArtículo 1. Ámbito de aplicación.\nLos funcionarios públicos están sujetos a este régimen en el ejercicio de sus funciones.\n\nArtículo 2. Clasificación de faltas.\nLas faltas disciplinarias se clasifican en leves, graves y gravísimas según la gravedad de la conducta.', fechaActualizacion: '2026-01-01', actualizadoPor: 'Administración' },
      { id: 'DOC-006', codigo: 'COD-006', titulo: 'Ley de Armas', categoria: 'Penal', contenido: 'LEY DE ARMAS DE CA COLOMBIA\n\nArtículo 1. Licencia de porte.\nSolo podrán portar armas de fuego quienes cuenten con licencia vigente expedida por la autoridad competente.\n\nArtículo 2. Porte ilegal.\nEl porte ilegal de armas constituye delito sancionable con pena privativa de libertad de 2 a 8 años.', fechaActualizacion: '2026-01-01', actualizadoPor: 'Administración' },
    ],
    personal: [
      { id: 'USR-001', nombre: 'Elena Torres', cargo: 'Magistrada Presidenta', tribunal: 'Corte Suprema de Justicia', fechaIngreso: '2025-06-01', activo: true },
      { id: 'USR-002', nombre: 'Marco Reyes', cargo: 'Secretario Judicial', tribunal: 'Corte Suprema de Justicia', fechaIngreso: '2025-08-15', activo: true },
      { id: 'USR-003', nombre: 'Andrea Pérez', cargo: 'Magistrada', tribunal: 'Tribunal Superior de Justicia', fechaIngreso: '2025-09-01', activo: true },
      { id: 'USR-004', nombre: 'Roberto Salcedo', cargo: 'Juez de Circuito', tribunal: 'Juzgado de Circuito', fechaIngreso: '2025-10-10', activo: true },
    ]
  };
  saveDB(db);
  return db;
}

function generateExpId(db) {
  const year = new Date().getFullYear();
  const count = db.expedientes.filter(e => e.id.includes(String(year))).length + 1;
  return `EXP-${year}-${String(count).padStart(3, '0')}`;
}
function generateDocId(db) {
  return `DOC-${String(db.documentos.length + 1).padStart(3, '0')}`;
}
function generateUsrId(db) {
  return `USR-${String(db.personal.length + 1).padStart(3, '0')}`;
}

function badgeClass(estado) {
  const map = {
    'Abierto': 'badge-blue',
    'En proceso': 'badge-yellow',
    'En apelación': 'badge-orange',
    'Cerrado': 'badge-green',
    'Archivado': 'badge-gray'
  };
  return map[estado] || 'badge-gray';
}
