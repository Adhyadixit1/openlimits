"use client";

import { useEffect, useMemo, useState } from "react";

type Project = {
  title: string;
  category: "Beauty" | "Food & Drink" | "Lifestyle" | "Pet Care";
  blurb: string;
  metric: string;
  image: string;
  url?: string;
  color: string;
};

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dvtdzotx2/image/upload/f_auto,q_auto,w_1400,c_fill,ar_16:9";

const projects: Project[] = [
  {
    title: "Lilikiwi",
    category: "Beauty",
    blurb: "A playful organic skincare experience made to feel safe for parents and delightful for children.",
    metric: "Shopify storefront",
    image: `${CLOUDINARY_BASE}/open-limits/lilikiwi`,
    url: "https://lilikiwi.fr/en",
    color: "#ffb7db",
  },
  {
    title: "Nerdy Nuts",
    category: "Food & Drink",
    blurb: "Colorful, craveable commerce for a peanut butter brand with a seriously playful personality.",
    metric: "DTC food commerce",
    image: `${CLOUDINARY_BASE}/open-limits/nerdy-nuts`,
    url: "https://nerdynuts.com/",
    color: "#b7ef66",
  },
  {
    title: "Bearaby",
    category: "Lifestyle",
    blurb: "Soft editorial storytelling and effortless shopping for beautifully designed weighted blankets.",
    metric: "Shopify Plus",
    image: `${CLOUDINARY_BASE}/open-limits/bearaby`,
    url: "https://bearaby.com/",
    color: "#8bdcff",
  },
  {
    title: "Nutragenis",
    category: "Lifestyle",
    blurb: "A confident wellness platform that makes personalized nutrition feel clear, credible and actionable.",
    metric: "Wellness commerce",
    image: `${CLOUDINARY_BASE}/open-limits/nutragenis`,
    url: "https://nutragenis.com/",
    color: "#ffdd55",
  },
  {
    title: "Baby Learns Language",
    category: "Lifestyle",
    blurb: "Friendly educational commerce that turns language learning into a joyful family ritual.",
    metric: "Learning-led retail",
    image: `${CLOUDINARY_BASE}/open-limits/baby-learns-language`,
    url: "https://babylearnslanguage.com/",
    color: "#c8b5ff",
  },
  {
    title: "Hamel's Treats",
    category: "Pet Care",
    blurb: "Wholesome product storytelling for single-ingredient treats made for very happy dogs.",
    metric: "Pet food commerce",
    image: `${CLOUDINARY_BASE}/open-limits/hamels-treats-v2`,
    url: "https://hamelstreats.com/",
    color: "#ff9068",
  },
  {
    title: "Emani",
    category: "Beauty",
    blurb: "A polished beauty destination balancing clinical confidence with modern, inclusive glamour.",
    metric: "Beauty e-commerce",
    image: `${CLOUDINARY_BASE}/open-limits/emani`,
    url: "https://emani.com/",
    color: "#64e6c0",
  },
  {
    title: "Crav Burgers",
    category: "Food & Drink",
    blurb: "A bold, appetite-first experience with the energy of a cult neighborhood burger spot.",
    metric: "Hospitality website",
    image: `${CLOUDINARY_BASE}/open-limits/crav-burgers`,
    url: "https://www.cravburgers.shop/",
    color: "#ffb7db",
  },
  {
    title: "Vol Dog Food",
    category: "Pet Care",
    blurb: "High-energy pet nutrition commerce built around fresh food, expert guidance and character.",
    metric: "Interactive commerce",
    image: `${CLOUDINARY_BASE}/open-limits/vol-dog-food`,
    url: "https://www.voldogfood.com/",
    color: "#b7ef66",
  },
  {
    title: "Happy Pet",
    category: "Pet Care",
    blurb: "A minimal product story that makes smarter pet parenting feel simple and immediately useful.",
    metric: "Digital product launch",
    image: `${CLOUDINARY_BASE}/open-limits/happy-pet`,
    url: "https://happypet.care/",
    color: "#8bdcff",
  },
  {
    title: "Manitobah",
    category: "Lifestyle",
    blurb: "Story-rich commerce celebrating Indigenous design, craft and a global footwear community.",
    metric: "Shopify Plus",
    image: `${CLOUDINARY_BASE}/open-limits/manitobah`,
    url: "https://www.manitobah.com/",
    color: "#ffdd55",
  },
  {
    title: "Seerov",
    category: "Lifestyle",
    blurb: "A confident, editorial wellness experience built around intention, curiosity and personal freedom.",
    metric: "Wellness commerce",
    image: `${CLOUDINARY_BASE}/open-limits/seerov`,
    url: "https://seerov.com/",
    color: "#ffb7db",
  },
  {
    title: "Sherclan",
    category: "Lifestyle",
    blurb: "Quiet luxury and refined product storytelling for a contemporary Australian jewellery brand.",
    metric: "Luxury e-commerce",
    image: `${CLOUDINARY_BASE}/open-limits/sherclan`,
    url: "https://www.sherclan.com.au/",
    color: "#8bdcff",
  },
  {
    title: "Tato Pow",
    category: "Food & Drink",
    blurb: "A flavor-packed storefront with bold type, tactile product imagery and serious snack energy.",
    metric: "DTC food commerce",
    image: `${CLOUDINARY_BASE}/open-limits/tatopow`,
    url: "https://tatopow.com/",
    color: "#ff9068",
  },
  {
    title: "Articles of Style",
    category: "Lifestyle",
    blurb: "Premium menswear and bespoke wardrobe expertise translated into a polished consultation journey.",
    metric: "Luxury menswear",
    image: `${CLOUDINARY_BASE}/open-limits/articles-of-style`,
    url: "https://articlesofstyle.com/",
    color: "#c8b5ff",
  },
];

const reviews = [
  {
    quote:
      "Open Limits made the whole business feel more premium. The new experience is clearer, faster and finally feels like us.",
    name: "DTC beauty founder",
    result: "+71% conversion",
  },
  {
    quote:
      "They understood the commercial goal immediately. Every design decision had a reason—and the launch was genuinely smooth.",
    name: "Fashion brand director",
    result: "Launch in 5 weeks",
  },
  {
    quote:
      "Our customers noticed the difference on day one. The team found the balance between editorial and effortless shopping.",
    name: "Homeware co-founder",
    result: "+39% AOV",
  },
  {
    quote:
      "Fast, direct and unusually thoughtful. Open Limits felt less like a vendor and more like our in-house growth team.",
    name: "Wellness operator",
    result: "3.2× ROAS",
  },
];

const services = [
  ["01", "Shopify design", "High-converting storefronts with a point of view."],
  ["02", "Shopify development", "Fast, flexible builds your team can actually run."],
  ["03", "Brand systems", "A memorable identity that works from feed to checkout."],
  ["04", "Conversion growth", "Sharper journeys, smarter experiments, stronger numbers."],
];

function SectionWave({
  from,
  to,
  flip = false,
}: {
  from: string;
  to: string;
  flip?: boolean;
}) {
  return (
    <svg
      className={`section-wave ${flip ? "section-wave--flip" : ""}`}
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ background: from }}
    >
      <path
        d="M0,34 C180,112 328,112 472,62 C650,0 778,4 946,69 C1111,132 1269,115 1440,48 L1440,140 L0,140 Z"
        fill={to}
      />
    </svg>
  );
}

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span className={diagonal ? "arrow arrow--diagonal" : "arrow"} aria-hidden="true">
      →
    </span>
  );
}

export default function Home() {
  const [filter, setFilter] = useState<"All" | Project["category"]>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  useEffect(() => {
    const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
    const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;
    if (!propertyId || !widgetId || document.getElementById("tawk-script")) return;

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.crossOrigin = "*";
    document.head.appendChild(script);
  }, []);

  const openChat = () => {
    const chatWindow = window as typeof window & {
      Tawk_API?: { maximize?: () => void };
    };
    if (chatWindow.Tawk_API?.maximize) {
      chatWindow.Tawk_API.maximize();
      return;
    }
    window.location.href =
      "mailto:hello@openlimits.agency?subject=New%20website%20project&body=Hi%20Open%20Limits%2C%20I%27d%20like%20to%20talk%20about...";
  };

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Open Limits home">
          <Mark />
          <span>OPEN LIMITS</span>
        </a>
        <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#proof" onClick={() => setMenuOpen(false)}>Reviews</a>
          <button className="nav-cta" onClick={openChat}>
            Start a project <Arrow diagonal />
          </button>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            Shopify design studio · Worldwide
          </div>
          <h1>
            Websites that
            <span className="hero-script">refuse to blend in.</span>
          </h1>
          <p className="hero-lede">
            Open Limits builds culture-shifting Shopify experiences for ambitious
            brands ready to look bigger, move faster and sell more.
          </p>
          <div className="hero-actions">
            <a className="button button--dark" href="#work">
              See selected work <Arrow />
            </a>
            <button className="text-link" onClick={openChat}>
              Tell us what you&apos;re building <Arrow diagonal />
            </button>
          </div>
        </div>
        <div className="award-stack" aria-label="Best Shopify website awards">
          <div className="award award--2023">
            <span>AWARDED</span>
            <strong>2023</strong>
            <small>BEST WEBSITE</small>
          </div>
          <div className="award award--2024">
            <span>AWARDED</span>
            <strong>2024</strong>
            <small>BEST WEBSITE</small>
          </div>
          <div className="award award--2025">
            <span>AWARDED</span>
            <strong>2025</strong>
            <small>BEST WEBSITE</small>
          </div>
        </div>
        <div className="hero-sticker">SHOPIFY<br />AGENCY<br />OF THE YEAR</div>
      </section>

      <div className="ticker" aria-label="Open Limits capabilities">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, repeat) => (
            <span key={repeat}>
              STRATEGY <b>✦</b> DESIGN <b>✦</b> DEVELOPMENT <b>✦</b> CONVERSION{" "}
              <b>✦</b> SHOPIFY PLUS <b>✦</b>{" "}
            </span>
          ))}
        </div>
      </div>

      <SectionWave from="#f6f2ea" to="#111111" />

      <section className="work-section" id="work">
        <div className="section-intro">
          <div>
            <p className="kicker kicker--light">SELECTED WORK · 2023—2025</p>
            <h2>Built to be seen.<br />Designed to perform.</h2>
          </div>
          <p>
            First impressions matter. Explore the work, scan the results and visit
            any live experience that catches your eye.
          </p>
        </div>

        <div className="filters" role="group" aria-label="Filter projects">
          {(["All", "Beauty", "Food & Drink", "Lifestyle", "Pet Care"] as const).map((item) => (
            <button
              key={item}
              className={filter === item ? "filter filter--active" : "filter"}
              onClick={() => setFilter(item)}
            >
              {item}
              <sup>{item === "All" ? projects.length : projects.filter((p) => p.category === item).length}</sup>
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-media" style={{ background: project.color }}>
                {!brokenImages[project.title] ? (
                  <img
                    src={project.image}
                    alt={`${project.title} website screenshot`}
                    loading={index < 2 ? "eager" : "lazy"}
                    onError={() =>
                      setBrokenImages((state) => ({ ...state, [project.title]: true }))
                    }
                  />
                ) : (
                  <div className="project-placeholder">
                    <span className="mock-nav" />
                    <div className="mock-copy">
                      <small>OPEN LIMITS / {String(index + 1).padStart(2, "0")}</small>
                      <strong>{project.title}</strong>
                      <i />
                      <i />
                    </div>
                    <div className="mock-window">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}
                <div className="browser-bar">
                  <span />
                  <span />
                  <span />
                  <small>openlimits / work / {String(index + 1).padStart(2, "0")}</small>
                </div>
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="project-details">
                <div>
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <span>{project.blurb}</span>
                </div>
                <div className="project-result">
                  <strong>{project.metric}</strong>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noreferrer">
                      Visit website <Arrow diagonal />
                    </a>
                  ) : (
                    <span className="pending-link">Live link coming soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SectionWave from="#111111" to="#b7ef66" flip />

      <section className="manifesto">
        <div className="manifesto-label">OUR POINT OF VIEW</div>
        <p>
          The internet has enough <span>fine.</span>
          <br />
          We make brands people <em>feel.</em>
        </p>
        <div className="manifesto-note">
          Distinctive by design. Commercial by nature. Built without the agency fog.
        </div>
      </section>

      <SectionWave from="#b7ef66" to="#f6f2ea" />

      <section className="services-section" id="services">
        <div className="services-head">
          <div>
            <p className="kicker">WHAT WE DO</p>
            <h2>One sharp team.<br />Every digital move.</h2>
          </div>
          <p>
            Strategy, design and development sit at the same table here. Less
            translation. Better ideas. Faster momentum.
          </p>
        </div>
        <div className="services-list">
          {services.map(([number, title, description]) => (
            <div className="service-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <Arrow diagonal />
            </div>
          ))}
        </div>
        <div className="process-strip">
          <span>01 DISCOVER</span><b>→</b>
          <span>02 DEFINE</span><b>→</b>
          <span>03 DESIGN</span><b>→</b>
          <span>04 DELIVER</span>
        </div>
      </section>

      <SectionWave from="#f6f2ea" to="#6b4eff" flip />

      <section className="proof-section" id="proof">
        <div className="proof-head">
          <p className="kicker kicker--light">THE RECEIPTS</p>
          <h2>Big love.<br />Bigger results.</h2>
          <div className="proof-score">
            <strong>4.9</strong>
            <span>★★★★★<small>Across client reviews</small></span>
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <blockquote key={review.name}>
              <div className="quote-mark">“</div>
              <p>{review.quote}</p>
              <footer>
                <span>{review.name}</span>
                <strong>{review.result}</strong>
              </footer>
              <small>0{index + 1}</small>
            </blockquote>
          ))}
        </div>
        <div className="trust-row">
          <span>SHOPIFY PLUS</span>
          <span>KLAVIYO</span>
          <span>GROWTH PARTNER</span>
          <span>GLOBAL DELIVERY</span>
          <span>60+ LAUNCHES</span>
        </div>
      </section>

      <SectionWave from="#6b4eff" to="#ffb7db" />

      <section className="cta-section">
        <div className="cta-badge">NOW BOOKING<br />Q3 / Q4</div>
        <p>Have a brand with somewhere to go?</p>
        <h2>Let&apos;s make it<br /><em>impossible to ignore.</em></h2>
        <button className="button button--dark button--large" onClick={openChat}>
          Start your project <Arrow />
        </button>
        <div className="cta-small">Typical reply time: under 2 hours</div>
      </section>

      <SectionWave from="#ffb7db" to="#111111" flip />

      <footer className="footer">
        <div className="footer-top">
          <a className="logo logo--footer" href="#top">
            <Mark />
            <span>OPEN LIMITS</span>
          </a>
          <p>Shopify experiences for brands<br />with no interest in average.</p>
          <div className="footer-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#proof">Reviews</a>
            <button onClick={openChat}>Email us</button>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">IG ↗</a>
            <a href="#" aria-label="Behance">BE ↗</a>
            <a href="#" aria-label="LinkedIn">LI ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} OPEN LIMITS</span>
          <span>INDIA · WORKING WORLDWIDE</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>

      <button className="chat-launcher" onClick={openChat} aria-label="Chat with Open Limits">
        <span className="chat-pulse" />
        <span>Let&apos;s talk</span>
        <b>↗</b>
      </button>
    </main>
  );
}
