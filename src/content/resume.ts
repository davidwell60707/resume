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
    sectionBriefs: {
      values: {
        summary: [
          "具近九年軟體與系統開發經驗，從 Web 平台、伺服器韌體一路延伸至金融、電信、反詐與企業內部系統。",
          "核心價值不只在完成功能，而是將需求、規格、開發、部署、資安與維運串成可追蹤的交付流程。"
        ],
        cards: [
          { title: "近九年經驗", description: "橫跨電信、金融、反詐、客服、簡訊、電子書與雲端伺服器場景。" },
          { title: "端到端交付", description: "涵蓋需求訪談、SA／SD、全端實作、資料庫、部署上線與維運支援。" },
          { title: "近期技術主力", description: "Java 17、Spring Boot、PostgreSQL、AWS、Docker 與 Kubernetes。" },
          { title: "企業系統實務", description: "熟悉權限、稽核、弱掃、批次、資料正確性與跨部門協作。" }
        ],
        tags: ["SA / SD", "REST API", "Batch", "CI/CD", "Security"]
      },
      experience: {
        summary: [
          "近期經歷聚焦大型電信企業的系統分析、全端交付、雲端部署與資安維運；早期經歷則建立金融交易、高流量服務與底層系統能力。",
          "每段工作皆保留能被面試深入追問的具體成果，讓 HR 能快速理解職涯成長脈絡。"
        ],
        cards: [
          { title: "大型企業環境", description: "具台灣大哥大、金融銀行、電信服務與跨部門合作經驗。" },
          { title: "系統分析深化", description: "從需求訪談與文件交付，逐步承擔系統邊界、資料欄位與驗收設計。" },
          { title: "技術跨度", description: "從 PHP、C／Python 到 Java、Angular、Cloud Native 與 DevOps。" },
          { title: "穩定交付", description: "能處理功能開發、效能排查、弱點修補、監控告警與正式環境支援。" }
        ]
      },
      projects: {
        summary: [
          "六個代表場景涵蓋反詐、客服、金融、高流量簡訊、雲端伺服器與數位內容平台。",
          "專案內容以角色、系統情境、主要貢獻與技術呈現，避免揭露客戶機密架構。"
        ],
        cards: [
          { title: "分析與文件", description: "需求訪談、流程釐清、SA／SD、資料定義、測試與使用說明。" },
          { title: "企業後端", description: "RESTful API、批次排程、報表、系統整合與資料處理。" },
          { title: "部署與資安", description: "AWS、Kubernetes、Jenkins、ArgoCD、弱點修補與稽核支援。" },
          { title: "代表成果", description: "JDK 8 升級至 17，並曾處理單日超過 3,000 萬筆簡訊傳送情境。" }
        ]
      },
      skills: {
        summary: [
          "技能依照實際應用情境分組，呈現能解決的問題，而不是以百分比或熟練度條製造不具證據的比較。",
          "主力為 Java 企業後端與系統分析，並具備全端、資料、雲端部署、資安維運及文件交付能力。"
        ],
        cards: [
          { title: "核心主力", description: "Java、Spring Boot、RESTful API、SQL 與企業平台整合。" },
          { title: "全端支援", description: "Angular、TypeScript、RxJS、PrimeNG 與流程型管理介面。" },
          { title: "交付能力", description: "Docker、Kubernetes、Jenkins、ArgoCD 與 AWS 環境。" },
          { title: "品質與維運", description: "Checkmarx、WhiteSource、Logging、Monitoring、JMeter 與 Wireshark。" }
        ],
        tags: ["Backend", "System Analysis", "Cloud", "Security", "Documentation"]
      },
      about: {
        summary: [
          "職涯從 Web 後端、伺服器韌體、金融與電信平台，逐步走向系統分析、雲端交付、資安修補與維運支援。",
          "工作上重視穩定、細心、責任感與溝通，目標是成為能釐清需求、降低風險並穩定交付的資深工程人才。"
        ],
        cards: [
          { title: "工作特質", description: "踏實、細心、主動追蹤，能與業務、使用者及技術團隊協作。" },
          { title: "語言能力", description: "英文閱讀佳，可進行英文 Email 與遠端會議的技術溝通。" },
          { title: "競賽經驗", description: "具系統設計競賽第二名與生醫電子資訊專題競賽佳作。" },
          { title: "職涯方向", description: "深化 Java Backend、System Analysis、Cloud Native 與 Solution Architecture。" }
        ]
      }
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
      },
      {
        id: "bmc",
        sector: "CLOUD SERVER · FIRMWARE",
        title: "BMC 雲端伺服器管理系統",
        period: "2017",
        role: "Firmware Engineer / System Integration",
        summary: "參與雲端伺服器 BMC 功能開發與維護，支援硬體狀態監控、Linux 服務管理與底層問題排查。",
        contributions: [
          "以 C 與 Python 開發及排查 Linux service、daemon、DBus、Redfish 與 IPMI 相關功能。",
          "處理溫度、網路、風扇、儲存裝置與 LED 等硬體監控，執行相容性與可靠度驗證。",
          "與國外客戶透過英文 Email 與遠端會議確認需求、限制及問題處理方向。"
        ],
        technologies: ["C", "Python", "Linux", "BMC", "DBus", "Redfish", "IPMI", "GPIO"]
      },
      {
        id: "readmoo",
        sector: "DIGITAL CONTENT · E-COMMERCE",
        title: "Readmoo 電子書與社群閱讀平台",
        period: "2015 — 2016",
        role: "Backend Engineer / API Developer",
        summary: "參與電子書商城、分享書社群、會員中心、後台管理、活動網站與第三方服務整合。",
        contributions: [
          "使用 MVC 與 CodeIgniter 開發 API、資料模型、後台功能及電子書流程。",
          "整合 Facebook／Google 登入、Evernote、Slack 通知與 Elasticsearch 搜尋。",
          "以 Docker Compose、Git Flow、Scrum、Code Review 與 Swagger 支援團隊交付。"
        ],
        technologies: ["PHP", "CodeIgniter", "MySQL", "Elasticsearch", "Docker Compose", "AWS", "Swagger"]
      }
    ],
    experience: [
      { company: "台灣大哥大", position: "高級工程師 / 全端工程師", period: "2025.07 — 至今", location: "台北", summary: "負責企業內部反詐與情資平台的系統分析、全端開發、雲端部署、資安與維運支援。", highlights: ["參與需求訪談與 SA／SD 文件、資料欄位及系統邊界設計。", "建立資料同步與批次排程，處理轉換、入庫及同步狀態。", "建置 Docker、Kubernetes、Jenkins、ArgoCD 部署流程。", "協助 JDK 8 升級至 JDK 17，並處理弱點掃描與稽核佐證。"], technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Kubernetes"] },
      { company: "吉音資訊（派駐台灣大哥大）", position: "軟體工程師 / 全端工程師", period: "2023.08 — 2025.07", location: "台北", summary: "參與電信客服與企業內部管理系統的全端開發、批次、報表及文件交付。", highlights: ["以 Angular、RxJS、PrimeNG 串接 Spring Boot RESTful API。", "設計批次狀態回饋、錯誤處理與通知流程。", "整合 Jaspersoft Studio 與 SQL 產出定期 Excel 報表。", "交付規格書、使用說明、驗證測試及資料庫文件。"], technologies: ["Spring Boot", "Angular", "Oracle DB", "Jaspersoft"] },
      { company: "鈞聖興", position: "專案管理師 / 專案管理主管", period: "2021.01 — 2023.07", location: "台北", summary: "負責 B2B 客戶需求理解、合作方案規劃、第一線問題回應與跨部門協調。", highlights: ["維護企業客戶並擔任第一線需求與問題窗口。", "執行產業評估、流程控管及內部資源協調。", "累積商務理解、需求釐清與問題追蹤能力。"], technologies: ["需求訪談", "客戶溝通", "專案協調", "流程管理"] },
      { company: "三竹資訊", position: "工程師 / Internet 程式設計師", period: "2020.06 — 2021.01", location: "台北", summary: "開發高流量簡訊平台與電信業者串接，處理監控、效能與 production troubleshooting。", highlights: ["依電信業者規格開發簡訊發送、接收及回報流程。", "曾處理單日超過 3,000 萬筆簡訊傳送情境與 SQL 效能調整。", "使用 Wireshark 排查封包，並建置監控告警服務。"], technologies: ["Java", "Apache Camel", "MSSQL", "Nginx", "Wireshark"] },
      { company: "Atos 台灣源訊", position: "軟體工程師", period: "2018.04 — 2020.06", location: "台北", summary: "參與金融銀行系統、第三方支付、網路銀行、銀行後台與資安弱點修補。", highlights: ["開發繳費、轉帳、餘額查詢、信用卡服務及試算功能。", "串接金融卡、讀卡機、主機電文與外部資料更新流程。", "擔任銀行客戶窗口，協助需求、估時、進度及文件交付。"], technologies: ["Java", "Spring", "Angular", "MSSQL", "JBoss"] },
      { company: "廣達電腦", position: "韌體工程師", period: "2017.05 — 2017.12", location: "桃園", summary: "參與雲端伺服器 BMC 功能、Linux 服務、硬體監控與底層問題排查。", highlights: ["以 C、Python 處理 Linux service、daemon 與 DBus。", "實作及排查 Redfish、IPMI、GPIO 與硬體監控功能。", "以英文 Email 與遠端會議協助國外客戶確認需求。"], technologies: ["C", "Python", "Linux", "BMC", "Redfish", "IPMI"] },
      { company: "群傳媒（Readmoo）", position: "後端工程師", period: "2015.04 — 2016.06", location: "台北", summary: "參與電子書商城、分享書平台、API、後台報表與第三方服務整合。", highlights: ["使用 CodeIgniter 與 MySQL 開發 API、資料模型及後台流程。", "整合社群登入、Evernote、Slack 與 Elasticsearch。", "導入 Docker Compose、Git Flow、Scrum 與 Swagger 文件。"], technologies: ["PHP", "CodeIgniter", "MySQL", "Elasticsearch", "AWS"] }
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
      heading: "我從程式開發起步，逐步累積系統分析、資料處理、雲端部署、資安修補與維運支援能力。相比單純完成需求，我更重視需求釐清、風險控管、交付品質與後續可維護性。",
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
        values: "我能帶來的價值", valuesLead: "我擅長將需求訪談、系統分析、後端開發、雲端部署與資安維運串成完整交付流程，讓系統不只完成開發，而是能被穩定上線、持續維護，並支援實際營運。",
        projects: "代表專案", projectsLead: "代表專案涵蓋反詐平台、客服系統、金融交易、簡訊與雲端部署等場景，呈現我在需求拆解、資料流程、API 整合、批次排程、資安修補與正式營運支援上的實務能力。",
        experience: "工作經歷", experienceLead: "職涯從 Web 後端、伺服器韌體與企業內部系統逐步累積，近年聚焦大型平台的系統分析、全端開發、雲端部署、資安修補與跨部門協作，能在需求不完整與時程壓力下推動穩定交付。",
        skills: "技術能力", skillsLead: "技術能力以企業系統交付為核心，涵蓋 Java / Spring Boot 後端、Angular 前端、PostgreSQL 資料庫、Docker / Kubernetes 部署、AWS 雲端服務，以及弱掃修補、Logging、Monitoring 與問題排查。",
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
    sectionBriefs: {
      values: {
        summary: [
          "Nearly nine years of software and systems experience spanning web platforms, server firmware, banking, telecom, anti-fraud, and enterprise applications.",
          "My value is connecting requirements, specifications, development, deployment, security, and operations into one traceable delivery flow."
        ],
        cards: [
          { title: "Nearly Nine Years", description: "Experience across telecom, banking, anti-fraud, customer service, messaging, digital content, and cloud servers." },
          { title: "End-to-End Delivery", description: "Requirements, SA/SD, full-stack implementation, data, deployment, security, and operations." },
          { title: "Recent Core Stack", description: "Java 17, Spring Boot, PostgreSQL, AWS, Docker, and Kubernetes." },
          { title: "Enterprise Practice", description: "Access control, audits, security scans, batch jobs, data correctness, and cross-team delivery." }
        ],
        tags: ["SA / SD", "REST API", "Batch", "CI/CD", "Security"]
      },
      experience: {
        summary: [
          "Recent roles focus on system analysis, full-stack delivery, cloud deployment, security, and operations in a major telecom environment.",
          "Earlier roles established practical depth in financial transactions, high-volume services, server firmware, and web platforms."
        ],
        cards: [
          { title: "Large Enterprises", description: "Telecom, banking, messaging, and cross-functional delivery environments." },
          { title: "System Analysis", description: "Stakeholder interviews, system boundaries, data fields, SA/SD, tests, and handover documents." },
          { title: "Technical Range", description: "A progression from PHP and C/Python to Java, Angular, Cloud Native, and DevOps." },
          { title: "Dependable Delivery", description: "Feature delivery, performance diagnosis, vulnerability remediation, monitoring, and production support." }
        ]
      },
      projects: {
        summary: [
          "Six representative environments cover anti-fraud, customer service, banking, high-volume messaging, cloud server firmware, and digital content.",
          "Each project focuses on role, context, contribution, and technology without exposing confidential architecture."
        ],
        cards: [
          { title: "Analysis & Documents", description: "Requirements, workflows, SA/SD, data definitions, testing, and user documentation." },
          { title: "Enterprise Backend", description: "RESTful APIs, scheduled jobs, reports, integrations, and data processing." },
          { title: "Delivery & Security", description: "AWS, Kubernetes, Jenkins, ArgoCD, vulnerability remediation, and audit support." },
          { title: "Representative Results", description: "JDK 8 to 17 modernization and experience with over 30 million daily message deliveries." }
        ]
      },
      skills: {
        summary: [
          "Capabilities are grouped by practical application rather than unsupported percentage scores.",
          "The primary focus is Java enterprise backend and system analysis, supported by full-stack, data, cloud, security, operations, and documentation skills."
        ],
        cards: [
          { title: "Core Strength", description: "Java, Spring Boot, RESTful APIs, SQL, and enterprise integration." },
          { title: "Full-Stack Support", description: "Angular, TypeScript, RxJS, PrimeNG, and workflow-oriented interfaces." },
          { title: "Delivery Capability", description: "Docker, Kubernetes, Jenkins, ArgoCD, and AWS environments." },
          { title: "Quality & Operations", description: "Checkmarx, WhiteSource, logging, monitoring, JMeter, and Wireshark." }
        ],
        tags: ["Backend", "System Analysis", "Cloud", "Security", "Documentation"]
      },
      about: {
        summary: [
          "My career progressed from web backend and server firmware into banking, telecom, system analysis, cloud delivery, security remediation, and operations.",
          "I am known for being dependable, detail-oriented, responsible, and willing to communicate until a problem is clearly understood and resolved."
        ],
        cards: [
          { title: "Work Style", description: "Steady, detail-oriented, proactive in follow-up, and comfortable across business and technical teams." },
          { title: "Language", description: "Strong English reading with practical technical communication through email and remote meetings." },
          { title: "Competitions", description: "Second place in a system design competition and an honorable mention in a biomedical IT competition." },
          { title: "Career Direction", description: "Java backend, system analysis, Cloud Native delivery, and Solution Architecture." }
        ]
      }
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
      },
      {
        id: "bmc", sector: "CLOUD SERVER · FIRMWARE", title: "BMC Cloud Server Management System", period: "2017", role: "Firmware Engineer / System Integration",
        summary: "Developed and maintained BMC features for cloud servers, including hardware monitoring, Linux service management, and low-level troubleshooting.",
        contributions: ["Developed and diagnosed Linux services, daemons, DBus, Redfish, and IPMI features with C and Python.", "Supported temperature, network, fan, storage, and LED monitoring with compatibility and reliability testing.", "Communicated technical requirements and issues with overseas customers through English email and remote meetings."],
        technologies: ["C", "Python", "Linux", "BMC", "DBus", "Redfish", "IPMI", "GPIO"]
      },
      {
        id: "readmoo", sector: "DIGITAL CONTENT · E-COMMERCE", title: "Readmoo E-Book and Social Reading Platform", period: "2015 — 2016", role: "Backend Engineer / API Developer",
        summary: "Built features for an e-book store, social reading, member services, administration, campaign sites, and third-party integrations.",
        contributions: ["Developed APIs, data models, administration features, and e-book workflows with MVC and CodeIgniter.", "Integrated social login, Evernote, Slack notifications, and Elasticsearch search.", "Supported team delivery with Docker Compose, Git Flow, Scrum, code review, and Swagger."],
        technologies: ["PHP", "CodeIgniter", "MySQL", "Elasticsearch", "Docker Compose", "AWS", "Swagger"]
      }
    ],
    experience: [
      { company: "Taiwan Mobile", position: "Senior Engineer / Full-Stack Engineer", period: "Jul 2025 — Present", location: "Taipei", summary: "System analysis, full-stack delivery, cloud deployment, security, and operational support for an internal anti-fraud intelligence platform.", highlights: ["Conduct requirements interviews and produce SA/SD, data-field, and system-boundary designs.", "Build synchronization and scheduled jobs for transformation, persistence, and status tracking.", "Support Docker, Kubernetes, Jenkins, and ArgoCD delivery workflows.", "Contributed to the JDK 8 to JDK 17 upgrade, security remediation, and audit evidence."], technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Kubernetes"] },
      { company: "G-Inn Technology (Taiwan Mobile assignment)", position: "Software Engineer / Full-Stack Engineer", period: "Aug 2023 — Jul 2025", location: "Taipei", summary: "Full-stack development, batch workflows, reports, and documentation for telecom customer service and internal platforms.", highlights: ["Connected Angular, RxJS, and PrimeNG workflows to Spring Boot RESTful APIs.", "Designed batch-status feedback, error handling, and notification flows.", "Integrated Jaspersoft Studio and SQL for scheduled Excel reports.", "Delivered specifications, user guides, validation tests, and database documents."], technologies: ["Spring Boot", "Angular", "Oracle DB", "Jaspersoft"] },
      { company: "Jun Sheng Xing", position: "Project Manager / Project Management Supervisor", period: "Jan 2021 — Jul 2023", location: "Taipei", summary: "B2B customer discovery, solution planning, first-line support, and cross-functional coordination.", highlights: ["Maintained enterprise customers as the first contact for needs and issues.", "Supported market assessment, process control, and internal resource coordination.", "Strengthened business understanding, requirements clarification, and issue tracking."], technologies: ["Requirements", "Customer Communication", "Coordination", "Process Management"] },
      { company: "Mitake Information", position: "Engineer / Internet Programmer", period: "Jun 2020 — Jan 2021", location: "Taipei", summary: "High-volume messaging, carrier integration, monitoring, performance tuning, and production troubleshooting.", highlights: ["Implemented carrier-specific message delivery and status-report workflows.", "Handled delivery scenarios exceeding 30 million messages per day and tuned SQL performance.", "Used Wireshark for packet diagnosis and established monitoring alerts."], technologies: ["Java", "Apache Camel", "MSSQL", "Nginx", "Wireshark"] },
      { company: "Atos Taiwan", position: "Software Engineer", period: "Apr 2018 — Jun 2020", location: "Taipei", summary: "Banking systems, third-party payments, internet banking, back-office applications, and security remediation.", highlights: ["Developed payment, transfer, balance inquiry, credit card, and calculation features.", "Integrated bank cards, card readers, host messages, and external data updates.", "Coordinated requirements, estimates, progress, and documentation with banking customers."], technologies: ["Java", "Spring", "Angular", "MSSQL", "JBoss"] },
      { company: "Quanta Computer", position: "Firmware Engineer", period: "May 2017 — Dec 2017", location: "Taoyuan", summary: "Cloud server BMC features, Linux services, hardware monitoring, and low-level troubleshooting.", highlights: ["Developed Linux services, daemons, and DBus integrations with C and Python.", "Implemented and diagnosed Redfish, IPMI, GPIO, and hardware monitoring.", "Communicated technical requirements with overseas customers in English."], technologies: ["C", "Python", "Linux", "BMC", "Redfish", "IPMI"] },
      { company: "Readmoo", position: "Backend Engineer", period: "Apr 2015 — Jun 2016", location: "Taipei", summary: "E-book commerce, social reading, APIs, back-office reports, and third-party integrations.", highlights: ["Developed APIs, data models, and administration workflows with CodeIgniter and MySQL.", "Integrated social login, Evernote, Slack, and Elasticsearch.", "Used Docker Compose, Git Flow, Scrum, and Swagger for team delivery."], technologies: ["PHP", "CodeIgniter", "MySQL", "Elasticsearch", "AWS"] }
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
      heading: "My career has evolved from software development into enterprise system delivery, where I focus on clarifying requirements, reducing delivery risk, improving maintainability, and supporting systems beyond go-live.",
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
        values: "What I Bring", valuesLead: "I connect requirements analysis, system design, full-stack implementation, cloud deployment, security remediation, and operations into one dependable enterprise delivery flow.",
        projects: "Selected Work", projectsLead: "Selected projects across anti-fraud, customer service, banking, high-volume messaging, cloud server firmware, and digital content demonstrate practical depth in analysis, integration, backend delivery, deployment, and operations.",
        experience: "Experience", experienceLead: "My experience spans web platforms, server firmware, financial systems, telecom platforms, and anti-fraud applications, with recent focus on system analysis, cloud deployment, security remediation, and cross-functional delivery.",
        skills: "Technical Toolkit", skillsLead: "My toolkit is organized around enterprise delivery: Java backend development, Angular frontend implementation, database design, cloud deployment, CI/CD, security remediation, observability, and production troubleshooting.",
        about: "About", contact: "Let’s build systems that last", contactLead: "I am exploring Senior Java Backend Engineer, System Analyst, and enterprise delivery opportunities."
      },
      meta: { role: "Role", contribution: "Contribution", technology: "Technology" }
    }
  }
};
