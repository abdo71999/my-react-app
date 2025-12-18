import { useMemo, useState } from "react";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function formatTime(d: Date) {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
}

export default function App() {
  const [name, setName] = useState("Abdo");
  const now = useMemo(() => new Date(), []);

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <div className="brand__logo" aria-hidden="true">
            R
          </div>
          <div className="brand__text">
            <div className="brand__title">My First React App</div>
            <div className="brand__subtitle">Built with Vite + React + TypeScript</div>
          </div>
        </div>
        <a
          className="link"
          href="https://react.dev/learn"
          target="_blank"
          rel="noreferrer"
        >
          Learn React
        </a>
      </header>

      <main className="content">
        <section className="card">
          <h1 className="h1">Welcome, {name}.</h1>
          <p className="muted">
            This project was generated in your folder and is ready to run. Edit{" "}
            <code>src/App.tsx</code> to see changes instantly.
          </p>

          <div className="grid">
            <div className="field">
              <label className="label" htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name…"
                autoComplete="off"
              />
            </div>

            <div className="stat">
              <div className="stat__label">Created at</div>
              <div className="stat__value">{formatTime(now)}</div>
              <div className="stat__hint">Local time when the page first loaded</div>
            </div>
          </div>

          <div className="actions">
            <a className="btn btn--primary" href="https://vite.dev/guide/" target="_blank" rel="noreferrer">
              Vite Guide
            </a>
            <a className="btn btn--ghost" href="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer">
              TypeScript Docs
            </a>
          </div>
        </section>

        <section className="card card--mini">
          <h2 className="h2">Next tiny steps</h2>
          <ol className="list">
            <li>Change the title text in <code>src/App.tsx</code>.</li>
            <li>Add a new component in <code>src/components/</code>.</li>
            <li>Try fetching data from an API.</li>
          </ol>
        </section>
      </main>

      <footer className="footer">
        <span className="muted">Tip: press</span> <kbd>Ctrl</kbd> + <kbd>C</kbd>{" "}
        <span className="muted">to stop the dev server.</span>
      </footer>
    </div>
  );
}


