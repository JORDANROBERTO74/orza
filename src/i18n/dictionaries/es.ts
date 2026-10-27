import type { Dictionary } from "./en";

export const es = {
  meta: {
    title: "Orza — El presupuesto del hogar, sin discusiones",
    description:
      "Orza convierte los gastos fijos, el gasto compartido y lo que queda a fin de mes en una sola vista para todos los que pagan.",
  },
  nav: {
    items: [
      { hash: "#product", label: "Vista mensual" },
      { hash: "#shared", label: "Dinero compartido" },
      { hash: "#pricing", label: "Precios" },
      { hash: "#faq", label: "Preguntas" },
    ],
    cta: "Empezar gratis",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  hero: {
    badge: "Nuevo — reparto automático",
    titleLead: "El presupuesto del hogar,",
    titleAccent: "sin discusiones.",
    lead: "Una sola vista de los gastos fijos, el gasto diario y lo que realmente queda. Todos ven los mismos números y nadie rehace la hoja de cálculo.",
    primaryCta: "Empezar gratis",
    secondaryCta: "Ver cómo funciona",
    note: "Sin tarjeta. Carga los gastos fijos a mano o importa un extracto.",
    imageAlt:
      "Un cuaderno de cuentas, un bolígrafo y dos tazas de cerámica sobre una mesa de madera junto a la ventana",
  },
  values: {
    eyebrow: "Por qué Orza",
    title: "Pensado para el dinero que compartes.",
    lead: "Casi todas las apps de presupuesto están pensadas para una persona. Un hogar tiene gastos fijos, ingresos desiguales y un calendario que no coincide con el de nadie más.",
    items: [
      {
        title: "Primero, los gastos fijos",
        body: "Alquiler, suministros, suscripciones y deudas salen de la vista antes de repartir nada. Lo que ves es lo que de verdad está libre.",
      },
      {
        title: "Un reparto defendible",
        body: "Por ingresos, por uso o a partes iguales. Orza aplica la regla que elegiste y deja constancia de ella.",
      },
      {
        title: "Avisos antes del exceso",
        body: "El aviso llega cuando la categoría todavía tiene margen, no cuando el mes ya se fue.",
      },
      {
        title: "Cerrar toma dos minutos",
        body: "A fin de mes, Orza concilia lo previsto con lo gastado y traslada la diferencia al mes siguiente.",
      },
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos y después funciona solo.",
    lead: "La configuración se hace una vez. Cada mes siguiente arranca desde la misma base.",
    steps: [
      {
        title: "Carga lo fijo",
        body: "Alquiler, facturas, suscripciones, préstamos. Orza los convierte en la base desde la que empieza cada mes.",
      },
      {
        title: "Elige el reparto",
        body: "Por ingresos, por uso o a partes iguales. Cambia la regla después sin reescribir el historial.",
      },
      {
        title: "Mira el número que importa",
        body: "Una cifra: lo que queda por gastar hasta el próximo ingreso.",
      },
    ],
  },
  featureMonth: {
    eyebrow: "Vista mensual",
    title: "Un mes, una pantalla, sin hoja de cálculo.",
    lead: "La vista del mes agrupa gastos fijos, gasto variable y ahorro en el orden en que el dinero sale de la cuenta.",
    points: [
      "Fijos, variables y ahorro separados, para no confundir una buena semana con un buen mes.",
      "Los límites por categoría muestran el importe disponible, no solo el porcentaje gastado.",
      "Cada movimiento guarda quién pagó y cuánto debe cada uno.",
    ],
    imageAlt:
      "Un cuaderno abierto con columnas de cifras, una calculadora y una taza sobre un mantel de lino",
  },
  featureSplit: {
    eyebrow: "Dinero compartido",
    title: "Todos ven el mismo número.",
    lead: "Dos ingresos, un alquiler y una tarjeta compartida. Orza mantiene el reparto a la vista, para que la conversación sea sobre planes y no sobre aritmética.",
    points: [
      "Reparto por proporción de ingresos cuando los sueldos son distintos.",
      "Gastos compartidos y personales en libros separados, en la misma pantalla.",
      "Un resumen de cierre que puedes exportar cuando necesitas mostrarlo.",
    ],
    imageAlt:
      "Dos cuencos de cerámica, un sobre doblado y un pequeño montón de monedas sobre una mesa de madera clara",
  },
  pricing: {
    eyebrow: "Precios",
    title: "Un precio por hogar, no por persona.",
    lead: "Empieza gratis. Sube de plan cuando el hogar crezca.",
    period: "/ mes",
    freeLabel: "Gratis",
    billed: "Facturación mensual. IVA incluido.",
    plans: [
      {
        name: "Gratis",
        amountMinor: 0,
        summary: "Para quien lleva sus cuentas en solitario.",
        features: [
          "Un hogar",
          "Gastos fijos y límites por categoría",
          "Resumen de cierre mensual",
        ],
        cta: "Empezar gratis",
        featured: false,
      },
      {
        name: "Hogar",
        amountMinor: 600,
        summary: "Para un hogar que comparte las facturas.",
        features: [
          "Miembros ilimitados",
          "Reparto por ingresos",
          "Libros compartido y personal",
          "Exportar al cierre",
        ],
        cta: "Elegir Hogar",
        featured: true,
      },
      {
        name: "Asesor",
        amountMinor: 1500,
        summary: "Para quien gestiona más de un hogar.",
        features: [
          "Todo lo de Hogar",
          "Varios hogares",
          "Comparación año a año",
          "Soporte prioritario",
        ],
        cta: "Hablar con nosotros",
        featured: false,
      },
    ],
    finePrint:
      "Precios en euros. Cancela cuando quieras y exporta tus datos antes de irte.",
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Lo que se pregunta antes de empezar.",
    items: [
      {
        question: "¿Orza es un banco?",
        answer:
          "No. Orza no guarda dinero ni lo mueve. Lee las cuentas que autorizas y hace las cuentas por encima.",
      },
      {
        question: "¿Tengo que conectar mi banco?",
        answer:
          "No. Puedes cargar los gastos fijos a mano o importar un extracto. Conectar una cuenta ahorra tiempo, no es obligatorio.",
      },
      {
        question: "¿Cómo funciona el reparto por ingresos?",
        answer:
          "Los gastos compartidos se dividen en proporción al ingreso de cada miembro ese mes. La regla queda guardada con el mes, así que un cambio posterior no reescribe el pasado.",
      },
      {
        question: "¿Qué pasa a fin de mes?",
        answer:
          "Orza compara lo previsto con lo gastado, muestra la diferencia por categoría y traslada el saldo al mes siguiente.",
      },
      {
        question: "¿Puedo usarlo yo solo?",
        answer:
          "Sí. Un hogar de una persona tiene la misma vista, sin reglas de reparto.",
      },
      {
        question: "¿Qué pasa con mis datos?",
        answer:
          "Se usan para calcular tu presupuesto y nada más. Puedes exportarlos cuando quieras.",
      },
    ],
  },
  cta: {
    title: "Sabe qué queda antes de que el mes te lo pregunte.",
    lead: "Configura los gastos fijos una vez. El mes siguiente empieza ya ordenado.",
    button: "Empezar gratis",
    note: "Este es un sitio de demostración. Sin cuentas, sin pagos y sin datos recogidos.",
  },
  footer: {
    tagline: "Un presupuesto compartido para quien divide las facturas.",
    columns: [
      {
        title: "Producto",
        links: [
          { hash: "#product", label: "Vista mensual" },
          { hash: "#shared", label: "Dinero compartido" },
          { hash: "#pricing", label: "Precios" },
          { hash: "#faq", label: "Preguntas" },
        ],
      },
    ],
    rights: "Todos los derechos reservados.",
  },
  notFound: {
    title: "Esta página no está aquí.",
    body: "Puede que el enlace sea antiguo o que la página se haya movido.",
    action: "Volver al inicio",
  },
} satisfies Dictionary;
