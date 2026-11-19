import { notFound } from "next/navigation";
import AccessForm from "@/components/AccessForm";
import Counter from "@/components/Counter";
import HelixCanvas from "@/components/HelixCanvas";
import Logo from "@/components/Logo";
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
} from "@/components/icons";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const STEP_ICONS = [<IconRead key="r" />, <IconLearn key="l" />, <IconPredict key="p" />];
const APP_ICONS = [
  <IconVariant key="v" />,
  <IconSwitch key="s" />,
  <IconFlask key="f" />,
  <IconTarget key="t" />,
];

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.nav.skip}
      </a>
      <Nav t={t.nav} lang={lang} />

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <Reveal>
                <p className="eyebrow">
                  <span className="live-dot" aria-hidden="true" />
                  {t.hero.eyebrow}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1>
                  {t.hero.titleBefore}
                  <span className="grad">{t.hero.titleHighlight}</span>
                  {t.hero.titleAfter}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="hero-lead">{t.hero.lead}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="hero-ctas">
                  <a href="#access" className="btn btn-primary">
                    {t.hero.ctaPrimary} <IconArrow />
                  </a>
                  <a href="#grammar" className="btn btn-ghost">
                    {t.hero.ctaSecondary}
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
              <p className="kicker mono">{t.problem.kicker}</p>
              <h2 id="problem-title">{t.problem.title}</h2>
              <p className="section-lead">{t.problem.lead}</p>
            </Reveal>
            <div className="stats">
              {t.problem.stats.map((s, i) => (
                <Reveal key={s.spoken} className="stat glass" delay={i * 90}>
                  <Counter
                    value={s.value}
                    decimals={s.decimals}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    unit={s.unit}
                    label={s.spoken}
                    locale={lang === "tr" ? "tr-TR" : "en-US"}
                  />
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Grammar ---------- */}
        <section className="section section-alt" id="grammar" aria-labelledby="grammar-title">
          <div className="container split">
            <Reveal className="split-copy">
              <p className="kicker mono">{t.grammar.kicker}</p>
              <h2 id="grammar-title">{t.grammar.title}</h2>
              <p className="section-lead">{t.grammar.lead}</p>
              <ul className="ticks">
                {t.grammar.ticks.map((tick) => (
                  <li key={tick}>{tick}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <SequenceParser t={t.parser} />
            </Reveal>
          </div>
        </section>

        {/* ---------- Approach ---------- */}
        <section className="section" id="approach" aria-labelledby="approach-title">
          <div className="container">
            <Reveal className="section-head">
              <p className="kicker mono">{t.approach.kicker}</p>
              <h2 id="approach-title">{t.approach.title}</h2>
            </Reveal>
            <ol className="steps">
              {t.approach.steps.map((s, i) => (
                <li key={s.title}>
                  <Reveal className="step glass" delay={i * 90}>
                    <div className="step-top">
                      <span className="icon-tile">{STEP_ICONS[i]}</span>
                      <span className="step-n mono">{String(i + 1).padStart(2, "0")}</span>
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
              <p className="kicker mono">{t.applications.kicker}</p>
              <h2 id="apps-title">{t.applications.title}</h2>
            </Reveal>
            <div className="apps">
              {t.applications.items.map((a, i) => (
                <Reveal key={a.title} className="app glass" delay={i * 70}>
                  <span className="icon-tile">{APP_ICONS[i]}</span>
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
                <p className="kicker mono">{t.access.kicker}</p>
                <h2 id="access-title">{t.access.title}</h2>
                <p className="section-lead">{t.access.lead}</p>
              </div>
              <AccessForm t={t.access.form} />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#top" className="brand" aria-label={t.footer.backToTop}>
            <Logo size={36} />
          </a>
          <p className="footer-tag">{t.footer.tag}</p>
          <nav aria-label={t.footer.nav} className="footer-links">
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
