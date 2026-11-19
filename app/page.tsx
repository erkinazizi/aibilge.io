import AccessForm from "@/components/AccessForm";
import Counter from "@/components/Counter";
import HelixCanvas from "@/components/HelixCanvas";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import SequenceParser from "@/components/SequenceParser";
import {
  IconArrow,
  IconFlask,
  IconLearn,
  IconPredict,
  IconRead,
  IconSwitch,
  IconTarget,
  IconVariant,
  LogoMark,
} from "@/components/icons";

const STEPS = [
  {
    icon: <IconRead />,
    n: "01",
    title: "Read",
    body: "Raw DNA is tokenised into the units the genome actually uses, so the model sees sequence the way a linguist sees text.",
  },
  {
    icon: <IconLearn />,
    n: "02",
    title: "Learn the grammar",
    body: "Self-supervised training across genomes teaches the model regulatory vocabulary, syntax and long-range dependencies, without hand-written rules.",
  },
  {
    icon: <IconPredict />,
    n: "03",
    title: "Predict",
    body: "From sequence alone, the model estimates where genes are regulated, how strongly they are expressed, and what a change in a single letter could do.",
  },
];

const APPLICATIONS = [
  {
    icon: <IconVariant />,
    title: "Variant interpretation",
    body: "Prioritise non-coding variants of uncertain significance by their predicted effect on gene regulation.",
  },
  {
    icon: <IconSwitch />,
    title: "Regulatory discovery",
    body: "Map enhancers, silencers and binding sites to see how cells switch genes on, off and in between.",
  },
  {
    icon: <IconFlask />,
    title: "Sequence design",
    body: "Design regulatory DNA with intended activity for gene therapy and synthetic biology.",
  },
  {
    icon: <IconTarget />,
    title: "Target discovery",
    body: "Connect disease-associated regions to the genes and mechanisms they control.",
  },
];

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <Reveal>
                <p className="eyebrow">
                  <span className="live-dot" aria-hidden="true" />
                  In development · Early access opening soon
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1>
                  Decoding the <span className="grad">grammar</span> of the human genome.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="hero-lead">
                  Aibilge is an AI foundation model that learns the language of DNA. It reads
                  regulatory sequence the way language models read text, to reveal how genes are
                  switched on, off and tuned.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="hero-ctas">
                  <a href="#access" className="btn btn-primary">
                    Request early access <IconArrow />
                  </a>
                  <a href="#grammar" className="btn btn-ghost">
                    See how it reads DNA
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="hero-visual">
              <HelixCanvas />
              <div className="helix-legend mono" aria-hidden="true">
                <span>
                  <i className="k-a" />A
                </span>
                <span>
                  <i className="k-t" />T
                </span>
                <span>
                  <i className="k-g" />G
                </span>
                <span>
                  <i className="k-c" />C
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Problem ---------- */}
        <section className="section" id="problem" aria-labelledby="problem-title">
          <div className="container">
            <Reveal className="section-head">
              <p className="kicker mono">01 · The challenge</p>
              <h2 id="problem-title">We can read every letter. We still can&apos;t read the sentences.</h2>
              <p className="section-lead">
                The human genome has been sequenced, but most of it is not genes. It is the
                regulatory code that decides when, where and how much each gene is used. Most
                disease-linked variants sit in this code, and its rules are still largely unknown.
              </p>
            </Reveal>
            <div className="stats">
              <Reveal className="stat glass" delay={0}>
                <Counter value={3.1} decimals={1} suffix="B" label="3.1 billion" />
                <p>base pairs in a single human genome</p>
              </Reveal>
              <Reveal className="stat glass" delay={90}>
                <Counter value={20000} prefix="~" label="about 20,000" />
                <p>protein-coding genes, a small fraction of the sequence</p>
              </Reveal>
              <Reveal className="stat glass" delay={180}>
                <Counter value={98} prefix="~" suffix="%" label="about 98 percent" />
                <p>of the genome does not code for protein, and much of its function is unresolved</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Grammar ---------- */}
        <section className="section section-alt" id="grammar" aria-labelledby="grammar-title">
          <div className="container split">
            <Reveal className="split-copy">
              <p className="kicker mono">02 · Genome grammar</p>
              <h2 id="grammar-title">DNA has a language. Aibilge learns its rules.</h2>
              <p className="section-lead">
                Short motifs act like words. Their order, spacing and combination act like syntax.
                Together they form instructions that cells read to control every gene.
              </p>
              <ul className="ticks">
                <li>Vocabulary: binding motifs, promoters, splice signals</li>
                <li>Syntax: spacing, orientation and combinations of motifs</li>
                <li>Context: interactions across thousands of base pairs</li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <SequenceParser />
            </Reveal>
          </div>
        </section>

        {/* ---------- Approach ---------- */}
        <section className="section" id="approach" aria-labelledby="approach-title">
          <div className="container">
            <Reveal className="section-head">
              <p className="kicker mono">03 · Approach</p>
              <h2 id="approach-title">From sequence to function, in three steps.</h2>
            </Reveal>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.n}>
                  <Reveal className="step glass" delay={i * 90}>
                    <div className="step-top">
                      <span className="icon-tile">{s.icon}</span>
                      <span className="step-n mono">{s.n}</span>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Applications ---------- */}
        <section className="section section-alt" id="applications" aria-labelledby="apps-title">
          <div className="container">
            <Reveal className="section-head">
              <p className="kicker mono">04 · Applications</p>
              <h2 id="apps-title">Built for the questions genomics can&apos;t yet answer.</h2>
            </Reveal>
            <div className="apps">
              {APPLICATIONS.map((a, i) => (
                <Reveal key={a.title} className="app glass" delay={i * 70}>
                  <span className="icon-tile">{a.icon}</span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="section cta" id="access" aria-labelledby="access-title">
          <div className="container">
            <Reveal className="cta-card glass">
              <div className="cta-copy">
                <p className="kicker mono">Early access</p>
                <h2 id="access-title">Help shape the first model of genome grammar.</h2>
                <p className="section-lead">
                  We&apos;re opening access to a small group of researchers, clinicians and partners.
                  Tell us who you are and we&apos;ll be in touch.
                </p>
              </div>
              <AccessForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#top" className="brand" aria-label="Aibilge, back to top">
            <span className="brand-mark">
              <LogoMark />
            </span>
            Aibilge
          </a>
          <p className="footer-tag">AI for the language of life.</p>
          <nav aria-label="Footer" className="footer-links">
            <a href="mailto:hello@aibilge.io">hello@aibilge.io</a>
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
          </nav>
          <p className="footer-copy">© {new Date().getFullYear()} Aibilge</p>
        </div>
      </footer>
    </>
  );
}
