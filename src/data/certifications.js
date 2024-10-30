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
  {
    id: 'associate',
    title: 'Associate',
    category: categories.ASSOCIATES,
    description: 'Entry-level certification validating fundamental knowledge of the Salesforce platform',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mty&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 100,
      retakePrice: 70,
    },
    topics: [
      { name: 'Salesforce Fundamentals', percentage: 25 },
      { name: 'Navigation & Data Management', percentage: 20 },
      { name: 'Security & Access', percentage: 15 },
      { name: 'Analytics & Reporting', percentage: 15 },
      { name: 'Business Logic & Process Automation', percentage: 25 }
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
    description: 'Entry-level certification for AI fundamentals in Salesforce',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu3&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 90,
      price: 100,
      retakePrice: 70,
    },
    topics: [
      { name: 'AI Fundamentals', percentage: 30 },
      { name: 'Einstein Features', percentage: 25 },
      { name: 'AI Ethics', percentage: 20 },
      { name: 'Implementation Basics', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/ai-associate',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/get-started-with-einstein'
    }
  },
  {
    id: 'marketing-associate',
    title: 'Marketing Associate',
    category: categories.ASSOCIATES,
    description: 'Entry-level certification for Marketing Cloud fundamentals',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu8&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 90,
      price: 100,
      retakePrice: 70,
    },
    topics: [
      { name: 'Digital Marketing Fundamentals', percentage: 30 },
      { name: 'Marketing Cloud Basics', percentage: 25 },
      { name: 'Email Marketing', percentage: 25 },
      { name: 'Marketing Analytics', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketing-associate',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/marketing-cloud-basics'
    }
  },
  {
    id: 'administrator',
    title: 'Administrator',
    category: categories.ADMINISTRATORS,
    description: 'Core certification for Salesforce platform administration',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtn&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Organization Setup', percentage: 20 },
      { name: 'User Setup', percentage: 15 },
      { name: 'Security and Access', percentage: 20 },
      { name: 'Standard and Custom Objects', percentage: 15 },
      { name: 'Sales and Marketing Applications', percentage: 15 },
      { name: 'Service and Support Applications', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/administrator',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-administrator-credential'
    }
  },
  {
    id: 'advanced-administrator',
    title: 'Advanced Administrator',
    category: categories.ADMINISTRATORS,
    description: 'Advanced certification for experienced Salesforce administrators',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mto&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Security and Access', percentage: 20 },
      { name: 'Process Automation', percentage: 20 },
      { name: 'Data Management', percentage: 15 },
      { name: 'Analytics, Reports, and Dashboards', percentage: 15 },
      { name: 'Productivity and Collaboration', percentage: 15 },
      { name: 'Change Management and Deployment', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/advanced-administrator',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-advanced-administrator-credential'
    }
  },
  {
    id: 'platform-app-builder',
    title: 'Platform App Builder',
    category: categories.ADMINISTRATORS,
    description: 'Certification for professionals who design and build custom applications',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mts&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 63,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Salesforce Fundamentals', percentage: 20 },
      { name: 'Data Modeling and Management', percentage: 20 },
      { name: 'Security', percentage: 15 },
      { name: 'Business Logic and Process Automation', percentage: 25 },
      { name: 'User Interface', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/platform-app-builder',
      trailmix: 'https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-platform-app-builder-credential'
    }
  },
  {
    id: 'slack-admin',
    title: 'Slack Admin',
    category: categories.ADMINISTRATORS,
    description: 'Certification for Slack workspace administration and management',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtz&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 90,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Workspace Setup and Configuration', percentage: 25 },
      { name: 'User Management', percentage: 20 },
      { name: 'Security and Compliance', percentage: 25 },
      { name: 'App Integration', percentage: 15 },
      { name: 'Workspace Analytics', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/slack-admin',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/slack-admin'
    }
  },
  {
    id: 'ux-designer',
    title: 'User Experience (UX) Designer',
    category: categories.DESIGNERS,
    description: 'Certification for professionals who design user experiences in Salesforce',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu1&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'User Research', percentage: 25 },
      { name: 'Design Principles', percentage: 20 },
      { name: 'Interface Design', percentage: 25 },
      { name: 'Prototyping', percentage: 15 },
      { name: 'User Testing', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/ux-designer',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/ux-design'
    }
  },
  {
    id: 'strategy-designer',
    title: 'Strategy Designer',
    category: categories.DESIGNERS,
    description: 'Certification for professionals who design strategic solutions',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu0&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Business Analysis', percentage: 25 },
      { name: 'Solution Design', percentage: 25 },
      { name: 'Change Management', percentage: 20 },
      { name: 'Implementation Strategy', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/strategy-designer',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/strategy-design'
    }
  },
  {
    id: 'service-cloud-consultant',
    title: 'Service Cloud Consultant',
    category: categories.CONSULTANTS,
    description: 'Certification for Service Cloud implementation experts',
    image: 'https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtu&oid=00DF0000000gZsu&lastMod=1711130547000',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Implementation Strategies', percentage: 20 },
      { name: 'Service Cloud Solution Design', percentage: 25 },
      { name: 'Knowledge Management', percentage: 15 },
      { name: 'Case Management', percentage: 20 },
      { name: 'Contact Center Analytics', percentage: 20 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/service-cloud-consultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/service_cloud_consultant'
    }
  }
];

export const getCertificationsByCategory = (category) => {
  return certifications.filter(cert => cert.category === category);
};