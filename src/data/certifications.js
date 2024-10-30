export const categories = {
  ASSOCIATES: 'Associates',
  ADMINISTRATORS: 'Administrators',
  DESIGNERS: 'Designers',
  CONSULTANTS: 'Consultants',
  ARCHITECTS: 'Architects',
  MARKETERS: 'Marketers',
  DEVELOPERS: 'Developers',
  AI: 'Artificial Intelligence'
};

export const certifications = [
  // ASSOCIATES
  {
    id: 'associate',
    title: 'Salesforce Associate',
    category: categories.ASSOCIATES,
    description: 'Validación de conocimientos fundamentales en la plataforma Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mty&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 40,
      passingScore: 62,
      duration: 90,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Fundamentos de Salesforce', percentage: 23 },
      { name: 'Gestión de datos y navegación', percentage: 27 },
      { name: 'Seguridad y acceso', percentage: 25 },
      { name: 'Automatización de procesos', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/associate',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-associate-credential'
    }
  },
  {
    id: 'ai-associate',
    title: 'AI Associate',
    category: categories.ASSOCIATES,
    description: 'Certificación de nivel inicial en IA en el ecosistema Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu3&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 40,
      passingScore: 65,
      duration: 70,
      price: 75,
      retakePrice: 100,
    },
    topics: [
      { name: 'Fundamentos de IA', percentage: 30 },
      { name: 'Ética de IA', percentage: 20 },
      { name: 'Herramientas de Einstein', percentage: 25 },
      { name: 'Implementación básica', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/ai-associate',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/cert-prep-salesforce-ai-associate'
    }
  },
  {
    id: 'marketing-associate',
    title: 'Marketing Associate',
    category: categories.ASSOCIATES,
    description: 'Certificación de nivel inicial para usuarios nuevos en Marketing Cloud.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu8&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 90,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Fundamentos de marketing digital', percentage: 30 },
      { name: 'Introducción a Marketing Cloud', percentage: 25 },
      { name: 'Analítica en marketing', percentage: 20 },
      { name: 'Estrategias de email marketing', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketingassociate',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-marketing-associate-credential'
    }
  },
  // ADMINISTRATORS
  {
    id: 'administrator',
    title: 'Salesforce Administrator',
    category: categories.ADMINISTRATORS,
    description: 'Certificación para administradores con conocimientos fundamentales en Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtn&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Configuración de organización', percentage: 20 },
      { name: 'Configuración de usuarios', percentage: 15 },
      { name: 'Seguridad y acceso', percentage: 20 },
      { name: 'Objetos estándar y personalizados', percentage: 15 },
      { name: 'Aplicaciones de ventas y marketing', percentage: 15 },
      { name: 'Aplicaciones de soporte y servicio', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/administrator',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-salesforce-administrator'
    }
  },
  {
    id: 'advanced-administrator',
    title: 'Advanced Administrator',
    category: categories.ADMINISTRATORS,
    description: 'Certificación avanzada para administradores experimentados de Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mto&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Seguridad y acceso avanzado', percentage: 20 },
      { name: 'Automatización de procesos', percentage: 20 },
      { name: 'Gestión de datos', percentage: 15 },
      { name: 'Análisis e informes', percentage: 15 },
      { name: 'Colaboración y productividad', percentage: 15 },
      { name: 'Gestión de cambios y despliegue', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/advanced-administrator',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-advanced-administrator'
    }
  },
  {
    id: 'platform-app-builder',
    title: 'Platform App Builder',
    category: categories.ADMINISTRATORS,
    description: 'Certificación para profesionales que diseñan y desarrollan aplicaciones personalizadas en Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mts&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 63,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Fundamentos de Salesforce', percentage: 20 },
      { name: 'Modelado y gestión de datos', percentage: 20 },
      { name: 'Seguridad', percentage: 15 },
      { name: 'Automatización de procesos', percentage: 25 },
      { name: 'Interfaz de usuario', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/platform-app-builder',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-platform-app-builder'
    }
  },
  {
    id: 'slack-admin',
    title: 'Slack Admin',
    category: categories.ADMINISTRATORS,
    description: 'Certificación en administración de Slack para entornos corporativos.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtz&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 90,
      price: 100,
      retakePrice: 100,
    },
    topics: [
      { name: 'Configuración de espacios de trabajo', percentage: 25 },
      { name: 'Gestión de usuarios', percentage: 20 },
      { name: 'Seguridad y cumplimiento', percentage: 25 },
      { name: 'Integración de aplicaciones', percentage: 15 },
      { name: 'Análisis de espacio de trabajo', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/slack-admin',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/slack-admin'
    }
  },
  // DESIGNERS
  {
    id: 'ux-designer',
    title: 'User Experience (UX) Designer',
    category: categories.DESIGNERS,
    description: 'Certificación para profesionales que diseñan experiencias centradas en el usuario en la plataforma Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu1&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Investigación de usuario', percentage: 25 },
      { name: 'Principios de diseño', percentage: 20 },
      { name: 'Diseño de interfaces', percentage: 25 },
      { name: 'Prototipado', percentage: 15 },
      { name: 'Pruebas de usuario', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/userexperiencedesigner',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-ux-designer-credential'
    }
  },
  {
    id: 'strategy-designer',
    title: 'Strategy Designer',
    category: categories.DESIGNERS,
    description: 'Certificación orientada a profesionales que crean estrategias de experiencia en Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu0&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Análisis de negocio', percentage: 25 },
      { name: 'Diseño de soluciones', percentage: 25 },
      { name: 'Gestión del cambio', percentage: 20 },
      { name: 'Estrategia de implementación', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/strategydesigner',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-strategy-designer-credential'
    }
  },
  // CONSULTANTS
  {
    id: 'service-cloud-consultant',
    title: 'Service Cloud Consultant',
    category: categories.CONSULTANTS,
    description: 'Para consultores que implementan y configuran soluciones de Service Cloud.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtu&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Implementación de soluciones', percentage: 25 },
      { name: 'Gestión de conocimientos', percentage: 20 },
      { name: 'Manejo de casos', percentage: 25 },
      { name: 'Analítica de contact centers', percentage: 15 },
      { name: 'Configuración de Omni-Channel', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/servicecloudconsultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/prepare-for-your-service-cloud-consultant-credential'
    }
  },
  {
    id: 'cpq-specialist',
    title: 'CPQ Specialist',
    category: categories.CONSULTANTS,
    description: 'Para especialistas que configuran y administran Salesforce CPQ.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtz&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 68,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Productos y paquetes', percentage: 32 },
      { name: 'Plantillas de cotización', percentage: 15 },
      { name: 'Descuentos y precios', percentage: 39 },
      { name: 'Plataforma CPQ', percentage: 14 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/cpqspecialist',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/prepare-for-your-salesforce-cpq-specialist-credential'
    }
  },
  {
    id: 'data-cloud-consultant',
    title: 'Data Cloud Consultant',
    category: categories.CONSULTANTS,
    description: 'Certificación para consultores especializados en Salesforce Data Cloud.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtn&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Diseño y gestión de datos', percentage: 30 },
      { name: 'Valor de negocio de Data Cloud', percentage: 25 },
      { name: 'Implementación de Data Cloud', percentage: 25 },
      { name: 'Seguridad y privacidad', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/datacloudconsultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/prepare-for-data-cloud-consultant'
    }
  },
  {
    id: 'sales-cloud-consultant',
    title: 'Sales Cloud Consultant',
    category: categories.CONSULTANTS,
    description: 'Para consultores expertos en la implementación de Salesforce Sales Cloud.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu2&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Estrategia de ventas', percentage: 25 },
      { name: 'Gestión de cuentas', percentage: 25 },
      { name: 'Pronóstico de ventas', percentage: 25 },
      { name: 'Automatización de procesos', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/salescloudconsultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/prepare-for-sales-cloud-consultant'
    }
  },
  {
    id: 'field-service-consultant',
    title: 'Field Service Consultant',
    category: categories.CONSULTANTS,
    description: 'Certificación para consultores de soluciones Field Service en Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu5&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Gestión de órdenes de trabajo', percentage: 25 },
      { name: 'Planificación de recursos', percentage: 20 },
      { name: 'Configuración de movilidad', percentage: 20 },
      { name: 'Análisis y reportes de Field Service', percentage: 35 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/fieldserviceconsultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/field-service-consultant'
    }
  },
    {
    id: 'experience-cloud-consultant',
    title: 'Experience Cloud Consultant',
    category: categories.CONSULTANTS,
    description: 'Certificación para consultores en implementaciones de Experience Cloud.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu0&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Configuración de comunidades', percentage: 30 },
      { name: 'Gestión de usuarios', percentage: 25 },
      { name: 'Configuración de contenido y branding', percentage: 25 },
      { name: 'Seguridad y acceso', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/experiencecloudconsultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/experience-cloud-consultant'
    }
  },
  {
    id: 'tableau-crm-consultant',
    title: 'Tableau CRM and Einstein Discovery Consultant',
    category: categories.CONSULTANTS,
    description: 'Certificación para consultores en implementaciones de Tableau CRM y Einstein Discovery.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu4&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Diseño de dashboards en Tableau', percentage: 30 },
      { name: 'Modelado de datos en Einstein', percentage: 30 },
      { name: 'Automatización de análisis', percentage: 20 },
      { name: 'Visualización de datos', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/tableaucrmconsultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/tableau-crm-consultant'
    }
  },
  {
    id: 'nonprofit-cloud-consultant',
    title: 'Nonprofit Cloud Consultant',
    category: categories.CONSULTANTS,
    description: 'Para consultores que implementan soluciones en Salesforce Nonprofit Cloud.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu9&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 63,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Implementación de Nonprofit Cloud', percentage: 30 },
      { name: 'Gestión de donantes', percentage: 20 },
      { name: 'Optimización de recaudación de fondos', percentage: 25 },
      { name: 'Análisis de impacto', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/nonprofitcloudconsultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/nonprofit-cloud-consultant'
    }
  },
  {
    id: 'education-cloud-consultant',
    title: 'Education Cloud Consultant',
    category: categories.CONSULTANTS,
    description: 'Certificación para consultores que implementan soluciones de Salesforce Education Cloud.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mua&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Gestión de estudiantes y facultad', percentage: 30 },
      { name: 'Análisis de datos en educación', percentage: 20 },
      { name: 'Interacción educativa y participación', percentage: 25 },
      { name: 'Optimización de recursos educativos', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/educationcloudconsultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/education-cloud-consultant'
    }
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    category: categories.CONSULTANTS,
    description: 'Certificación para analistas de negocio que capturan requisitos y colaboran con stakeholders.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mub&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 70,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Análisis de negocio', percentage: 25 },
      { name: 'Gestión de requisitos', percentage: 25 },
      { name: 'Colaboración con stakeholders', percentage: 25 },
      { name: 'Modelado y documentación', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/businessanalyst',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/business-analyst'
    }
  },
  {
    id: 'slack-consultant',
    title: 'Slack Consultant',
    category: categories.CONSULTANTS,
    description: 'Certificación para consultores que implementan soluciones empresariales en Slack.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtc&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 70,
      duration: 90,
      price: 150,
      retakePrice: 100,
    },
    topics: [
      { name: 'Configuración de Slack para empresas', percentage: 25 },
      { name: 'Automatización y flujos de trabajo', percentage: 25 },
      { name: 'Gestión de seguridad y cumplimiento', percentage: 25 },
      { name: 'Integración con Salesforce', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/slackconsultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/slack-consultant'
    }
  },
  {
    id: 'crm-analytics-consultant',
    title: 'CRM Analytics and Einstein Discovery Consultant',
    category: categories.CONSULTANTS,
    description: 'Certificación para consultores especializados en CRM Analytics y Einstein Discovery.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Muc&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Creación de informes y dashboards', percentage: 30 },
      { name: 'Uso de Einstein Discovery para análisis predictivo', percentage: 30 },
      { name: 'Automatización de análisis', percentage: 20 },
      { name: 'Visualización de datos para decisiones de negocio', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/crmanalyticsconsultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/crm-analytics-consultant'
    }
  },
  {
    id: 'omnistudio-consultant',
    title: 'OmniStudio Consultant',
    category: categories.CONSULTANTS,
    description: 'Certificación para consultores que implementan soluciones OmniStudio en Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mud&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 68,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Diseño de procesos de negocio', percentage: 30 },
      { name: 'Automatización de interfaces de usuario', percentage: 25 },
      { name: 'Configuración de integración de datos', percentage: 20 },
      { name: 'Administración de herramientas de desarrollo de aplicaciones', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/omnistudioconsultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/omnistudio-consultant'
    }
  },
  // ARCHITECTS
  {
    id: 'identity-access-management-architect',
    title: 'Identity and Access Management Architect',
    category: categories.ARCHITECTS,
    description: 'Certificación para expertos en diseño de soluciones de identidad y gestión de acceso.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mto&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 400,
      retakePrice: 200,
    },
    topics: [
      { name: 'Single Sign-On (SSO)', percentage: 40 },
      { name: 'OAuth y OpenID Connect', percentage: 30 },
      { name: 'Gestión de usuarios', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/identityandaccessmanagementarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/identity-access-management'
    }
  },
  {
    id: 'sharing-visibility-architect',
    title: 'Sharing and Visibility Architect',
    category: categories.ARCHITECTS,
    description: 'Especialistas en diseño de soluciones de visibilidad y seguridad de datos.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mts&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 105,
      price: 400,
      retakePrice: 200,
    },
    topics: [
      { name: 'Declarative Sharing', percentage: 76 },
      { name: 'Programmatic Sharing', percentage: 17 },
      { name: 'Performance y Escalabilidad', percentage: 7 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/sharingandvisibilityarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/sharing-visibility'
    }
  },
  {
    id: 'development-lifecycle-deployment-architect',
    title: 'Development Lifecycle and Deployment Architect',
    category: categories.ARCHITECTS,
    description: 'Certificación para la implementación de soluciones de gestión en Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu3&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 68,
      duration: 105,
      price: 400,
      retakePrice: 200,
    },
    topics: [
      { name: 'Planificación de la arquitectura', percentage: 40 },
      { name: 'Estrategias de implementación', percentage: 35 },
      { name: 'Optimización del ciclo de vida', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/developmentlifecycledeploymentarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/development-lifecycle'
    }
  },
  {
    id: 'heroku-architect',
    title: 'Heroku Architect',
    category: categories.ARCHITECTS,
    description: 'Especialización en arquitecturas escalables, despliegues y gestión de aplicaciones en Heroku.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtz&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 60,
      duration: 105,
      price: 400,
      retakePrice: 200,
    },
    topics: [
      { name: 'Aplicaciones de escalabilidad', percentage: 40 },
      { name: 'Manejo de flujo de trabajo', percentage: 30 },
      { name: 'Gestión de equipos', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/herokuarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/heroku-architect'
    }
  },
  {
    id: 'integration-architect',
    title: 'Integration Architect',
    category: categories.ARCHITECTS,
    description: 'Certificación para arquitectos especializados en integración de soluciones escalables.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu8&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 400,
      retakePrice: 200,
    },
    topics: [
      { name: 'Integración de sistemas', percentage: 50 },
      { name: 'API y gestión de datos', percentage: 30 },
      { name: 'Seguridad en integraciones', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/integrationarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/integration-architect'
    }
  },
  {
    id: 'data-architect',
    title: 'Data Architect',
    category: categories.ARCHITECTS,
    description: 'Especialización en soluciones de gestión de datos a nivel empresarial.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtz&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 58,
      duration: 105,
      price: 400,
      retakePrice: 200,
    },
    topics: [
      { name: 'Modelado de datos', percentage: 35 },
      { name: 'Integración de datos', percentage: 30 },
      { name: 'Seguridad de datos', percentage: 35 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/dataarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/data-architect'
    }
  },
  {
    id: 'application-architect',
    title: 'Application Architect',
    category: categories.ARCHITECTS,
    description: 'Certificación para arquitectos expertos en la funcionalidad nativa de Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu0&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 60,
      duration: 105,
      price: 400,
      retakePrice: 200,
    },
    topics: [
      { name: 'Jerarquías de roles', percentage: 40 },
      { name: 'Modelo de datos y compartir', percentage: 30 },
      { name: 'Mecanismos de seguridad', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/applicationarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/application-architect'
    }
  },
    {
    id: 'system-architect',
    title: 'System Architect',
    category: categories.ARCHITECTS,
    description: 'Certificación para arquitectos enfocados en integraciones y gobernanza fuera de la plataforma Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtn&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 400,
      retakePrice: 200,
    },
    topics: [
      { name: 'Integraciones fuera de plataforma', percentage: 40 },
      { name: 'Gobernanza y testing', percentage: 30 },
      { name: 'Acceso seguro', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/systemarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/system-architect'
    }
  },
  {
    id: 'b2c-solution-architect',
    title: 'B2C Solution Architect',
    category: categories.ARCHITECTS,
    description: 'Especialización en soluciones multi-nube para experiencias personalizadas en B2C.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu1&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 62,
      duration: 105,
      price: 400,
      retakePrice: 200,
    },
    topics: [
      { name: 'Diseño de soluciones B2C', percentage: 40 },
      { name: 'Experiencia del cliente', percentage: 30 },
      { name: 'Integración multi-nube', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/b2csolutionarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/b2c-solution'
    }
  },
  {
    id: 'b2b-solution-architect',
    title: 'B2B Solution Architect',
    category: categories.ARCHITECTS,
    description: 'Certificación en soluciones multi-nube B2B para la entrega de valor empresarial.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu2&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 64,
      duration: 105,
      price: 400,
      retakePrice: 200,
    },
    topics: [
      { name: 'Soluciones de arquitectura B2B', percentage: 40 },
      { name: 'Integración de plataformas', percentage: 30 },
      { name: 'Estrategia de valor empresarial', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/b2bsolutionarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/b2b-solution'
    }
  },
  {
    id: 'technical-architect',
    title: 'Technical Architect',
    category: categories.ARCHITECTS,
    description: 'Certificación para arquitectos técnicos con habilidades avanzadas en soluciones escalables en Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu4&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 70,
      duration: 180,
      price: 6000,
      retakePrice: 3000,
    },
    topics: [
      { name: 'Arquitectura y gobernanza', percentage: 40 },
      { name: 'Diseño y rendimiento', percentage: 35 },
      { name: 'Implementación segura', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/technicalarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/technical-architect'
    }
  },
  {
    id: 'mulesoft-integration-architect',
    title: 'MuleSoft Integration Architect I',
    category: categories.ARCHITECTS,
    description: 'Especialización en integración con MuleSoft, estrategia y gobernanza en plataformas de Anypoint.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu5&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 120,
      price: 400,
      retakePrice: 200,
    },
    topics: [
      { name: 'Estrategia de integración', percentage: 50 },
      { name: 'Gobernanza de MuleSoft', percentage: 30 },
      { name: 'Calidad técnica de integración', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/mulesoftintegrationarchitect',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-architect'
    }
  },
  {
    id: 'catalyst-specialist',
    title: 'Catalyst Specialist',
    category: categories.ARCHITECTS,
    description: 'Certificación para profesionales que aplican el marco de metodología Catalyst en Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu6&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 40,
      passingScore: 70,
      duration: 60,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Identificación de resultados empresariales', percentage: 40 },
      { name: 'Planificación de compromiso', percentage: 30 },
      { name: 'Soluciones componibles', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/catalystspecialist',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/catalyst-methodology'
    }
  },
  {
    id: 'marketing-cloud-administrator',
    title: 'Marketing Cloud Administrator',
    category: categories.MARKETERS,
    description: 'Certificación para administradores de Marketing Cloud, enfocados en la configuración y administración de datos y usuarios.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mvq&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Gestión de canales', percentage: 20 },
      { name: 'Configuración de cuenta', percentage: 25 },
      { name: 'Gestión de suscriptores', percentage: 20 },
      { name: 'Automatización y datos', percentage: 15 },
      { name: 'Mantenimiento', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketingcloudadministrator',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-administrator-credential'
    }
  },
  {
    id: 'marketing-cloud-developer',
    title: 'Marketing Cloud Developer',
    category: categories.MARKETERS,
    description: 'Certificación para desarrolladores de Marketing Cloud, con enfoque en personalización avanzada y uso de lenguajes de scripting.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mvt&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 70,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Configuración de datos', percentage: 24 },
      { name: 'Creación de contenido y scripting', percentage: 22 },
      { name: 'Automatización avanzada', percentage: 26 },
      { name: 'Análisis y reportes', percentage: 18 },
      { name: 'Integraciones API', percentage: 10 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketingclouddeveloper',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-developer-credential'
    }
  },
  {
    id: 'marketing-cloud-consultant',
    title: 'Marketing Cloud Consultant',
    category: categories.MARKETERS,
    description: 'Certificación para consultores de Marketing Cloud enfocados en implementar soluciones estratégicas y tácticas de marketing.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mvs&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 68,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Configuración de cuenta y canal', percentage: 16 },
      { name: 'Definición de requerimientos', percentage: 12 },
      { name: 'Data Management y modelado', percentage: 22 },
      { name: 'Implementación de campañas', percentage: 20 },
      { name: 'Analítica y reportes', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketingcloudconsultant',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-consultant-credential'
    }
  },
  {
    id: 'marketing-cloud-email-specialist',
    title: 'Marketing Cloud Email Specialist',
    category: categories.MARKETERS,
    description: 'Certificación en email marketing, con enfoque en diseño, gestión de suscriptores y automatización.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mvp&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 90,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Mejores prácticas en email marketing', percentage: 15 },
      { name: 'Diseño de mensajes de email', percentage: 18 },
      { name: 'Creación y entrega de contenido', percentage: 13 },
      { name: 'Automatización de marketing', percentage: 19 },
      { name: 'Gestión de suscriptores y datos', percentage: 28 },
      { name: 'Seguimiento y reportes', percentage: 7 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketingcloudemailspecialist',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/prepare-for-your-marketing-cloud-email-specialist-credential'
    }
  },
  {
    id: 'marketing-cloud-account-engagement-specialist',
    title: 'Marketing Cloud Account Engagement Specialist',
    category: categories.MARKETERS,
    description: 'Certificación para especialistas en Account Engagement en Marketing Cloud, con habilidades en diseño y ejecución de flujos de trabajo.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mvr&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 90,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Diseño de flujos de trabajo', percentage: 25 },
      { name: 'Automatización en marketing', percentage: 20 },
      { name: 'Análisis de datos y reportes', percentage: 15 },
      { name: 'Estrategias de Engagement', percentage: 25 },
      { name: 'Gestión de datos', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketingcloudaccountengagementspecialist',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-account-engagement-specialist-credential'
    }
  },
  {
    id: 'marketing-cloud-account-engagement-consultant',
    title: 'Marketing Cloud Account Engagement Consultant',
    category: categories.MARKETERS,
    description: 'Certificación para consultores en Account Engagement, enfocados en diseño e implementación de soluciones de engagement.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mvu&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Diseño de estrategia de engagement', percentage: 22 },
      { name: 'Definición de requerimientos de negocio', percentage: 20 },
      { name: 'Gestión de datos y segmentación', percentage: 18 },
      { name: 'Automatización avanzada', percentage: 20 },
      { name: 'Análisis y reportes', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketingcloudaccountengagementconsultant',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-account-engagement-consultant-credential'
    }
  },
  // DEVELOPERS
  {
    id: 'platform-developer-i',
    title: 'Platform Developer I',
    category: categories.DEVELOPERS,
    description: 'Certificación para desarrolladores en la plataforma Lightning, utilizando Apex y Visualforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mto&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Modelado de datos', percentage: 23 },
      { name: 'Lógica y automatización de procesos', percentage: 30 },
      { name: 'Interfaces de usuario', percentage: 25 },
      { name: 'Pruebas, depuración y despliegue', percentage: 22 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/platformdeveloperi',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-platform-developer-i'
    }
  },
  {
    id: 'platform-developer-ii',
    title: 'Platform Developer II',
    category: categories.DEVELOPERS,
    description: 'Certificación avanzada en desarrollo programático en Salesforce, incluyendo lógica compleja y gestión de datos.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu1&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 63,
      duration: 120,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Automatización avanzada', percentage: 25 },
      { name: 'Desarrollo en Apex avanzado', percentage: 30 },
      { name: 'Servicios web e integración', percentage: 20 },
      { name: 'Modelado de datos complejo', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/platformdeveloperii',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/prepare-for-platform-developer-ii'
    }
  },
  {
    id: 'javascript-developer-i',
    title: 'JavaScript Developer I',
    category: categories.DEVELOPERS,
    description: 'Certificación de nivel inicial para desarrolladores en JavaScript y programación orientada a objetos en Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtq&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Fundamentos de JavaScript', percentage: 30 },
      { name: 'DOM y manipulación de eventos', percentage: 25 },
      { name: 'Desarrollo en Lightning Web Components', percentage: 20 },
      { name: 'Desarrollo de interfaces con Aura', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/javascriptdeveloperi',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/prepare-for-javascript-developer-i'
    }
  },
  {
    id: 'industries-cpq-developer',
    title: 'Industries CPQ Developer',
    category: categories.DEVELOPERS,
    description: 'Certificación para desarrolladores especializados en aplicaciones de configuración, precio y cotización (CPQ) en industrias específicas.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Muz&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 63,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Configuración de productos', percentage: 20 },
      { name: 'Procesos de cotización', percentage: 25 },
      { name: 'Gestión de precios', percentage: 20 },
      { name: 'Automatización de CPQ', percentage: 35 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/industriescpqdeveloper',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-industries-cpq-developer'
    }
  },
  {
    id: 'omnistudio-developer',
    title: 'OmniStudio Developer',
    category: categories.DEVELOPERS,
    description: 'Certificación para desarrolladores de aplicaciones utilizando herramientas declarativas de OmniStudio.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtu&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'FlexCards y OmniScripts', percentage: 35 },
      { name: 'Procedimientos de integración', percentage: 25 },
      { name: 'DataRaptors', percentage: 25 },
      { name: 'Depuración y despliegue', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/omnistudiodeveloper',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-omnistudio-developer'
    }
  },
  {
    id: 'mulesoft-developer-ii',
    title: 'MuleSoft Developer II',
    category: categories.DEVELOPERS,
    description: 'Certificación avanzada en desarrollo de aplicaciones en MuleSoft para integraciones complejas.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mv0&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 70,
      duration: 120,
      price: 375,
      retakePrice: 250,
    },
    topics: [
      { name: 'Integraciones en MuleSoft', percentage: 40 },
      { name: 'Implementación en DevOps', percentage: 25 },
      { name: 'Monitorización y seguridad', percentage: 20 },
      { name: 'Mantenimiento y escalabilidad', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/mulesoftdeveloperii',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-mulesoft-developer-ii'
    }
  },
  {
    id: 'hyperautomation-specialist',
    title: 'Hyperautomation Specialist',
    category: categories.DEVELOPERS,
    description: 'Certificación en soluciones de hiperautomatización para Salesforce y MuleSoft.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mv2&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Automatización en Salesforce', percentage: 50 },
      { name: 'Automatización en MuleSoft', percentage: 30 },
      { name: 'Estrategia de hiperautomatización', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/hyperautomationspecialist',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-hyperautomation-specialist'
    }
  },
  // ARTIFICIAL INTELLIGENCE
  {
    id: 'ai-associate',
    title: 'AI Associate',
    category: categories.AI,
    description: 'Certificación de nivel inicial en IA dentro del ecosistema Salesforce, abarcando conceptos básicos y aplicaciones de IA en CRM.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu3&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 40,
      passingScore: 65,
      duration: 70,
      price: 75,
      retakePrice: 100,
    },
    topics: [
      { name: 'Fundamentos de IA', percentage: 30 },
      { name: 'Ética de IA', percentage: 20 },
      { name: 'Herramientas de Einstein', percentage: 25 },
      { name: 'Implementación básica', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/ai-associate',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/cert-prep-salesforce-ai-associate'
    }
  },
  {
    id: 'ai-specialist',
    title: 'AI Specialist',
    category: categories.AI,
    description: 'Certificación avanzada en Inteligencia Artificial aplicada, con un enfoque en soluciones impulsadas por IA en Salesforce.',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mv4&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 70,
      duration: 120,
      price: 300,
      retakePrice: 200,
    },
    topics: [
      { name: 'Modelado y predicción de datos', percentage: 35 },
      { name: 'Ética y seguridad en IA', percentage: 25 },
      { name: 'Optimización de procesos con IA', percentage: 20 },
      { name: 'Implementación avanzada de IA en Salesforce', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/ai-specialist',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/prepare-for-ai-specialist-certification'
    }
  }
];

export const getCertificationsByCategory = (category) => {
  return certifications.filter(cert => cert.category === category);
};
