export type Language = "zh" | "en";

type Project = {
  title: string;
  background: string;
  stack: string[];
  role: string;
  impact: string[];
};

type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  summary: string;
};

type SiteTranslation = {
  nav: {
    hero: string;
    about: string;
    projects: string;
    skills: string;
    timeline: string;
    contact: string;
  };
  hero: {
    name: string;
    tagline: string;
    jobTargets: string[];
    intro: string[];
    ctas: {
      projects: string;
      contact: string;
    };
  };
  about: {
    title: string;
    story: string[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  skills: {
    title: string;
    categories: {
      name: string;
      items: { label: string; level: number }[];
    }[];
  };
  timeline: {
    title: string;
    items: TimelineItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    wechat: string;
    email: string;
    linkedin: string;
    github: string;
  };
};

export const siteContent: Record<Language, SiteTranslation> = {
  zh: {
    nav: {
      hero: "首页",
      about: "职业规划",
      projects: "以往实习&项目",
      skills: "技能",
      timeline: "成长时间线",
      contact: "联系方式"
    },
    hero: {
      name: "你好 我叫王渤智",
      tagline: "AI Product Manager | AI Operations | AI Engineer",
      jobTargets: ["求职方向：AI 产品经理", "求职方向：AI 运营", "求职方向：AI 工程师"],
      intro: [
        "纽约大学信息系统硕士（科朗研究所与斯特恩商学院），具备数据科学、产品分析与工程落地的复合能力。",
        "专注于把 AI 从实验室能力转化为可规模化的业务系统，强调指标闭环与长期可演进架构。",
        "有广告竞价优化、RAG + Agent 智能体、增长实验平台等实践经验，覆盖研究、产品与工程全链路。",
        "精通英语、日语，可在跨语言与跨团队环境中推动复杂项目快速落地。"
      ],
      ctas: {
        projects: "查看以往实习&项目",
        contact: "联系方式"
      }
    },
    about: {
      title: "关于我的职业规划",
      story: [
        "我专注于将前沿 AI 能力转化为真实业务价值的 AI 产品经理。",
        "擅长在“技术可能性”与“业务必要性”之间做判断，基于对模型边界的理解与效果评估体系设计，将模糊需求转化为可执行的算法任务。",
        "具备扎实的技术理解与实践能力，熟悉 AI 工具链与数据工作流，强调可行性分析、预期管理与 Benchmark 体系建设。",
        "相信产品与算法是战友而非对手，在快速迭代中打造可持续的 AI 能力与业务护城河。",
        "长期保持对行业前沿的敏锐洞察，以结构化思维推动 AI 从实验走向规模化落地。"
      ]
    },
    projects: {
      title: "以往实习&项目",
      items: [
        {
          title: "BorisForAI 智能机器人部署项目",
          background:
            "基于腾讯云 OpenClaw 与飞书生态，搭建可在真实办公场景运行的 AI 机器人 BorisForAI，打通模型能力与企业协作工具的落地链路。",
          stack: ["Tencent Cloud OpenClaw", "Feishu Open Platform", "Webhook", "Prompt Engineering", "API Debugging", "Agent Workflow"],
          role:
            "担任 AI 产品负责人，设计系统架构与对话流转机制，完成飞书机器人配置、消息监听回传链路与提示词策略优化，并解决接口连通性与权限调试问题。",
          impact: ["成功上线可在线运行机器人", "实现消息到模型调用闭环", "提升回复稳定性与可读性", "沉淀可复用 Agent 部署流程"]
        },
        {
          title: "个人品牌网站（AIGC 协作开发）",
          background:
            "从 0 到 1 构建结构化个人品牌网站，以产品化表达替代简历式罗列，并验证 AIGC 工具在前端开发与内容生产中的生产力价值。",
          stack: ["Next.js", "TailwindCSS", "GitHub Pages", "GitHub Actions", "Codex", "SEO Optimization"],
          role:
            "负责信息架构、前端实现与视觉统一，设计 About / Projects / Skills / AI 探索模块，完成响应式适配、自动化部署与性能优化。",
          impact: ["成功上线可公开访问网站", "形成模块化可迭代内容体系", "信息传达效率显著提升", "页面搭建效率提升约 40%"]
        },
        {
          title: "《余时者》AI 动画内容项目",
          background:
            "2026年2月11日至今，围绕“时间量化生存”的末日科幻设定，推进原创动画项目《余时者》的产品化与可规模化内容生产。",
          stack: ["ChatGPT", "Seedance 2.0", "AIGC Workflow", "PRD", "Storyboard Pipeline", "Prompt Engineering"],
          role:
            "担任项目经理，负责整体产品规划与项目管理，主导 PRD 编写和版本迭代，统筹剧本设定、人物世界观设计及分镜脚本生产流程。",
          impact: ["建立完整内容生产框架", "打通创意到脚本落地闭环", "提升内容生产效率", "降低跨团队制作沟通成本"]
        },
        {
          title: "出价优化算法研究",
          background:
            "在科朗研究所开展广告竞价优化研究，目标是在高波动广告环境中提升出价效率与投资回报率，并形成可推广策略。",
          stack: ["Python", "PySpark", "MapReduce", "Bayesian Regression", "Binary Search", "AUC/ROI Monitoring"],
          role:
            "作为研究助理，负责 0.07 亿条广告数据的建模与实验设计，对比逻辑回归、GBDT、SVM 等模型，并建设 ROI 监控与动态出价机制。",
          impact: ["AUC 提升 35%", "日均 ROI 提升 35%", "训练与预测效率显著提升", "最终孵化为可变现智能出价工具"]
        },
        {
          title: "专业数据库问答 AI Chatbot（RAG + Agent）",
          background:
            "联合科朗研究所与凯迪拉克集团构建智能体，在结构化数据库与非结构化知识环境下完成查询理解与决策支持。",
          stack: ["RAG", "Agent Architecture", "Socket Server", "Django Async", "Knowledge Routing", "Multi-turn Orchestration"],
          role:
            "作为项目负责人，主导四阶段架构（查询理解、任务路由、信息检索、响应生成），并完成服务解耦与多轮异步调用能力建设。",
          impact: ["无效检索/生成减少 30%", "幻觉率降低约 40%", "功能扩展开发成本降低 30%", "形成可演进智能体框架"]
        },
        {
          title: "美团产品经理实习：增长与实验体系",
          background:
            "在点评事业部参与用户增长与功能优化，聚焦交互体验提升、数据一致性治理与实验驱动决策。",
          stack: ["PrestoDB", "SQL", "Tableau", "A/B Testing", "Bayesian Updating", "User Profiling"],
          role:
            "负责周报分析、异常定位、画像建模、看板搭建与灰度发布，推动功能迭代与实验策略落地。",
          impact: ["数据一致性与准确性提升 30%", "数据真实性提升 45%", "业务决策效率提升 20%", "点击率提升 15%，埋点有效性提升 30%"]
        },
        {
          title: "迅达（中国）电梯：物联网数据分析实习",
          background:
            "在物联网事业部优化电梯运维与保修数据分析流程，目标是让维保决策从人工统计转向数据驱动。",
          stack: ["SQL", "ETL Pipeline", "Excel (Vlookup/Sumif)", "Linear Regression", "IoT Monitoring"],
          role:
            "构建 SQL + ETL 数据流程，监控 100+ 电梯状态，清洗 2 万条维保记录并建立高风险电梯识别模型。",
          impact: ["数据处理效率提升 30%", "续保率提升 25%", "维护成本降低 15%", "数据利用率提升 25%"]
        }
      ]
    },
    skills: {
      title: "技能",
      categories: [
        {
          name: "Machine Learning",
          items: [
            { label: "逻辑回归 / 随机森林 / GBDT / SVM", level: 90 },
            { label: "聚类分析与效果评估", level: 84 },
            { label: "模型对比与 Benchmark 体系", level: 88 }
          ]
        },
        {
          name: "Big Data",
          items: [
            { label: "Spark / Hadoop / Kafka", level: 87 },
            { label: "ETL Pipeline", level: 90 },
            { label: "SQL / PrestoDB", level: 92 }
          ]
        },
        {
          name: "Product & Analytics",
          items: [
            { label: "用户画像 / 竞品与需求调研", level: 86 },
            { label: "MoSCoW / 灰度发布", level: 84 },
            { label: "A/B 测试设计与评估", level: 90 }
          ]
        },
        {
          name: "Engineering",
          items: [
            { label: "Python (Pandas/Numpy)", level: 90 },
            { label: "Tableau / Power BI", level: 86 },
            { label: "Agile/Scrum / Figma / Lucidchart", level: 80 }
          ]
        }
      ]
    },
    timeline: {
      title: "成长时间线",
      items: [
        {
          period: "2026.03 - 至今 | 腾讯云/飞书",
          title: "AI 产品负责人：BorisForAI 智能机器人部署",
          subtitle: "OpenClaw + 飞书生态",
          summary: "完成机器人系统架构、模型调用链路与飞书集成，打通云端模型能力到真实办公场景的落地闭环。"
        },
        {
          period: "2026.02 - 至今 | 远程/纽约",
          title: "项目经理：《余时者》AI 动画内容项目",
          subtitle: "原创末日科幻动画 IP",
          summary: "统筹 PRD、世界观、分镜提示词体系与动画制作标准，推动 AIGC 与动画流程结合并建设商业化内容基础。"
        },
        {
          period: "2026.01 - 至今 | 线上",
          title: "个人网站：产品化表达与 AIGC 协作开发",
          subtitle: "个人品牌与技术表达平台",
          summary: "从零完成信息架构、前端开发与自动化部署，验证 AI 辅助开发在真实项目中的效率价值。"
        },
        {
          period: "2025.08 - 2026.01 | 纽约",
          title: "项目负责人：AI Chatbot",
          subtitle: "科朗研究所与凯迪拉克集团",
          summary: "建设 RAG + Agent 架构，完成从意图识别到数据库增强回答的闭环，并实现独立服务化部署。"
        },
        {
          period: "2024.01 - 2026.01 | 纽约",
          title: "纽约大学（NYU）信息系统 硕士",
          subtitle: "科朗研究所与斯特恩商学院",
          summary: "课程覆盖算法与数据结构、实时大数据处理、数据库系统设计、机器学习、分布式系统与云计算。"
        },
        {
          period: "2024.01 - 2025.05 | 纽约",
          title: "研究助理：出价优化算法",
          subtitle: "科朗研究所",
          summary: "处理 0.07 亿广告数据并优化竞价策略，实现 AUC 与 ROI 双提升，推动方案真实投放落地。"
        },
        {
          period: "2023.05 - 2023.11 | 上海",
          title: "产品经理实习生",
          subtitle: "美团网络技术（北京）有限公司 点评事业部",
          summary: "推动新功能完成三次迭代并沉淀为长期增长机制，期间 DAU 稳居部门最高。"
        },
        {
          period: "2021.04 - 2021.08 | 西安",
          title: "数据分析实习生",
          subtitle: "迅达（中国）电梯有限公司 物联网事业部",
          summary: "构建 SQL + ETL 流程与风险识别模型，提升数据处理效率并降低维保成本。"
        },
        {
          period: "2019.08 - 2023.05 | 哥伦布",
          title: "俄亥俄州立大学（OSU）信息系统 本科",
          subtitle: "费舍尔商学院",
          summary: "系统学习数据库、计算机网络、操作系统、统计学、DevOps 与机器学习等核心课程。"
        }
      ]
    },
    contact: {
      title: "联系方式",
      subtitle: "正在积极寻找 AI 产品经理 / AI 运营 / AI 工程师机会，欢迎交流。",
      phone: "18629656186",
      wechat: "18629656186",
      email: "2514862224@qq.com",
      linkedin: "https://www.linkedin.com/in/bozhi-wang-340b1424b/?skipRedirect=true",
      github: "https://github.com/KKcoo1320"
    }
  },
  en: {
    nav: {
      hero: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      timeline: "Timeline",
      contact: "Contact"
    },
    hero: {
      name: "Bozhi Wang",
      tagline: "AI Product Manager | AI Operations | AI Engineer",
      jobTargets: ["Target: AI Product Manager", "Target: AI Operations", "Target: AI Engineer"],
      intro: [
        "M.S. in Information Systems at New York University (Courant + Stern), with hybrid strengths in AI, analytics, product strategy, and engineering execution.",
        "Focused on converting frontier AI capability into scalable business systems with measurable outcomes.",
        "Hands-on experience across ad bidding optimization, RAG + Agent chatbot architecture, and experimentation-led growth.",
        "Fluent in English and Japanese, experienced in cross-functional and cross-language collaboration."
      ],
      ctas: {
        projects: "View Projects",
        contact: "Contact Me"
      }
    },
    about: {
      title: "About Me",
      story: [
        "I focus on transforming cutting-edge AI capabilities into real business value as an AI Product Manager.",
        "I make decisions at the intersection of technical feasibility and business necessity, translating ambiguous needs into executable algorithmic tasks.",
        "With strong technical depth in AI toolchains and data workflows, I emphasize feasibility analysis, expectation management, and benchmark design.",
        "I see product and algorithms as allies, building sustainable AI capabilities and competitive moats through rapid iteration.",
        "I stay close to industry frontiers and drive structured execution from experimentation to scaled deployment."
      ]
    },
    projects: {
      title: "Selected Projects",
      items: [
        {
          title: "BorisForAI Intelligent Bot Deployment",
          background:
            "Built an office-ready AI bot based on Tencent Cloud OpenClaw and Feishu ecosystem to validate end-to-end model integration in real collaboration workflows.",
          stack: ["Tencent Cloud OpenClaw", "Feishu Open Platform", "Webhook", "Prompt Engineering", "API Debugging", "Agent Workflow"],
          role:
            "As AI Product Lead, designed system architecture and response flow, implemented Feishu bot integration, and optimized prompt strategy and deployment stability.",
          impact: ["Successfully launched an online AI bot", "Closed loop from user message to model response", "Improved response reliability/readability", "Created reusable deployment playbook"]
        },
        {
          title: "Personal Branding Website (AIGC Co-development)",
          background:
            "Built a structured personal-brand site from scratch to replace resume-style listing with productized storytelling while validating AI productivity in frontend delivery.",
          stack: ["Next.js", "TailwindCSS", "GitHub Pages", "GitHub Actions", "Codex", "SEO Optimization"],
          role:
            "Owned architecture, frontend implementation, and visual direction; shipped responsive layout, automated deployment pipeline, and baseline SEO/performance optimization.",
          impact: ["Launched publicly accessible site", "Established modular and iterable content system", "Higher information delivery efficiency", "About 40% faster page-building workflow"]
        },
        {
          title: "\"Yushizhe\" AI Animation Content Project",
          background:
            "Since Feb 11, 2026, led an original post-apocalyptic sci-fi animation initiative focused on scalable AI-assisted content production.",
          stack: ["ChatGPT", "Seedance 2.0", "AIGC Workflow", "PRD", "Storyboard Pipeline", "Prompt Engineering"],
          role:
            "As project manager, led product planning and project governance, including PRD iterations, worldbuilding, storyboard generation process, and production standards.",
          impact: ["Built full content-production framework", "Closed loop from idea to script delivery", "Improved creation throughput", "Reduced cross-team production overhead"]
        },
        {
          title: "Ad Bidding Optimization Research",
          background:
            "Conducted at NYU Courant to improve bidding efficiency and ROI under volatile ad auction conditions.",
          stack: ["Python", "PySpark", "MapReduce", "Bayesian Regression", "Binary Search", "AUC/ROI Monitoring"],
          role:
            "As Research Assistant, led large-scale modeling on 7 million ad records, benchmarked LR/GBDT/SVM, and built dynamic bidding optimization workflows.",
          impact: ["AUC +35%", "Daily ROI +35%", "Substantial training/inference acceleration", "Commercialized into an intelligent bidding tool"]
        },
        {
          title: "AI Chatbot for Professional Database QA (RAG + Agent)",
          background:
            "Built with NYU Courant and Cadillac Group for complex decision support across structured and unstructured data.",
          stack: ["RAG", "Agent Architecture", "Socket Server", "Django Async", "Knowledge Routing", "Multi-turn Orchestration"],
          role:
            "As project lead, designed a four-stage architecture (intent understanding, routing, retrieval, response generation) and decoupled service deployment.",
          impact: ["Invalid retrieval/generation -30%", "Hallucination rate -40%", "Feature extension cost -30%", "Delivered an evolvable agent architecture"]
        },
        {
          title: "Meituan PM Internship: Growth & Experimentation",
          background:
            "Worked on user growth and feature optimization in the Dianping BU with a strong experimentation-driven product loop.",
          stack: ["PrestoDB", "SQL", "Tableau", "A/B Testing", "Bayesian Updating", "User Profiling"],
          role:
            "Owned analysis reporting, anomaly diagnosis, user profiling, dashboard design, and staged rollout strategy.",
          impact: ["Data consistency/accuracy +30%", "Data authenticity +45%", "Decision efficiency +20%", "CTR +15%, tracking validity +30%"]
        },
        {
          title: "Schindler IoT Data Analytics Internship",
          background:
            "Improved elevator maintenance and warranty analytics process to shift from manual reporting to data-driven operational decisions.",
          stack: ["SQL", "ETL Pipeline", "Excel (Vlookup/Sumif)", "Linear Regression", "IoT Monitoring"],
          role:
            "Built SQL + ETL workflows, monitored 100+ elevators, cleaned 20K maintenance records, and developed high-risk elevator identification model.",
          impact: ["Data processing efficiency +30%", "Renewal rate +25%", "Maintenance cost -15%", "Data utilization +25%"]
        }
      ]
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Machine Learning",
          items: [
            { label: "Logistic Regression / RF / GBDT / SVM", level: 90 },
            { label: "Clustering & Model Evaluation", level: 84 },
            { label: "Benchmark Design", level: 88 }
          ]
        },
        {
          name: "Big Data",
          items: [
            { label: "Spark / Hadoop / Kafka", level: 87 },
            { label: "ETL Pipeline", level: 90 },
            { label: "SQL / PrestoDB", level: 92 }
          ]
        },
        {
          name: "Product & Analytics",
          items: [
            { label: "User Profiling / Requirement Research", level: 86 },
            { label: "MoSCoW / Gradual Rollout", level: 84 },
            { label: "A/B Experiment Design", level: 90 }
          ]
        },
        {
          name: "Engineering",
          items: [
            { label: "Python (Pandas/Numpy)", level: 90 },
            { label: "Tableau / Power BI", level: 86 },
            { label: "Agile/Scrum / Figma / Lucidchart", level: 80 }
          ]
        }
      ]
    },
    timeline: {
      title: "Experience Timeline",
      items: [
        {
          period: "Mar 2026 - Present | Tencent Cloud / Feishu",
          title: "AI Product Lead: BorisForAI Bot Deployment",
          subtitle: "OpenClaw + Feishu Ecosystem",
          summary:
            "Delivered architecture, model invocation pipeline, and bot integration to operationalize AI assistant workflows in real office collaboration scenarios."
        },
        {
          period: "Feb 2026 - Present | Remote/New York",
          title: "Project Manager: \"Yushizhe\" AI Animation Project",
          subtitle: "Original Post-apocalyptic Sci-Fi IP",
          summary:
            "Led PRD iterations, worldbuilding, storyboard prompt standards, and AI-assisted content workflows to build a scalable animation production framework."
        },
        {
          period: "Jan 2026 - Present | Online",
          title: "Personal Website: Productized Narrative + AIGC Co-development",
          subtitle: "Personal Brand & Capability Showcase",
          summary:
            "Designed and built a modular personal site with responsive UI, automated deployment, and AI-assisted development workflow for faster iteration."
        },
        {
          period: "Aug 2025 - Jan 2026 | New York",
          title: "Project Lead: AI Chatbot",
          subtitle: "NYU Courant & Cadillac Group",
          summary: "Delivered an end-to-end RAG + Agent workflow from intent understanding to database-enhanced response generation."
        },
        {
          period: "Jan 2024 - Jan 2026 | New York",
          title: "New York University, M.S. in Information Systems",
          subtitle: "Courant Institute & Stern School of Business",
          summary: "Core training in algorithms, real-time big data, database design, ML, and distributed/cloud systems."
        },
        {
          period: "Jan 2024 - May 2025 | New York",
          title: "Research Assistant: Bid Optimization",
          subtitle: "NYU Courant Institute",
          summary: "Processed 7M ad records and improved both AUC and ROI with scalable optimization workflows."
        },
        {
          period: "May 2023 - Nov 2023 | Shanghai",
          title: "Product Manager Intern",
          subtitle: "Meituan, Dianping Business Unit",
          summary: "Drove 3 feature iterations into long-term growth mechanisms; DAU ranked highest in the department."
        },
        {
          period: "Apr 2021 - Aug 2021 | Xi'an",
          title: "Data Analyst Intern",
          subtitle: "Schindler China, IoT Business Unit",
          summary: "Built SQL + ETL pipelines and risk models for maintenance analytics, improving efficiency and reducing cost."
        },
        {
          period: "Aug 2019 - May 2023 | Columbus",
          title: "The Ohio State University, B.S. in Information Systems",
          subtitle: "Fisher College of Business",
          summary: "Built strong foundations in data systems, networking, OS, statistics, DevOps, and machine learning."
        }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Open to AI Product Manager / AI Operations / AI Engineer opportunities.",
      phone: "+86 186-2965-6186",
      wechat: "+86 186-2965-6186",
      email: "2514862224@qq.com",
      linkedin: "https://linkedin.com/in/your-linkedin",
      github: "https://github.com/your-github"
    }
  }
};
