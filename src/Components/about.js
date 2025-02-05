import React from 'react';
import Header from './header';
import Footer from './footer';
import '../Components/styles.css';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        {/* About Us Section */}
        <div className="about-card">
          <h2 className="section-title">
            About Us <span>👋</span>
          </h2>
          <div className="content-section">
            <p>Welcome to our innovative fitness platform! We are a dedicated team of three aspiring engineering students
               - Rizwan, Priyanshu, and Harsh - who have combined our passion for technology and wellness to create something truly special.
                As part of our B.Tech final year project, we've developed a cutting-edge Personalized Fitness Recommender System that harnesses the power of Machine Learning.</p>
            <p>Our system goes beyond traditional one-size-fits-all approaches to fitness. By leveraging advanced ML algorithms, we analyze individual user data to create highly personalized workout routines and diet plans. 
              What started as an academic project has evolved into a comprehensive wellness solution that we believe can make a real difference in people's fitness journeys.</p>
            <p>Each team member brings unique insights and expertise to the project, allowing us to create a system that's not just technologically sophisticated, but also practical and user-friendly. 
              We understand the challenges of maintaining a healthy lifestyle in today's fast-paced world, which is why we're committed to making personalized fitness guidance more accessible to everyone.</p>
            <p>Founded in 2024 as our major project at college, this platform represents our vision of using technology to revolutionize personal fitness.
               We're excited to share this journey with you and help you achieve your wellness goals through our intelligent recommendation system.</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="about-card">
          <h2 className="section-title">
            Our Mission <span>🎯</span>
          </h2>
          <div className="content-section">
            <p>We are dedicated to empowering you on your wellness journey through the integration of cutting-edge technology.
               Our AI-powered Personalized Fitness Recommender System leverages advanced machine learning algorithms to craft customized workout and diet plans tailored specifically to your unique needs and goals.
               By analyzing your preferences, lifestyle, and fitness data, we aim to provide actionable insights and motivate you to achieve and sustain your fitness aspirations with ease and efficiency.</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="about-card">
          <h2 className="section-title">
            Contact Us <span>📧</span>
          </h2>
          <div className="content-section">
            <p>If you have any questions or feedback, please don't hesitate to reach out to us.</p>
            <div className="contact-info">
              <span className="contact-label">Email:</span>
              <a href="mailto:csd21004@glbitm.ac.in" className="contact-link">
                csd21004@glbitm.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;