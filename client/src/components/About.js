import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">LINKBRIDGE - A File Sharing App</h1>
      
      <section className="about-description">
        <p>
          LinkBridge is a cloud-based file sharing application that allows users to share files of any size with anyone, anywhere in the world. The platform generates unique, shareable links for files, making it easy to collaborate and distribute content. LinkBridge is built on the MERN stack (MongoDB, Express.js, React, Node.js), ensuring scalability, performance, and a robust user experience.
        </p>
      </section>

      <section className="core-features">
        <h2>Core Features</h2>
        <ul>
          <li>Users can upload files of any type and size to the platform.</li>
          <li>LinkBridge generates a unique and shareable link for each file.</li>
          <li>Recipients can access the shared file by clicking on the link.</li>
        </ul>
      </section>

      <section className="tech-stack">
        <h2>Technology Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> React.js for building a dynamic and interactive user interface.</li>
          <li><strong>Backend:</strong> Node.js and Express.js for handling server-side logic and API endpoints.</li>
          <li><strong>Database:</strong> MongoDB for storing user information, file metadata, and link data.</li>
        </ul>
      </section>

      <section className="uniqueness">
        <h2>What Makes LinkBridge Unique</h2>
        <ul>
          <li>Each file uploaded generates a unique, secure link that is not easily guessable.</li>
          <li>No account needed: Users can upload and share files without creating an account.</li>
          <li>Designed to handle large files and high volumes of data efficiently.</li>
        </ul>
      </section>

      <section className="comparison">
        <h2>LinkBridge vs. WhatsApp</h2>
        <p>
          Unlike WhatsApp, which is primarily a messaging app, LinkBridge is specifically designed for file sharing. It offers features to manage and distribute files efficiently, without the need for user accounts or being part of a messaging platform. LinkBridge is optimized for handling large files and high volumes of data, which might be more challenging on platforms like WhatsApp due to file size limits.
        </p>
      </section>

      <section className="why-mern">
        <h2>Why MERN Stack?</h2>
        <p>
          The MERN stack provides a cohesive and efficient framework for building a scalable, responsive, and high-performance application like LinkBridge, aligning with modern development practices and addressing the needs of a global file-sharing app.
        </p>
      </section>

      <section className="why-mongodb">
        <h2>Why MongoDB?</h2>
        <ul>
          <li>Flexibility with data models</li>
          <li>Optimized performance for read and write operations</li>
          <li>Efficient handling of large amounts of unstructured or semi-structured data</li>
        </ul>
      </section>

      <section className="project-challenges">
        <h2>Project Challenges and Learnings</h2>
        <p>
          One of the main challenges was optimizing the file upload and download process to maintain high performance even with large files. Enhancing the security of the links to prevent unauthorized access was another focus area. Through this project, I gained in-depth knowledge of full-stack development using the MERN stack, as well as experience in building scalable and secure web applications.
        </p>
      </section>
    </div>
  );
};

export default About;
