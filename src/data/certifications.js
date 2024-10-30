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
    title: 'Associate',
    category: categories.ASSOCIATES,
    description: 'Validates fundamental knowledge of Salesforce',
    image: 'https://trailhead.salesforce.com/credentials/associate',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Salesforce Basics', percentage: 25 },
      { name: 'Data and Security', percentage: 20 },
      { name: 'Platform Navigation', percentage: 25 },
      { name: 'Customization', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/associate',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/prepare-for-your-salesforce-associate-credential'
    }
  },
  {
    id: 'ai-associate',
    title: 'AI Associate',
    category: categories.ASSOCIATES,
    description: 'Certification for AI fundamentals in Salesforce',
    image: 'https://trailhead.salesforce.com/credentials/ai-associate',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 90,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'AI Basics', percentage: 30 },
      { name: 'Data Ethics', percentage: 20 },
      { name: 'Einstein for Marketing', percentage: 25 },
      { name: 'Implementation Basics', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/ai-associate',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/intro-to-einstein-ai'
    }
  },
  // ADMINISTRATORS
  {
    id: 'administrator',
    title: 'Administrator',
    category: categories.ADMINISTRATORS,
    description: 'Core certification for Salesforce administration',
    image: 'https://trailhead.salesforce.com/credentials/administrator',
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
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/prepare-for-salesforce-administrator'
    }
  },
  {
    id: 'advanced-administrator',
    title: 'Advanced Administrator',
    category: categories.ADMINISTRATORS,
    description: 'Advanced certification for experienced Salesforce admins',
    image: 'https://trailhead.salesforce.com/credentials/advanced-administrator',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Security and Access', percentage: 20 },
      { name: 'Data Management', percentage: 15 },
      { name: 'Automation', percentage: 20 },
      { name: 'Analytics, Reports, and Dashboards', percentage: 15 },
      { name: 'Productivity and Collaboration', percentage: 15 },
      { name: 'Change Management', percentage: 15 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/advanced-administrator',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/prepare-for-advanced-administrator'
    }
  },
  {
    id: 'platform-app-builder',
    title: 'Platform App Builder',
    category: categories.ADMINISTRATORS,
    description: 'Certification for building and deploying custom applications',
    image: 'https://trailhead.salesforce.com/credentials/platform-app-builder',
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
  // DESIGNERS
  {
    id: 'ux-designer',
    title: 'User Experience (UX) Designer',
    category: categories.DESIGNERS,
    description: 'Certification for professionals creating user experiences in Salesforce',
    image: 'https://trailhead.salesforce.com/credentials/ux-designer',
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
      { name: 'Prototyping', percentage: 15 },
      { name: 'Testing and Implementation', percentage: 20 },
      { name: 'User Engagement', percentage: 20 }
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
    description: 'Certification for solution design in strategic implementation',
    image: 'https://trailhead.salesforce.com/credentials/strategy-designer',
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
  // CONSULTANTS (Additional certifications)
  {
    id: 'service-cloud-consultant',
    title: 'Service Cloud Consultant',
    category: categories.CONSULTANTS,
    description: 'Specialized certification for Service Cloud implementation',
    image: 'https://trailhead.salesforce.com/credentials/service-cloud-consultant',
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
  },
    // MARKETERS
  {
    id: 'marketing-cloud-administrator',
    title: 'Marketing Cloud Administrator',
    category: categories.MARKETERS,
    description: 'Administrator certification for Marketing Cloud management',
    image: 'https://trailhead.salesforce.com/credentials/marketing-cloud-administrator',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Data Management', percentage: 30 },
      { name: 'Setup', percentage: 20 },
      { name: 'Automation Studio', percentage: 25 },
      { name: 'Marketing Cloud Reporting', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketing-cloud-administrator',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/marketing-cloud-admin'
    }
  },
  {
    id: 'marketing-cloud-developer',
    title: 'Marketing Cloud Developer',
    category: categories.MARKETERS,
    description: 'Certification for developers creating dynamic marketing assets',
    image: 'https://trailhead.salesforce.com/credentials/marketing-cloud-developer',
    examDetails: {
      questions: 60,
      passingScore: 63,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'AMPscript', percentage: 25 },
      { name: 'HTML/CSS for Email', percentage: 20 },
      { name: 'SQL', percentage: 25 },
      { name: 'Marketing Cloud APIs', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketing-cloud-developer',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/marketing-cloud-developer'
    }
  },
  {
    id: 'marketing-cloud-consultant',
    title: 'Marketing Cloud Consultant',
    category: categories.MARKETERS,
    description: 'Consultant-level certification for Marketing Cloud solutions',
    image: 'https://trailhead.salesforce.com/credentials/marketing-cloud-consultant',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Email Studio', percentage: 20 },
      { name: 'Automation Studio', percentage: 25 },
      { name: 'Journey Builder', percentage: 25 },
      { name: 'Marketing Cloud Implementation', percentage: 30 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketing-cloud-consultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/marketing-cloud-consultant'
    }
  },
  {
    id: 'marketing-cloud-email-specialist',
    title: 'Marketing Cloud Email Specialist',
    category: categories.MARKETERS,
    description: 'Certification for specialists in email marketing best practices',
    image: 'https://trailhead.salesforce.com/credentials/marketing-cloud-email-specialist',
    examDetails: {
      questions: 60,
      passingScore: 67,
      duration: 90,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Message Design', percentage: 25 },
      { name: 'Subscriber and Data Management', percentage: 25 },
      { name: 'Inbox Delivery', percentage: 25 },
      { name: 'External Integrations', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/marketing-cloud-email-specialist',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/email-marketing-basics'
    }
  },
  {
    id: 'marketing-cloud-account-engagement-specialist',
    title: 'Marketing Cloud Account Engagement Specialist',
    category: categories.MARKETERS,
    description: 'Certification for Pardot specialists in engagement best practices',
    image: 'https://trailhead.salesforce.com/credentials/pardot-specialist',
    examDetails: {
      questions: 60,
      passingScore: 72,
      duration: 90,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Lead Management', percentage: 30 },
      { name: 'Engagement Studio', percentage: 25 },
      { name: 'Pardot Platform', percentage: 20 },
      { name: 'Reporting', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/pardot-specialist',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/pardot-fundamentals'
    }
  },
  {
    id: 'marketing-cloud-account-engagement-consultant',
    title: 'Marketing Cloud Account Engagement Consultant',
    category: categories.MARKETERS,
    description: 'Consultant certification for implementing engagement solutions',
    image: 'https://trailhead.salesforce.com/credentials/pardot-consultant',
    examDetails: {
      questions: 60,
      passingScore: 68,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Pardot Implementation', percentage: 25 },
      { name: 'Lead Management Strategy', percentage: 30 },
      { name: 'Automation', percentage: 20 },
      { name: 'Reporting and Analytics', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/pardot-consultant',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/pardot-specialist'
    }
  },
  // DEVELOPERS
  {
    id: 'platform-developer-i',
    title: 'Platform Developer I',
    category: categories.DEVELOPERS,
    description: 'Certification for foundational development skills in Salesforce',
    image: 'https://trailhead.salesforce.com/credentials/platform-developer-1',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 110,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Apex Programming', percentage: 30 },
      { name: 'Data Modeling', percentage: 20 },
      { name: 'UI Development', percentage: 25 },
      { name: 'Testing and Debugging', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/platform-developer-1',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/platform-developer-1'
    }
  },
  {
    id: 'platform-developer-ii',
    title: 'Platform Developer II',
    category: categories.DEVELOPERS,
    description: 'Advanced developer certification for Salesforce applications',
    image: 'https://trailhead.salesforce.com/credentials/platform-developer-2',
    examDetails: {
      questions: 60,
      passingScore: 70,
      duration: 120,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Advanced Apex Programming', percentage: 30 },
      { name: 'Advanced Data Modeling', percentage: 20 },
      { name: 'Salesforce Integration', percentage: 25 },
      { name: 'Deployment and DevOps', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/platform-developer-2',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/platform-developer-2'
    }
  },
  // ARTIFICIAL INTELLIGENCE
  {
    id: 'ai-specialist',
    title: 'AI Specialist',
    category: categories.AI,
    description: 'Certification for implementing AI solutions within Salesforce',
    image: 'https://trailhead.salesforce.com/credentials/ai-specialist',
    examDetails: {
      questions: 60,
      passingScore: 65,
      duration: 105,
      price: 200,
      retakePrice: 100,
    },
    topics: [
      { name: 'Einstein Basics', percentage: 25 },
      { name: 'Predictive Analysis', percentage: 25 },
      { name: 'AI Ethics and Compliance', percentage: 25 },
      { name: 'Salesforce AI Tools', percentage: 25 }
    ],
    resources: {
      trailhead: 'https://trailhead.salesforce.com/credentials/ai-specialist',
      trailmix: 'https://trailhead.salesforce.com/content/learn/trails/ai-specialist'
    }
  }
];

export const getCertificationsByCategory = (category) => {
  return certifications.filter(cert => cert.category === category);
};
