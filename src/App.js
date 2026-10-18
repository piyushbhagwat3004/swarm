import './App.css';

// ✏️ Edit everything in this block when you give me your project details
const PROJECT = {
  name: 'Swarm',
  tagline: 'Small robots that find their own place and move together.',
  intro:
    'A multi-robot system built from low-cost differential-drive bots. Each robot carries an ArUco marker on top, so an overhead camera can track every position and heading and send commands back over wireless.',
  image: process.env.PUBLIC_URL + '/robots.jpg', // put your photo at public/robots.jpg
  imageAlt: 'Two small wheeled robots with ArUco markers on their top plates',
  github: '#',
  demo: '#',
};

const FEATURES = [
  {
    title: 'Camera-based tracking',
    text: 'ArUco markers give every robot a unique ID, position and orientation from a single overhead camera.',
  },
  {
    title: 'Wireless control',
    text: 'A central controller sends wheel commands to each robot, so the group moves as one.',
  },
  {
    title: 'Built to scale',
    text: 'Cheap perfboard electronics and a shared design make it easy to add more robots to the swarm.',
  },
];

const STACK = ['React', 'OpenCV', 'ArUco markers', 'Microcontroller', 'DC gear motors', 'Wi-Fi / Bluetooth'];

// 5x5 marker-style grid used as the page's visual motif (1 = black cell)
const MARKER = [
  '11111',
  '10010',
  '10101',
  '11001',
  '11111',
];

function Marker() {
  return (
    <div className="marker" aria-hidden="true">
      {MARKER.join('')
        .split('')
        .map((cell, i) => (
          <span key={i} className={cell === '1' ? 'on' : ''} />
        ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="nav">
        <a className="brand" href="#top">
          <Marker />
          <span>{PROJECT.name}</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <h1>{PROJECT.tagline}</h1>
            <p>{PROJECT.intro}</p>
            <div className="actions">
              <a className="btn primary" href={PROJECT.demo}>
                Watch the demo
              </a>
              <a className="btn" href={PROJECT.github}>
                View on GitHub
              </a>
            </div>
          </div>
          <figure className="hero-image">
            <img src={PROJECT.image} alt={PROJECT.imageAlt} />
          </figure>
        </section>

        <section id="about" className="section about">
          <h2>About the project</h2>
          <p>
            Describe the problem you set out to solve, how the robots work, and
            what you learned. Replace this paragraph with your own project
            summary.
          </p>
        </section>

        <section id="features" className="section">
          <h2>What it does</h2>
          <div className="features">
            {FEATURES.map((f) => (
              <article key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section">
          <h2>Built with</h2>
          <ul className="stack">
            {STACK.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="contact" className="footer">
        <Marker />
        <p>Questions or want to collaborate? Add your email here.</p>
      </footer>
    </div>
  );
}

export default App;