export const content = {
  brand: {
    name: "Aura Beauty",
    city: "Valencia",
  },

  hero: {
    headline: "Estética en Valencia pensada para que te sientas increíble",
    subheadline:
      "Manicura, cejas, pestañas y tratamientos faciales con reserva rápida desde el móvil.",
    badges: ["Reserva fácil", "Cuidado real", "Resultados visibles"],
    primaryCta: {
      label: "Reservar por WhatsApp",
      // Cambia el número cuando lo uses con un cliente
      href: "https://wa.me/34600000000",
    },
    secondaryCta: { label: "Ver servicios", href: "#servicios" },
    // Usa una imagen bonita y general de estética
    image: {
      src: "/images/hero-estetica.webp",
      alt: "Aura Beauty - Estética en Valencia",
    },
  },
  services: {
    title: "Servicios estrella",
    subtitle:
      "Los más reservados. Elige el tuyo y te confirmamos disponibilidad por WhatsApp.",
    items: [
      {
        name: "Manicura & Gel",
        description: "Acabado pulido y duradero, con diseño si lo quieres.",
        fromPrice: "desde 25€",
      },
      {
        name: "Diseño de cejas",
        description: "Forma, simetría y un efecto natural que abre la mirada.",
        fromPrice: "desde 18€",
      },
      {
        name: "Lifting de pestañas",
        description: "Curvatura y definición sin extensiones.",
        fromPrice: "desde 35€",
      },
      {
        name: "Limpieza facial glow",
        description: "Piel luminosa, limpia y con textura más uniforme.",
        fromPrice: "desde 40€",
      },
    ],
  },
  gallery: {
    title: "Resultados que hablan solos",
    subtitle: "Una selección de trabajos y detalles. Aquí manda el acabado.",
    items: [
      { src: "/images/gallery-01.webp", alt: "Detalle de manicura" },
      { src: "/images/gallery-02.webp", alt: "Diseño de cejas natural" },
      { src: "/images/gallery-03.webp", alt: "Lifting de pestañas" },
      { src: "/images/gallery-04.webp", alt: "Tratamiento facial glow" },
      { src: "/images/gallery-05.webp", alt: "Detalle beauty studio" },
      { src: "/images/gallery-06.webp", alt: "Resultado estética" },
    ],
  },
  location: {
    title: "Dónde estamos",
    subtitle: "Cita fácil, trato cercano y ubicación cómoda.",
    address: "Calle Ejemplo 12, Valencia",
    schedule: [
      { day: "Lunes a Viernes", hours: "10:00 – 19:00" },
      { day: "Sábado", hours: "10:00 – 14:00" },
      { day: "Domingo", hours: "Cerrado" },
    ],
    mapEmbed: "https://www.google.com/maps?q=Valencia&output=embed",
  },
};
