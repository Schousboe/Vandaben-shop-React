
import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    {
      id: 1,
      title: "FiveM Scripts",
      description: "Professionelle scripts til din FiveM server",
      price: "Fra 150 DKK",
      icon: "🚗",
      features: ["Custom jobs", "Economy systemer", "Admin tools"]
    },
    {
      id: 2,
      title: "Server Grafik",
      description: "Unique designs og branding til din server",
      price: "Fra 200 DKK",
      icon: "🎨",
      features: ["Logos", "Loading screens", "UI designs"]
    },
    {
      id: 3,
      title: "Discord Bots",
      description: "Avancerede bots til din Discord server",
      price: "Fra 100 DKK",
      icon: "🤖",
      features: ["Moderation", "Economy", "Custom commands"]
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon"><img src="https://react.vandaben.com/React.png"/></span>
            Vandaben Shop
          </div>
          <div className="nav-links">
            <a href="#home" onClick={() => setActiveSection('home')}>Forside</a>
            <a href="#products" onClick={() => setActiveSection('products')}>Produkter</a>
            <a href="#discord" onClick={() => setActiveSection('discord')}>Discord</a>
            <a href="#contact" onClick={() => setActiveSection('contact')}>Kontakt</a>
          </div>
          <button className="login-btn">LOG IND</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Vandaben <span className="gradient-text">Shop</span>
            </h1>
            <p className="hero-subtitle">
              Din destination for premium FiveM scripts, grafik og Discord bots
            </p>
            <div className="hero-buttons">
              <button className="cta-primary">Se Produkter</button>
              <button className="cta-secondary">Kontakt Os</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-header">
                <div className="status-dot online"></div>
                <span>Server Online</span>
              </div>
              <div className="card-content">
                <h3>FiveM Server</h3>
                <p>cfx.re/join/m9j78v</p>
                <div className="player-count">24/64 spillere</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <div className="container">
          <h2 className="section-title">Vores Produkter</h2>
          <p className="section-subtitle">Alt hvad din server har brug for</p>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">{product.price}</div>
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="product-btn">Se Mere</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discord Section */}
      <section className="discord-section" id="discord">
        <div className="container">
          <div className="discord-content">
            <div className="discord-info">
              <h2>Bliv en del af vores community</h2>
              <p>Få de nyeste opdateringer, support og eksklusivt indhold i vores Discord server</p>
              
              <div className="discord-stats">
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Medlemmer</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Daglige</span>
                  <span className="stat-label">Updates</span>
                </div>
              </div>

              <button className="discord-btn">
                <span className="discord-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </span>
                <span className="discord-text">Join Discord</span>
                <div className="discord-glow"></div>
              </button>
            </div>

            <div className="discord-webhook">
              <div className="webhook-header">
                <h3>Live Discord Feed</h3>
                <div className="webhook-status">
                  <div className="status-dot online"></div>
                  Connected
                </div>
              </div>
              <div className="webhook-content">
                <div className="webhook-message">
                  <div className="user-avatar">V</div>
                  <div className="message-content">
                    <div className="message-header">
                      <span className="username">Vandaben</span>
                      <span className="timestamp">i dag kl. 14:30</span>
                    </div>
                    <p>Nyt FiveM script tilgængeligt! 🚀</p>
                  </div>
                </div>
                <div className="webhook-message">
                  <div className="user-avatar">M</div>
                  <div className="message-content">
                    <div className="message-header">
                      <span className="username">Medlem</span>
                      <span className="timestamp">i dag kl. 14:25</span>
                    </div>
                    <p>Fantastisk service! Kan varmt anbefales 👍</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Vandaben Shop</h3>
              <p>Premium FiveM solutions</p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Produkter</h4>
                <a href="#">FiveM Scripts</a>
                <a href="#">Grafik Design</a>
                <a href="#">Discord Bots</a>
              </div>
              <div className="footer-section">
                <h4>Support</h4>
                <a href="#">Kontakt</a>
                <a href="#">Discord</a>
                <a href="#">FAQ</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Vandaben Shop. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
