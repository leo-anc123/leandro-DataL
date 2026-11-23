export interface SiteConfig {
  name: string;
  brand: string;
  description: string;
  email: string;
  cvEsUrl: string | null;
  cvEnUrl: string | null;
  caseStudies: {
    nodoIa: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    demoNodoIa: string;
  };
  flags: {
    showCV: boolean;
    enableEN: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: "Leandro DataL",
  brand: "Leandro / DataL",
  description: "Portfolio de Ciencia de Datos, Modelado y Simulación",
  email: "contacto@leandrodatal.com",
  cvEsUrl: null, // Si es null, muestra 'CV a pedido' sin enlaces rotos
  cvEnUrl: null,
  caseStudies: {
    nodoIa: "/proyectos/nodo-ia",
  },
  social: {
    github: "https://github.com/leo-anc123/viabilidad-ia-datacenters-ar",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    demoNodoIa: "https://demo.leandrodatal.com",
  },
  flags: {
    showCV: true,
    enableEN: false,
  },
};
