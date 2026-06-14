import type { LocalizedContent } from "./types";

const sharedTechnologies = {
  antiFraud: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Kubernetes", "Jenkins", "ArgoCD"],
  customerService: ["Java", "Spring Boot", "Angular", "TypeScript", "Oracle DB", "MyBatis", "Jaspersoft"],
  banking: ["Java", "Spring", "Angular", "MSSQL", "Stored Procedure", "JBoss", "WebLogic"],
  messaging: ["Java", "Spring MVC", "Apache Camel", "MSSQL", "Nginx", "JMeter", "Wireshark"]
};

export const resumeContent: LocalizedContent = {
  "zh-TW": {
    profile: {
      name: "魏大為",
      englishName: "David Wei",
      title: "Senior Java Backend Engineer / System Analyst",
      statement: "把需求分析、系統設計、Java 開發、雲端部署與資安維運，串成可落地的企業系統交付流程。",
      summary: "近九年軟體與系統開發經驗，橫跨電信、金融、反詐資安、客服、簡訊與電子書平台。擅長將業務需求轉為可開發、可測試、可維護的系統規格，並參與後續實作與交付。",
      location: "台北／新北",
      availability: "錄取後一個月可上班",
      email: "davidwell60707@gmail.com",
      socials: []
    },
    values: [
      { index: "01", title: "需求轉規格", description: "從需求訪談、流程釐清到 SA／SD 文件與資料欄位設計，降低落差與返工。" },
      { index: "02", title: "Java 與 API", description: "以 Java、Spring Boot 建置企業後端、RESTful API、批次排程與系統整合。" },
      { index: "03", title: "雲端交付", description: "參與 AWS、Docker、Kubernetes、Jenkins 與 ArgoCD 的部署、上線和問題排查。" },
      { index: "04", title: "資安與維運", description: "處理弱點掃描、稽核佐證、權限控管、資料修正及 production troubleshooting。" }
    ],
    projects: [
      {
        id: "anti-fraud",
        sector: "TELECOM · SECURITY",
        title: "電信反詐與情資管理平台",
        period: "2025 — 至今",
        role: "SA / SD / Full-Stack / DevOps Support",
        summary: "參與大型電信企業的反詐與情資管理內部平台，支援業務單位進行情資追蹤、案件資料查詢與管理。",
        contributions: [
          "參與需求訪談、流程釐清、資料欄位設計與系統邊界確認，完成 SA／SD 交付文件。",
          "建立資料同步與批次排程，處理資料轉換、入庫與同步狀態管理。",
          "參與容器部署、CI/CD、JDK 8 至 17 升級，以及 Checkmarx／WhiteSource 弱點修補。"
        ],
        technologies: sharedTechnologies.antiFraud
      },
      {
        id: "customer-service",
        sector: "TELECOM · ENTERPRISE",
        title: "電信客服與企業內部管理平台",
        period: "2023 — 2025",
        role: "Full-Stack Engineer / API Developer",
        summary: "參與客服、人員與權限管理、客訴流程、批次狀態及報表模組，支援大型企業內部營運流程。",
        contributions: [
          "使用 Angular、RxJS、PrimeNG 建置流程型前端，整合 Spring Boot RESTful API。",
          "使用 Oracle DB、JPA、MyBatis 與 SQL 處理資料查詢、批次與效能調整。",
          "整合 Jaspersoft Studio 產出 Excel 報表，並交付規格、測試及資料庫文件。"
        ],
        technologies: sharedTechnologies.customerService
      },
      {
        id: "banking",
        sector: "FINTECH · BANKING",
        title: "網路銀行、支付與金融後台",
        period: "2018 — 2020",
        role: "SA / SD / PG",
        summary: "參與第三方支付、網路銀行、WebATM、信用卡與銀行內部後台，重視交易正確性、權限與資安要求。",
        contributions: [
          "串接銀行、商家、金融卡、讀卡機與外部資料更新流程。",
          "開發繳費、轉帳、餘額查詢、信用卡服務與試算功能。",
          "擔任客戶溝通窗口，協助需求討論、時程估算、弱掃修補與文件交付。"
        ],
        technologies: sharedTechnologies.banking
      },
      {
        id: "messaging",
        sector: "TELECOM · HIGH TRAFFIC",
        title: "高流量企業簡訊服務平台",
        period: "2020 — 2021",
        role: "SA / SD / PG / Production Troubleshooting",
        summary: "參與電信業者串接、簡訊 Gateway、傳送回報與監控告警，處理高流量服務的效能與線上問題。",
        contributions: [
          "依電信業者規格開發簡訊發送與回報流程，設計 API 與資料流。",
          "進行 MSSQL 與 SQL 效能調整，排查 Nginx、Jetty、Tomcat 服務問題。",
          "使用 Wireshark 分析封包並建立監控告警，強化異常反應能力。"
        ],
        technologies: sharedTechnologies.messaging
      }
    ],
    experience: [
      { company: "台灣大哥大", position: "高級工程師 / 全端工程師", period: "2025.07 — 至今", location: "台北", summary: "負責企業內部平台的系統分析、全端開發、雲端部署、CI/CD、弱點修補與維運支援。", technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Kubernetes"] },
      { company: "吉音資訊（派駐台灣大哥大）", position: "軟體工程師 / 全端工程師", period: "2023.08 — 2025.07", location: "台北", summary: "參與電信客服與內部管理系統的全端開發、批次處理、報表模組與規格文件交付。", technologies: ["Spring Boot", "Angular", "Oracle DB", "Jaspersoft"] },
      { company: "鈞聖興", position: "專案管理師 / 專案管理主管", period: "2021.01 — 2023.07", location: "台北", summary: "負責 B2B 客戶需求理解、合作方案規劃、第一線問題回應與跨部門溝通協調。", technologies: ["需求訪談", "客戶溝通", "專案協調", "流程管理"] },
      { company: "三竹資訊", position: "工程師 / Internet 程式設計師", period: "2020.06 — 2021.01", location: "台北", summary: "開發高流量簡訊平台與電信業者串接，處理監控告警、效能與 production troubleshooting。", technologies: ["Java", "Apache Camel", "MSSQL", "Nginx", "Wireshark"] },
      { company: "Atos 台灣源訊", position: "軟體工程師", period: "2018.04 — 2020.06", location: "台北", summary: "參與金融銀行系統、第三方支付、網路銀行、銀行後台與資安弱點修補。", technologies: ["Java", "Spring", "Angular", "MSSQL", "JBoss"] },
      { company: "廣達電腦", position: "韌體工程師", period: "2017.05 — 2017.12", location: "桃園", summary: "參與雲端伺服器 BMC 功能、Linux 服務、硬體監控與底層問題排查。", technologies: ["C", "Python", "Linux", "BMC", "Redfish", "IPMI"] },
      { company: "群傳媒（Readmoo）", position: "後端工程師", period: "2015.04 — 2016.06", location: "台北", summary: "參與電子書商城、分享書平台、API、後台報表與第三方服務整合。", technologies: ["PHP", "CodeIgniter", "MySQL", "Elasticsearch", "AWS"] }
    ],
    skills: [
      { title: "Backend", description: "企業平台、API、批次與系統整合", items: ["Java", "Spring Boot", "Spring Framework", "RESTful API", "JPA", "MyBatis", "Hibernate", "Apache Camel"] },
      { title: "System Analysis", description: "需求轉規格、流程與交付文件", items: ["需求訪談", "流程分析", "SA / SD 文件", "資料欄位設計", "驗收測試", "跨部門溝通"] },
      { title: "Frontend", description: "流程型管理介面與前後端整合", items: ["Angular", "TypeScript", "RxJS", "PrimeNG", "JavaScript", "JQuery", "Bootstrap"] },
      { title: "Data", description: "查詢、批次、報表與效能調整", items: ["PostgreSQL", "Oracle DB", "MSSQL", "MySQL", "SQL", "PL/SQL", "Stored Procedure"] },
      { title: "Cloud & DevOps", description: "環境、容器與可追蹤部署流程", items: ["AWS", "Docker", "Kubernetes", "Rancher", "Jenkins", "ArgoCD", "Nginx", "TLS"] },
      { title: "Security & Operations", description: "企業上線、稽核與問題排查", items: ["Checkmarx", "WhiteSource", "弱點修補", "Audit Support", "Logging", "Monitoring", "Wireshark", "JMeter"] }
    ],
    education: {
      heading: "從程式開發走向完整系統交付",
      intro: "我畢業於長庚大學資訊工程學系。職涯從 Web 後端、伺服器韌體、金融與電信平台一路延伸至系統分析、雲端部署、資安修補與維運。我重視的不只是完成程式，而是讓系統穩定、可維護、可追蹤並真正支援使用者。",
      items: [
        { label: "Education", value: "長庚大學 資訊工程學系｜2009 — 2014" },
        { label: "Certification", value: "Oracle Certified Professional, Java SE 6 Programmer" },
        { label: "Awards", value: "大學校院網路通訊軟體與創意應用競賽系統設計組第二名；全國生醫電子與資訊專題實務競賽佳作" },
        { label: "Career Direction", value: "持續深化 Java 後端、企業系統、System Analysis、雲端應用與 Solution Architecture" }
      ]
    },
    labels: {
      nav: { profile: "首頁", work: "代表專案", experience: "工作經歷", toolkit: "技術能力", about: "關於我", contact: "聯絡" },
      actions: { contact: "Email 聯絡", resume: "下載公開履歷", expand: "查看專案詳情", collapse: "收合詳情", backToTop: "返回頂端" },
      sections: {
        values: "我能帶來的價值", valuesLead: "從需求到上線，不把系統交付切成彼此斷裂的片段。",
        projects: "代表專案", projectsLead: "四個場景，呈現系統分析、開發、整合與維運的實務深度。",
        experience: "工作經歷", experienceLead: "從 Web 平台與底層系統，累積到企業級交付與跨部門協作。",
        skills: "技術能力", skillsLead: "以實際應用情境組織技能，而不是只有關鍵字清單。",
        about: "關於我", contact: "一起打造穩定、可維護的系統", contactLead: "我正在尋找資深 Java Backend Engineer、System Analyst 與企業系統交付相關機會。"
      },
      meta: { role: "角色", contribution: "主要貢獻", technology: "技術" }
    }
  },
  en: {
    profile: {
      name: "David Wei",
      englishName: "魏大為",
      title: "Senior Java Backend Engineer / System Analyst",
      statement: "Connecting requirements, system design, Java delivery, cloud deployment, security, and operations into dependable enterprise systems.",
      summary: "Nearly nine years of software and system development experience across telecom, banking, anti-fraud, customer service, messaging, and digital publishing platforms. I translate business needs into testable, maintainable system specifications and stay involved through implementation and delivery.",
      location: "Taipei / New Taipei",
      availability: "Available one month after offer",
      email: "davidwell60707@gmail.com",
      socials: []
    },
    values: [
      { index: "01", title: "Requirements to Specifications", description: "Turn interviews and workflows into SA/SD documents, data definitions, and buildable requirements." },
      { index: "02", title: "Java & API Delivery", description: "Build enterprise backends, RESTful APIs, batch jobs, and integrations with Java and Spring Boot." },
      { index: "03", title: "Cloud Delivery", description: "Support deployment and troubleshooting across AWS, Docker, Kubernetes, Jenkins, and ArgoCD." },
      { index: "04", title: "Security & Operations", description: "Handle vulnerability remediation, audit evidence, access controls, data fixes, and production issues." }
    ],
    projects: [
      {
        id: "anti-fraud", sector: "TELECOM · SECURITY", title: "Telecom Anti-Fraud Intelligence Platform", period: "2025 — Present", role: "SA / SD / Full-Stack / DevOps Support",
        summary: "Contributing to an internal anti-fraud and intelligence platform for a major telecom company, supporting investigation, case lookup, and information management.",
        contributions: ["Translated stakeholder interviews, workflows, data fields, and system boundaries into SA/SD deliverables.", "Built scheduled synchronization workflows for transformation, persistence, and status tracking.", "Supported container delivery, CI/CD, JDK 8 to 17 migration, and Checkmarx/WhiteSource remediation."],
        technologies: sharedTechnologies.antiFraud
      },
      {
        id: "customer-service", sector: "TELECOM · ENTERPRISE", title: "Telecom Customer Service Platform", period: "2023 — 2025", role: "Full-Stack Engineer / API Developer",
        summary: "Developed customer service, identity and access, complaint workflows, batch status, and reporting modules for enterprise operations.",
        contributions: ["Built workflow-oriented interfaces with Angular, RxJS, and PrimeNG integrated with Spring Boot APIs.", "Used Oracle DB, JPA, MyBatis, and SQL for queries, batch processing, and performance improvements.", "Integrated Jaspersoft for Excel reports and delivered specifications, tests, and database documentation."],
        technologies: sharedTechnologies.customerService
      },
      {
        id: "banking", sector: "FINTECH · BANKING", title: "Digital Banking, Payments & Back Office", period: "2018 — 2020", role: "SA / SD / PG",
        summary: "Worked on third-party payments, internet banking, WebATM, credit card services, and banking operations with strict transaction and security requirements.",
        contributions: ["Integrated banking, merchant, card-reader, and external data workflows.", "Developed payment, transfer, balance inquiry, card service, and calculation features.", "Coordinated with banking stakeholders on scope, estimates, vulnerability fixes, and delivery documents."],
        technologies: sharedTechnologies.banking
      },
      {
        id: "messaging", sector: "TELECOM · HIGH TRAFFIC", title: "High-Volume Enterprise Messaging Platform", period: "2020 — 2021", role: "SA / SD / PG / Production Troubleshooting",
        summary: "Built carrier integrations, messaging gateways, delivery reports, and monitoring for a high-volume enterprise messaging service.",
        contributions: ["Implemented carrier-specific sending and delivery-report workflows with API and data-flow design.", "Tuned MSSQL and SQL performance and diagnosed Nginx, Jetty, and Tomcat services.", "Analyzed network traffic with Wireshark and established monitoring alerts for faster response."],
        technologies: sharedTechnologies.messaging
      }
    ],
    experience: [
      { company: "Taiwan Mobile", position: "Senior Engineer / Full-Stack Engineer", period: "Jul 2025 — Present", location: "Taipei", summary: "System analysis, full-stack delivery, cloud deployment, CI/CD, vulnerability remediation, and operational support for enterprise platforms.", technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Kubernetes"] },
      { company: "G-Inn Technology (Taiwan Mobile assignment)", position: "Software Engineer / Full-Stack Engineer", period: "Aug 2023 — Jul 2025", location: "Taipei", summary: "Full-stack development, batch workflows, reporting modules, and specification delivery for telecom customer service systems.", technologies: ["Spring Boot", "Angular", "Oracle DB", "Jaspersoft"] },
      { company: "Jun Sheng Xing", position: "Project Manager / Project Management Supervisor", period: "Jan 2021 — Jul 2023", location: "Taipei", summary: "B2B customer discovery, solution planning, first-line support, and cross-functional coordination.", technologies: ["Requirements", "Customer Communication", "Coordination", "Process Management"] },
      { company: "Mitake Information", position: "Engineer / Internet Programmer", period: "Jun 2020 — Jan 2021", location: "Taipei", summary: "High-volume messaging, carrier integration, monitoring, performance tuning, and production troubleshooting.", technologies: ["Java", "Apache Camel", "MSSQL", "Nginx", "Wireshark"] },
      { company: "Atos Taiwan", position: "Software Engineer", period: "Apr 2018 — Jun 2020", location: "Taipei", summary: "Banking systems, third-party payments, internet banking, back-office applications, and security remediation.", technologies: ["Java", "Spring", "Angular", "MSSQL", "JBoss"] },
      { company: "Quanta Computer", position: "Firmware Engineer", period: "May 2017 — Dec 2017", location: "Taoyuan", summary: "Cloud server BMC features, Linux services, hardware monitoring, and low-level troubleshooting.", technologies: ["C", "Python", "Linux", "BMC", "Redfish", "IPMI"] },
      { company: "Readmoo", position: "Backend Engineer", period: "Apr 2015 — Jun 2016", location: "Taipei", summary: "E-book commerce, social reading, APIs, back-office reports, and third-party integrations.", technologies: ["PHP", "CodeIgniter", "MySQL", "Elasticsearch", "AWS"] }
    ],
    skills: [
      { title: "Backend", description: "Enterprise platforms, APIs, batch jobs, integration", items: ["Java", "Spring Boot", "Spring Framework", "RESTful API", "JPA", "MyBatis", "Hibernate", "Apache Camel"] },
      { title: "System Analysis", description: "Requirements, workflows, and delivery documents", items: ["Stakeholder Interviews", "Process Analysis", "SA / SD Documents", "Data Definitions", "Acceptance Testing", "Cross-Team Communication"] },
      { title: "Frontend", description: "Workflow interfaces and full-stack integration", items: ["Angular", "TypeScript", "RxJS", "PrimeNG", "JavaScript", "JQuery", "Bootstrap"] },
      { title: "Data", description: "Queries, batch processing, reporting, performance", items: ["PostgreSQL", "Oracle DB", "MSSQL", "MySQL", "SQL", "PL/SQL", "Stored Procedure"] },
      { title: "Cloud & DevOps", description: "Environments, containers, traceable delivery", items: ["AWS", "Docker", "Kubernetes", "Rancher", "Jenkins", "ArgoCD", "Nginx", "TLS"] },
      { title: "Security & Operations", description: "Enterprise release, audit, and troubleshooting", items: ["Checkmarx", "WhiteSource", "Vulnerability Remediation", "Audit Support", "Logging", "Monitoring", "Wireshark", "JMeter"] }
    ],
    education: {
      heading: "From software development to end-to-end system delivery",
      intro: "I graduated from Chang Gung University with a degree in Computer Science. My career has moved from web backend and server firmware into banking, telecom, system analysis, cloud delivery, security remediation, and operations. I care not only about completing code, but about building systems that remain stable, maintainable, traceable, and useful.",
      items: [
        { label: "Education", value: "Chang Gung University, B.S. in Computer Science and Information Engineering | 2009 — 2014" },
        { label: "Certification", value: "Oracle Certified Professional, Java SE 6 Programmer" },
        { label: "Awards", value: "Second Place, University Network Communication Software & Creative Application Competition; Honorable Mention, National Biomedical Electronics & IT Project Competition" },
        { label: "Career Direction", value: "Java backend, enterprise systems, System Analysis, cloud delivery, and Solution Architecture" }
      ]
    },
    labels: {
      nav: { profile: "Profile", work: "Selected Work", experience: "Experience", toolkit: "Toolkit", about: "About", contact: "Contact" },
      actions: { contact: "Email me", resume: "Download resume", expand: "View project details", collapse: "Collapse details", backToTop: "Back to top" },
      sections: {
        values: "What I Bring", valuesLead: "From requirements to production, I connect the parts that make enterprise delivery dependable.",
        projects: "Selected Work", projectsLead: "Four environments that demonstrate practical depth in analysis, development, integration, and operations.",
        experience: "Experience", experienceLead: "A path from web platforms and low-level systems to enterprise delivery and cross-functional collaboration.",
        skills: "Technical Toolkit", skillsLead: "Capabilities organized by where they create value, not as a wall of keywords.",
        about: "About", contact: "Let’s build systems that last", contactLead: "I am exploring Senior Java Backend Engineer, System Analyst, and enterprise delivery opportunities."
      },
      meta: { role: "Role", contribution: "Contribution", technology: "Technology" }
    }
  }
};
