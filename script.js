document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  root.innerHTML = `
    <nav class="navbar">
      <div class="container">
        <a href="/" class="logo">Nhancio</a>
        <ul class="nav-links">
          <li><a href="#workshops">Workshops</a></li>
          <li><a href="#ai-tools">AI Tool of the Day</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#media">Media</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li><a href="#my-account">My Account</a></li>
        </ul>
      </div>
    </nav>

    <section id="home" class="hero">
      <div class="container">
        <h1>Boost Your Skills with our AI Workshop</h1>
        <p>Create any kind of presentable reports under 10 seconds and combine data from over 30 sources using the power of automation.</p>
        <button id="register-btn" class="btn">Register Now</button>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Why Choose Us?</h2>
        <div class="feature-card">
          <p>Nhancio is among top-rated ed-tech companies providing Online Workshops with Certificates to working professionals.</p>
          <p>Starting from Artificial Intelligence Online Courses for beginners, we have expanded our array to MS Excel Workshops, Power BI workshops, and MS PowerPoint Workshops.</p>
          <ul>
            <li>100k+ Professionals Enrolled in our Workshops</li>
            <li>Learn from IIT Kharagpur Alumni</li>
            <li>Get Workshop Participation Certificate</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="workshops">
      <div class="container">
        <h2>Our Workshops</h2>
        <div class="workshop-card">
          <h3>AI Tools Workshop</h3>
          <p>Be among the top 1% professionals to avoid being laid off. Earn money with Artificial Intelligence seamlessly.</p>
          <p>No technical AI knowledge required to master AI tools. Learn ChatGPT and other AI tools from scratch.</p>
          <p>Proven to reduce your work by 2 hours daily. With the help of Generative AI tools, you will be able to work more in less time.</p>
          <p>Learn to code using AI with Zero technical knowledge. With the help of OpenAI & ChatGPT courses, you will be able to code within minutes effortlessly.</p>
          <button id="register-btn" class="btn">Register Now</button>
        </div>
      </div>
    </section>

    <section id="media" class="media">
      <div class="container">
        <h2>Media</h2>
        <h3>YouTube Video</h3>
        <iframe width="560" height="996" src="https://www.youtube.com/embed/lZxJpPHaUYs" title="Introduction to Nhancio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3>YouTube Channel</h3>
        <p>Check out our YouTube channel for more content: <a href="https://www.youtube.com/@nhancioai" target="_blank">Nhancio AI</a></p>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
              <h4>Company Logo</h4>
              <p>&copy; 2025 Nhancio, Inc. All rights reserved.</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about-us">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact-us">Contact</a></li>
              <li><a href="#blogs">Blogs</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contact Us</h4>
            <p>+91 7095288950</p>
            <p>hello@nhancio.com</p>
            <p>Nhancio, Hyderabad</p>
          </div>
          
          <div class="footer-section">
            <h4>Connect</h4>
            <div class="social-icons">
              <a href="https://www.linkedin.com/company/nhancio" target="_blank">🔗</a>
              <a href="https://www.instagram.com/nhancio.ai" target="_blank">📷</a>
              <a href="https://www.twitter.com/soul4tech" target="_blank">🐦</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.querySelector('#register-btn').addEventListener('click', () => {
    window.location.href = "https://ai-workshop-registration.com";
  });

  document.querySelectorAll('.workshop-btn').forEach(button => {
    button.addEventListener('click', () => {
      const workshopName = button.dataset.workshop;
      alert(`You are registering for ${workshopName}`);
      window.location.href = "https://ai-workshop-registration.com";
    });
  });
});