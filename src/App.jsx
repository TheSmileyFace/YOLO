import React, { useEffect, useState } from 'react';
import { Rocket, Music, Twitter, Send, ExternalLink, ChevronDown } from 'lucide-react';
import './App.css'; // We'll keep this empty or minimal

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">YOLO</div>
          <div className="nav-links">
            <a href="#moon">Moon</a>
            <a href="#chill">Chill</a>
            <a href="#community">Community</a>
            <button className="btn-nav">Buy $YOLO</button>
          </div>
        </div>
      </nav>

      <HeroSection />
      <ChillSection />
      <Footer />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section id="moon" className="hero-section">
      <div className="bg-glow" style={{ top: '-10%', left: '-10%', background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)' }}></div>
      <div className="bg-glow" style={{ bottom: '10%', right: '-10%', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}></div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            TO THE <br />
            <span className="text-gradient">MOON</span> 🚀
          </h1>
          <p className="hero-subtitle">
            The only meme coin that guarantees* a one-way ticket to the lunar surface.
            Strap in, hold on, and don't look back.
          </p>
          <div className="hero-buttons">
            <a href="https://pump.fun/coin/2LkVadXoNgk1y3tHRvzebRukagHXnN7qgs9WeYEtdtPt" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Rocket className="icon" size={20} /> View Coin
            </a>
            <button className="btn-secondary">
              <ExternalLink className="icon" size={20} /> View Chart
            </button>
          </div>
        </div>

        <div className="hero-image animate-float">
          <img src="/yolo-moon.png" alt="YOLO Character riding a rocket" />
        </div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown size={32} className="animate-bounce" />
      </div>
    </section>
  );
};

const ChillSection = () => {
  return (
    <section id="chill" className="chill-section">
      <div className="container chill-content">
        <div className="chill-image">
          <img src="/yolo-chill.png" alt="YOLO Character chilling on the moon" />
        </div>

        <div className="chill-text glass-panel">
          <h2>Just <span className="text-gradient" style={{ '--color-primary': '#00d4ff', '--color-accent': '#9d4edd' }}>Vibing</span></h2>
          <p>
            When we're not pumping, we're dumping... our stress.
            Join the most relaxed community in DeFi. We HODL, we chill, we repeat.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <Music size={24} color="#00d4ff" />
              <span>Lo-Fi Beats 24/7</span>
            </div>
            <div className="feature-item">
              <div className="emoji">🍹</div>
              <span>Liquidity Locked</span>
            </div>
            <div className="feature-item">
              <div className="emoji">🕶️</div>
              <span>Based Devs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="community" className="footer">
      <div className="container footer-content">
        <div className="footer-logo">YOLO</div>
        <div className="social-links">
          <a href="https://x.com/i/communities/1994577905771540895" target="_blank" rel="noopener noreferrer" className="social-icon"><Twitter size={24} /></a>
          <a href="#" className="social-icon"><Send size={24} /></a>
        </div>
        <div className="footer-info">
          <p className="copyright">© 2025 YOLO Coin. All rights reserved. Not financial advice.</p>
          <p className="credits">
            Made by <a href="https://www.pigeon0931.xyz/" target="_blank" rel="noopener noreferrer" className="credit-link">pigeon0931</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;
