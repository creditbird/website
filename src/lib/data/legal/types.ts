export type SupportedLocale =
  | 'vi'
  | 'en'
  | 'zh'
  | 'ja'
  | 'ko'
  | 'th'
  | 'lo'
  | 'ms'
  | 'es'
  | 'fr'
  | 'hi';

export interface SecurityContent {
  sec1: {
    title: string;
    p1: string;
    p2: string;
    pillars: {
      confidentiality: { title: string; subtitle: string; desc: string };
      integrity: { title: string; subtitle: string; desc: string };
      availability: { title: string; subtitle: string; desc: string };
    };
  };
  sec2: {
    title: string;
    desc: string;
    items: { label: string; text: string }[];
  };
  sec3: {
    title: string;
    desc: string;
    items: { label: string; text: string }[];
  };
  sec4: {
    title: string;
    desc: string;
    items: { label: string; text: string }[];
  };
  sec5: {
    title: string;
    desc: string;
    items: string[];
  };
  sec6: {
    title: string;
    desc: string;
    contact: {
      deptLabel: string;
      deptVal: string;
      taxLabel: string;
      taxVal: string;
      hotlineLabel: string;
      hotlineVal: string;
      emailLabel: string;
      emailVal: string;
      slaLabel: string;
      slaVal: string;
    };
  };
}

export interface TermsContent {
  sec1: {
    title: string;
    intro: string;
    company: {
      nameLabel: string;
      nameVal: string;
      intlLabel: string;
      intlVal: string;
      taxLabel: string;
      taxVal: string;
      authLabel: string;
      authVal: string;
      addrLabel: string;
      addrVal: string;
      repLabel: string;
      repVal: string;
    };
  };
  sec2: {
    title: string;
    intro: string;
    services: { label: string; text: string }[];
  };
  sec3: {
    title: string;
    creditbirdTitle: string;
    creditbirdItems: string[];
    customerTitle: string;
    customerItems: string[];
  };
  sec4: {
    title: string;
    p1: string;
    p2: string;
  };
  sec5: {
    title: string;
    intro: string;
    items: { label: string; text: string }[];
  };
  sec6: {
    title: string;
    p1: string;
    p2: string;
  };
  sec7: {
    title: string;
    p1: string;
    p2: string;
  };
}

export interface PrivacyContent {
  sec1: {
    title: string;
    intro: string;
    legalBases: string[];
    scope: string;
  };
  sec2: {
    title: string;
    intro: string;
    purposes: string[];
  };
  sec3: {
    title: string;
    directTitle: string;
    directItems: string[];
    autoTitle: string;
    autoItems: string[];
  };
  sec4: {
    title: string;
    intro: string;
    cards: {
      encryptionTitle: string;
      encryptionDesc: string;
      rbacTitle: string;
      rbacDesc: string;
    };
    noSellCommitment: string;
  };
  sec5: {
    title: string;
    p1: string;
    p2: string;
  };
  sec6: {
    title: string;
    intro: string;
    rights: string[];
  };
  sec7: {
    title: string;
    intro: string;
    contact: {
      controllerLabel: string;
      controllerVal: string;
      taxLabel: string;
      taxVal: string;
      addrLabel: string;
      addrVal: string;
      hotlineLabel: string;
      hotlineVal: string;
      emailLabel: string;
      emailVal: string;
    };
  };
}

export interface WarrantyContent {
  sec1: {
    title: string;
    intro: string;
    cards: {
      hvacTitle: string;
      hvacWarranty: string;
      hvacDesc: string;
      retailTitle: string;
      retailWarranty: string;
      retailDesc: string;
    };
    replacementTitle: string;
    replacementItems: string[];
  };
  sec2: {
    title: string;
    intro: string;
    items: { label: string; text: string }[];
  };
  sec3: {
    title: string;
    intro: string;
    table: {
      thLevel: string;
      thImpact: string;
      thResponse: string;
      thResolution: string;
      rows: {
        level: string;
        levelClass: string;
        impact: string;
        response: string;
        resolution: string;
      }[];
    };
    uptimeLabel: string;
    uptimeNote: string;
  };
  sec4: {
    title: string;
    steps: { num: string; title: string; desc: string }[];
  };
  sec5: {
    title: string;
    intro: string;
    exclusions: string[];
    paidSupportNote: string;
  };
}
