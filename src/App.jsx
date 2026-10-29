import React, { useEffect, useState } from 'react'

const projects = [
  {
    index: '01',
    category: '数学建模国赛作品',
    title: '基于生存分析和机器学习的 NIPT 时点选择与女胎异常判定',
    image: '/assets/project-nipt.png',
    tags: ['生存分析', 'LMM', 'RSF', '分类预测'],
    summary:
      '从重复测量数据的预处理出发，以混合效应模型、Kaplan–Meier 生存分析和随机生存森林寻找检测时点，并比较 LR、RF、SVM、MLP 的异常判定表现。',
    metrics: [
      ['分析链路', '预处理 → 时点 → 分类'],
      ['评估指标', 'AUC / F1 / Recall'],
    ],
  },
  {
    index: '02',
    category: '数学建模省赛 / 校赛作品',
    title: '基于多模型融合的吉林省教育事业预测与发展问题研究',
    image: '/assets/project-education.png',
    tags: ['教育预测', 'GM(1,1)', '回归分析', '熵权法'],
    summary:
      '基于 2004–2023 年教育统计数据，预测三个教育阶段未来三年在校生规模，并以熵权法构建教育水平评分，形成经费投入与资源配置建议。',
    metrics: [
      ['数据跨度', '2004 — 2023'],
      ['预测范围', '三阶段 / 未来三年'],
    ],
  },
]

const strengths = [
  {
    number: '01',
    title: '完整的数据闭环',
    text: '能够独立衔接问题拆解、数据清洗、统计建模、结果解释、可视化与报告交付。',
    note: 'Problem → Data → Model → Story',
  },
  {
    number: '02',
    title: '模型不是装饰',
    text: '熟悉回归、LMM、GM(1,1)、RF、SVM、MLP 与聚类，重视模型比较、误差分析和适用边界。',
    note: 'Compare before conclude',
  },
  {
    number: '03',
    title: '经管问题视角',
    text: '将数据能力放进教育、供应链、企业创新与商业分析语境，关注结论如何支持真实决策。',
    note: 'Data with context',
  },
  {
    number: '04',
    title: '清晰表达与交付',
    text: '具备 PPT 排版、报告写作、活动宣讲与团队协调经验，让复杂分析更容易被理解和采用。',
    note: 'Analysis that lands',
  },
]

const experiences = [
  {
    year: '2023 — NOW',
    title: '吉林大学 · 大数据管理与应用',
    text: '机器学习、大数据技术、数据仓库与数据挖掘、Python、Java、R、MySQL、数据可视化、运筹学与经济管理课程。',
  },
  {
    year: 'RESEARCH',
    title: '国家级理论学习研究科研项目',
    text: '围绕新质生产力背景下供应链升级与企业创新绩效，参与研究设计、资料整理、文献梳理与研究分析。',
  },
  {
    year: 'PRACTICE',
    title: '项目实践与组织经验',
    text: '参与长白山 IP 视觉形象设计探索；担任吉林大学 2024 母校行宣传小队队长，负责组织协调、宣讲与实践报告。',
  },
]

function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={diagonal ? 'icon-arrow diagonal' : 'icon-arrow'}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="返回首页">
        <span className="brand-mark">CM</span>
        <span className="brand-copy">
          蔡明洋
          <small>DATA PORTFOLIO</small>
        </span>
      </a>

      <nav className="main-nav" aria-label="主导航">
        <a href="#about">关于</a>
        <a href="#projects">项目</a>
        <a href="#strengths">能力</a>
      </nav>

      <a className="header-contact" href="#contact">
        联系我
        <Arrow diagonal />
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/hero-data-space.png"
        aria-hidden="true"
      >
        <source src="/assets/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-shade" />
      <div className="hero-grid" />

      <div className="hero-content shell">
        <div className="hero-kicker reveal">
          <span className="signal-dot" />
          JILIN UNIVERSITY · BIG DATA MANAGEMENT
        </div>

        <h1 className="hero-title reveal reveal-delay-1">
          把复杂数据，
          <br />
          转译为<span>可行动的判断。</span>
        </h1>

        <div className="hero-bottom reveal reveal-delay-2">
          <p>
            我是蔡明洋，大数据管理与应用专业本科生。
            <br />
            关注数据分析、数学建模与商业问题之间的真实连接。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              查看精选项目
              <Arrow />
            </a>
            <a className="text-link" href="mailto:1398867650@qq.com">
              发送邮件
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-meta">
        <span>BASED IN CHANGCHUN, CN</span>
        <span>OPEN TO DATA / BUSINESS ANALYSIS</span>
        <a href="#about" className="scroll-cue">
          SCROLL TO EXPLORE
          <span />
        </a>
      </div>
    </section>
  )
}

function SectionHeading({ label, title, intro }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{label}</p>
      <div>
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="shell">
        <SectionHeading
          label="01 / PROFILE"
          title={
            <>
              不只完成模型，
              <br />
              更要回答问题。
            </>
          }
          intro="教育背景扎实，兼具数据建模、机器学习、经管问题分析与报告表达能力。"
        />

        <div className="about-grid">
          <div className="portrait-wrap reveal">
            <div className="portrait-frame">
              <img src="/assets/resume-image-000.jpg" alt="蔡明洋个人照片" />
              <span className="portrait-index">CM / 01</span>
            </div>
            <div className="portrait-caption">
              <span>蔡明洋</span>
              <span>吉林大学 · 本科在读</span>
            </div>
          </div>

          <div className="about-content">
            <p className="about-lead reveal">
              我关注的不是把模型堆得更复杂，而是让
              <em>数据处理、模型选择、结果解释与业务建议</em>
              连成一个可信的分析闭环。
            </p>

            <div className="stats reveal">
              <div>
                <strong>02</strong>
                <span>核心建模项目</span>
              </div>
              <div>
                <strong>05</strong>
                <span>竞赛与项目成果</span>
              </div>
              <div>
                <strong>529</strong>
                <span>CET-6 成绩</span>
              </div>
            </div>

            <div className="experience-list">
              {experiences.map((item) => (
                <article className="experience-item reveal" key={item.title}>
                  <span className="experience-year">{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="contact-strip reveal">
              <div>
                <span>EMAIL</span>
                <a href="mailto:1398867650@qq.com">1398867650@qq.com</a>
              </div>
              <div>
                <span>PHONE</span>
                <a href="tel:+8617719815109">177 1981 5109</a>
              </div>
              <div>
                <span>LOCATION</span>
                <p>吉林大学 · 长春</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <div className="project-image">
        <img src={project.image} alt={`${project.title}项目视觉封面`} />
        <div className="project-image-top">
          <span>{project.index}</span>
          <span>FEATURED WORK</span>
        </div>
      </div>
      <div className="project-body">
        <div className="project-copy">
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="project-metrics">
          {project.metrics.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="shell">
        <SectionHeading
          label="02 / SELECTED WORK"
          title="用数据建立证据，"
          intro="两个项目都从真实问题出发，通过多模型比较、稳定性验证与结果解释，完成从数据到建议的完整路径。"
        />
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Strengths() {
  return (
    <section className="section strengths" id="strengths">
      <div className="shell">
        <SectionHeading
          label="03 / CAPABILITIES"
          title={
            <>
              分析能力，
              <br />
              最终要落在交付上。
            </>
          }
          intro="技术、业务与表达并不是三条独立的线。我的优势，是把它们组合成一套可以推进问题的工作方式。"
        />

        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card reveal" key={item.number}>
              <div className="strength-top">
                <span>{item.number}</span>
                <span className="card-line" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <small>{item.note}</small>
            </article>
          ))}
        </div>

        <div className="skill-cloud reveal" aria-label="技能栈">
          {[
            'Python',
            'R',
            'MySQL',
            'Java',
            'C',
            'Machine Learning',
            'Regression',
            'LMM',
            'GM(1,1)',
            'Random Forest',
            'SVM',
            'MLP',
            'Data Visualization',
            'PPT & Report',
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="awards reveal">
          <p className="eyebrow">SELECTED RECOGNITION</p>
          <div className="award-list">
            <div>
              <span>高教社杯全国大学生数学建模竞赛</span>
              <strong>省二等奖 · 校一等奖</strong>
            </div>
            <div>
              <span>国家级大学生创新创业训练计划</span>
              <strong>国家级项目结项</strong>
            </div>
            <div>
              <span>挑战杯“红色专项” / 三创赛 / 学创杯</span>
              <strong>校二等奖</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat('zh-CN', {
          timeZone: 'Asia/Shanghai',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date()),
      )
    }
    update()
    const timer = window.setInterval(update, 30000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <footer className="contact" id="contact">
      <div className="contact-orbit" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="shell contact-inner">
        <div className="contact-top">
          <p className="eyebrow">04 / LET&apos;S CONNECT</p>
          <p>CHANGCHUN · {time || '--:--'} CST</p>
        </div>

        <div className="contact-main reveal">
          <p>如果你正在寻找一位认真、可靠，又愿意把问题追到底的数据伙伴——</p>
          <h2>
            下一份有意义的工作，
            <br />
            可以从这里开始。
          </h2>
          <a className="contact-mail" href="mailto:1398867650@qq.com">
            <span>1398867650@qq.com</span>
            <span className="contact-arrow">
              <Arrow diagonal />
            </span>
          </a>
        </div>

        <div className="contact-footer">
          <div>
            <span>PHONE</span>
            <a href="tel:+8617719815109">+86 177 1981 5109</a>
          </div>
          <div>
            <span>DIRECTION</span>
            <p>数据分析 / 商业分析 / 数据建模</p>
          </div>
          <a className="back-top" href="#top">
            BACK TO TOP
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onMove = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Strengths />
      </main>
      <Contact />
    </>
  )
}

export default App
