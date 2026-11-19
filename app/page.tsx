import type { CSSProperties } from "react";
import Background from "@/components/Background";
import Gears from "@/components/Gears";
import LaunchProgress from "@/components/LaunchProgress";
import NotifyForm from "@/components/NotifyForm";

// Order in which each block fades in on load.
const step = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Home() {
  return (
    <>
      <Background />

      <div className="wrap">
        <header className="reveal" style={step(0)}>
          <div className="logo">
            <div className="logo-mark">✦</div>
            Aibilge
          </div>
          <div className="status">
            <span className="dot" />
            <span className="text">Building in progress</span>
          </div>
        </header>

        <main>
          <div className="icon reveal" style={step(1)} aria-hidden="true">
            <Gears />
          </div>

          <div className="badge reveal" style={step(2)}>
            🚧 Under construction
          </div>

          <h1 className="reveal" style={step(3)}>
            Something <span className="grad">smart</span>
            <br />
            is coming soon.
          </h1>

          <p className="lead reveal" style={step(4)}>
            We&apos;re putting the finishing touches on Aibilge. Leave your email
            and we&apos;ll let you know the moment we launch.
          </p>

          <div className="reveal" style={step(5)}>
            <LaunchProgress target={72} />
          </div>

          <div className="reveal" style={step(6)}>
            <NotifyForm />
          </div>
        </main>

        <footer className="reveal" style={step(7)}>
          <span>© {new Date().getFullYear()} Aibilge</span>
          <nav className="socials">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="mailto:hello@example.com">Contact</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
