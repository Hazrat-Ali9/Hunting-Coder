import React from 'react';
import styles from '@/styles/About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer} >
      <div className={styles.heroSection}>
        <h1 className={styles.mainTitle}>About Hunting Coder</h1>
        <p className={styles.tagline}>Tracking Down Solutions in the Wilds of Code</p>
      </div>

      <div className={styles.contentSection}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Hunting Philosophy</h2>
          <div className={styles.sectionContent}>
            <p>At Hunting Coder, we approach programming like skilled trackers - patiently following the trail of bugs, strategically cornering performance issues, and bagging elegant solutions. Just as hunters understand their terrain, we master technologies to deliver precise results.</p>
            <p>Our team consists of developers who thrive on the challenge of the hunt - whether it is tracking down memory leaks, stalking the perfect algorithm, or setting traps for elusive edge cases.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Hunting Grounds</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Frontend Tracking</h3>
              <p>We specialize in tracking down UI issues and implementing responsive designs that work across all devices.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Backend Trapping</h3>
              <p>Our experts set up efficient server architectures and API endpoints to capture and process data.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Database Trails</h3>
              <p>We follow the data trail to optimize queries and structure databases for maximum performance.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Join the Hunt</h2>
          <div className={styles.sectionContent}>
            <p>Ready to track down your next tech solution? Our team of coding hunters is standing by to help you bag your project goals.</p>
            <div className={styles.contactInfo}>
              <p>📧 Email: hunt@huntingcoder.com</p>
              <p>📞 Phone: +1 (555) HUNT-COD</p>
              <p>📍 Basecamp: Silicon Forest, OR</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;