import innerLeavesLogo from "./assets/inner-leaves-logo.png";import { useState } from "react";
import "./App.css";
import drKavithaPhoto from "./assets/dr-kavitha.png";

function App() {
  const whatsappNumber = "918138814980";
  const instagramUrl = "https://www.instagram.com/theinnerleaves/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Individual Counselling",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello Inner Leaves, I would like to enquire about a session.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Message: ${form.message || "Not provided"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setForm({
      name: "",
      phone: "",
      service: "Individual Counselling",
      message: "",
    });
  };

const closeMenu = () => setMenuOpen(false);

return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
           <img
            className="brand-logo"
            src={innerLeavesLogo}
            alt="Inner Leaves logo"
            />

          <span>
            <strong>inner leaves</strong>
            <small>PSYCHOLOGY & WELLBEING</small>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#approach" onClick={closeMenu}>My Approach</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Book a Session <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-padding" id="home">
          <div className="hero-copy">
            <span className="eyebrow">A SPACE TO PAUSE, REFLECT & GROW</span>
            <h1>
              Your journey inward is where <em>growth begins.</em>
            </h1>
            <p>
              A gentle, supportive space to understand yourself, navigate
              life's challenges, and move towards a more balanced you.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#contact">
                Begin Your Journey <span>↗</span>
              </a>
              <a className="text-link" href="#about">
                Get to know me <span>→</span>
              </a>
            </div>

            <div className="hero-note">
              <span>♡</span>
              A little space for you, just as you are.
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85"
              alt="Soft morning sunlight over a peaceful green landscape"
            />
            <div className="image-caption">
              <span>01 / YOUR SPACE</span>
              <p>Slow down. Breathe. Begin again.</p>
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <span>grow</span>
              <strong>gently</strong>
              <span>♡</span>
            </div>
          </div>
        </section>

        <section className="values-strip">
          <div><span>✳</span> A judgment-free space</div>
          <div><span>✳</span> Compassion-led support</div>
          <div><span>✳</span> Growth at your own pace</div>
        </section>

        <section className="about-section section-padding" id="about">
         

          <div className="about-content">
          <div className="about-photo">
              <img
            src={drKavithaPhoto}
              alt="Dr. Kavitha G Bhaskaran"
             />
  </div>
            <div className="about-heading">
              <span className="eyebrow">HELLO, I'M GLAD YOU'RE HERE</span>
              <h2>
                You deserve a space where you can <em>just be.</em>
              </h2>
            </div>
            
<div className="about-copy">
  <h3>Dr. Kavitha G Bhaskaran</h3>
  <p className="professional-qualifications">
    MSc and PhD in Applied Psychology
  </p>
  <p>
    I believe every person deserves to be heard, understood, and
    supported with compassion and without judgment.
  </p>
  <p>
    Inner Leaves is a space to pause, explore your experiences,
    and take meaningful steps towards greater self-understanding
    and emotional wellbeing.
  </p>
  <a className="text-link" href="#approach">
    Learn about my approach <span>→</span>
  </a>
</div>


            <div className="about-copy">
              <p>
                Hello, I'm your psychologist. I believe that every person
                deserves to be heard, understood, and supported without
                judgment.
              </p>
              <p>
                This is a space where we can slow down, explore what you're
                experiencing, and take small, meaningful steps towards
                understanding yourself better.
              </p>
              <a className="text-link" href="#approach">
                Learn about my approach <span>→</span>
              </a>
            </div>
          </div>

          <div className="about-note">
            <span>“</span>
            <p>
              You don't have to have everything figured out to take the
              first step.
            </p>
          </div>
        </section>

        <section className="services-section section-padding" id="services">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HOW I CAN SUPPORT YOU</span>
              <h2>Room for what <em>you're feeling.</em></h2>
            </div>
            <p>
              Every person's journey is different. We can begin with what
              feels important to you right now.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <span className="service-number">01</span>
              <div className="service-icon" aria-hidden="true">♡</div>
              <h3>Individual Counselling</h3>
              <p>
                A confidential, supportive space to explore personal
                challenges, feelings, and experiences.
              </p>
              <a href="#contact" aria-label="Enquire about individual counselling">
                Enquire <span>↗</span>
              </a>
            </article>

            <article className="service-card">
              <span className="service-number">02</span>
              <div className="service-icon" aria-hidden="true">✳</div>
              <h3>Emotional Wellbeing</h3>
              <p>
                Understand your emotions, recognise patterns, and build
                healthier ways to navigate everyday life.
              </p>
              <a href="#contact" aria-label="Enquire about emotional wellbeing">
                Enquire <span>↗</span>
              </a>
            </article>

            <article className="service-card">
              <span className="service-number">03</span>
              <div className="service-icon" aria-hidden="true">❋</div>
              <h3>Personal Growth</h3>
              <p>
                Explore self-awareness, confidence, boundaries, and the
                changes you want to make at your own pace.
              </p>
              <a href="#contact" aria-label="Enquire about personal growth">
                Enquire <span>↗</span>
              </a>
            </article>
          </div>
        </section>

        <section className="approach-section section-padding" id="approach">
          <div className="approach-intro">
            <span className="eyebrow">A GENTLER WAY FORWARD</span>
            <h2>
              No pressure to be perfect. <em>Just space to grow.</em>
            </h2>
            <p>
              Your experiences matter. Our conversations begin with listening
              and move forward with care, respect, and collaboration.
            </p>
            <a className="button-primary" href="#contact">
              Let's Talk <span>↗</span>
            </a>
          </div>

          <div className="approach-pillars">
            <div><span>01</span><strong>Listen without judgment</strong></div>
            <div><span>02</span><strong>Understand with compassion</strong></div>
            <div><span>03</span><strong>Grow at your own pace</strong></div>
          </div>
        </section>

        <section className="contact-section section-padding" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">YOUR NEXT CHAPTER</span>
            <h2>
              Taking the first step can feel big. <em>Let's make it gentle.</em>
            </h2>
            <p>
              Have a question or want to enquire about a session? Send a
              message. You don't need to have the perfect words.
            </p>
            <div className="contact-promise">
              <span>♡</span>
              Your journey begins with a conversation.
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="Visit Inner Leaves on Instagram"
            >

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="url(#instagramGradient)"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <defs>
    <linearGradient
      id="instagramGradient"
      x1="3"
      y1="21"
      x2="21"
      y2="3"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0%" stopColor="#feda75" />
      <stop offset="30%" stopColor="#fa7e1e" />
      <stop offset="60%" stopColor="#d62976" />
      <stop offset="80%" stopColor="#962fbf" />
      <stop offset="100%" stopColor="#4f5bd5" />
    </linearGradient>
  </defs>
  <rect x="3" y="3" width="18" height="18" rx="5" />
  <circle cx="12" cy="12" r="4" />
  <circle
    cx="17.5"
    cy="6.5"
    r="0.8"
    fill="#d62976"
    stroke="none"
  />
</svg>

              <span>Follow us on Instagram</span>
            </a>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Let's start with hello.</h3>
            <p>Fill in the details below to send an enquiry.</p>

            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What should I call you?"
              autoComplete="name"
              required
            />

            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your contact number"
              autoComplete="tel"
              required
            />

            <label htmlFor="service">What would you like support with?</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option>Individual Counselling</option>
              <option>Emotional Wellbeing</option>
              <option>Personal Growth</option>
              <option>General Enquiry</option>
            </select>

            <label htmlFor="message">Anything you'd like to share? (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="You can keep this brief. Please avoid sharing sensitive details."
              rows={3}
            />

            <button className="button-primary form-submit" type="submit">
              Send enquiry via WhatsApp <span>↗</span>
            </button>

            <small className="privacy-note">
              This opens WhatsApp with your message for you to review before
              sending. Avoid including sensitive personal or medical
              information in this form.
            </small>
          </form>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
         <img
  className="brand-logo"
  src={innerLeavesLogo}
  alt="Inner Leaves logo"
/>
          <span>
            <strong>inner leaves</strong>
            <small>PSYCHOLOGY & WELLBEING</small>
          </span>
        </a>
        <p>A gentle space for growth, understanding, and self-discovery.</p>
        <a href="#home" className="back-to-top">Back to top ↑</a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Inner Leaves</span>
          <span>Every journey begins within.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
