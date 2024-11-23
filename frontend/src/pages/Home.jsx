// src/pages/Home.js
// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h2>Welcome to the Mental Health Tracker</h2>
//       <p>This platform helps you keep track of your mental health. Take surveys and tests to assess your well-being.</p>
//       <img src="https://via.placeholder.com/600x400" alt="Mental Health Tracker" />
//     </div>
//   );
// };

// export default Home;


// src/pages/Home.js
import React from "react";
import "../Home.css";

const Home = () => {
  return (
    <div>
      {/* Large Heading at the top */}
      <div className="heading">
        <h1>Welcome to the Mental Health Tracker</h1>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img
          src="health.png" // Replace with the actual URL or path of your image
          alt="Mental Health Tracker"
        />
      </div>

      {/* Introductory Text with a 500-word paragraph */}
      <section className="intro-text">
        <p>
          Mental health is just as important as physical health, and it deserves the same level of attention and care. In today's fast-paced world, many people struggle to balance their work, personal lives, and mental well-being. The Mental Health Tracker is designed to provide individuals with a tool to monitor their mental health, understand their emotional states, and take actionable steps to improve their wellness.
          {/*... rest of the paragraph ...*/}
        </p>
      </section>

      {/* Second Image Section */}
      <section className="two-column-images">
        <div className="image-box">
          <img
            src="pic.jpg"
            alt="Mental Health Insight"
          />
        </div>
        <div className="image-box">
          <img
            src="fresh.png"
            alt="Self Care Tips"
          />
        </div>
      </section>

      {/* New Content Section */}
      <section className="welcome-minder">
        <h2>Welcome to Minder</h2>
        <p className="tagline">A Healthy Mind Is a Wealthy Soul</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Buttons */}
        <div className="buttons">
          <button className="get-started">Get Started</button>
          <button className="contact-us">Contact Us</button>
        </div>

        {/* Statistics Section */}
        <div className="statistics">
          <div className="stat">
            <h3>Years Experience</h3>
            <p>25+</p>
          </div>
          <div className="stat">
            <h3>Active Members</h3>
            <p>7.8K+</p>
          </div>
          <div className="stat">
            <h3>Satisfied Clients</h3>
            <p>99%</p>
          </div>
        </div>
      </section>

      {/* Therapy Services Section */}
      <section className="therapy-services">
        <div className="service-box">
          <div className="service-icon">🧠</div>
          <h3>Cognitive Therapy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctus.</p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="service-box">
          <div className="service-icon">💬</div>
          <h3>Behavioral Therapy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctus.</p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="service-box">
          <div className="service-icon">👨‍👩‍👧‍👦</div>
          <h3>Family Counseling</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctus.</p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="service-box">
          <div className="service-icon">🧘‍♀️</div>
          <h3>Meditation Workshops</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctus.</p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="service-box">
          <div className="service-icon">📱</div>
          <h3>Teletherapy Services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctus.</p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="service-box">
          <div className="service-icon">💬</div>
          <h3>Gestalt Therapy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctus.</p>
          <button className="learn-more">Learn More</button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <h2 className="testimonial-heading">Reviews From Our Clients</h2>
        <p className="testimonial-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p className="client-name">John Doe</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review">"This mental health tracker has really helped me manage my emotions and stay on top of my mental health."</p>
          </div>
          <div className="testimonial-card">
            <p className="client-name">Jane Smith</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review">"A game-changer for my daily routine! Highly recommend it to anyone needing mental clarity."</p>
          </div>
          <div className="testimonial-card">
            <p className="client-name">Mark Johnson</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review">"I love the simplicity and effectiveness of this tracker. It's a must-have for improving overall well-being."</p>
          </div>
          <div className="testimonial-card">
            <p className="client-name">Emily Davis</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review">"This has truly made a difference in my mental health journey. It’s easy to use and insightful."</p>
          </div>
          <div className="testimonial-card">
            <p className="client-name">Alex Brown</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review">"The tracker has helped me stay more aware of my mental state. I feel more balanced and focused."</p>
          </div>
          <div className="testimonial-card">
            <p className="client-name">Sarah White</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review">"A fantastic tool for tracking moods and making positive changes in my life."</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="faq-content">
          <div className="faq-image">
            <img src="faq.png" alt="FAQ" /> {/* Replace with actual image */}
          </div>
          <div className="faq-questions">
            <h3>Frequently Asked Questions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <ul>
              <li>How long has your company been established?</li>
              <li>How much does it cost for one care?</li>
              <li>How many people work at your company?</li>
              <li>Does your company open job vacancies?</li>
              <li>How do I contact Medixo for appointment?</li>
              <li>What kind of contracts do you provide?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    {/* Social Media Icons */}
    <div className="footer-social">
      <a href="#" className="social-icon">
        <img src="facebook-icon.png" alt="Facebook" /> {/* Replace with actual icons */}
      </a>
      <a href="#" className="social-icon">
        <img src="twitter-icon.png" alt="Twitter" /> {/* Replace with actual icons */}
      </a>
      <a href="#" className="social-icon">
        <img src="instagram-icon.png" alt="Instagram" /> {/* Replace with actual icons */}
      </a>
      <a href="#" className="social-icon">
        <img src="youtube-icon.png" alt="YouTube" /> {/* Replace with actual icons */}
      </a>
    </div>

    {/* Explore Links */}
    <div className="footer-links">
      <h4>Explore</h4>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/blogs">Blogs</a></li>
      </ul>
    </div>

    {/* Working Hours & Contact Info */}
    <div className="footer-info">
      <h4>Working Hours</h4>
      <ul>
        <li>Monday - Friday: 07:00 - 23:00</li>
        <li>Saturday: 07:00 - 20:00</li>
        <li>Sunday: 10:00 - 18:00</li>
      </ul>

      <h4>Contact Us</h4>
      <ul>
        <li>Address: 034 Erling Knolls, Lake Kenn, North Dakota 8902</li>
        <li>Phone: +1 (234) 567 890</li>
        <li>Email: example@mail.com</li>
      </ul>
    </div>

    {/* Newsletter Subscription */}
    <div className="newsletter">
      <h4>Subscribe Our Newsletter</h4>
      <input type="email" placeholder="Your email" />
      <button>Subscribe</button>
    </div>
  </div>

  <section className="appointment">
  <div className="appointment-content">
    <h2>Seeking Professional Help Is Not a Weakness</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </p>

    {/* Buttons */}
    <div className="appointment-buttons">
      <button className="get-started">Get Started</button>
      <button className="contact-us">Contact Us</button>
    </div>
  </div>
</section>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <p> 2024 Mental Health Tracker. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default Home;
