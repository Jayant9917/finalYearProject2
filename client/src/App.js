import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './components/contact';
import './App.css';

// Add this import for the About component
import About from './components/About';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const formData = new FormData();
        formData.append("name", file.name);
        formData.append("file", file);

        const response = await fetch('https://finalyearproject2-dk66.onrender.com/upload', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        setResult(data.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  const Home = () => (
    <div className="main">
      <div className='container'>
        <div className='logo'>
          <h1>LinkBridge</h1>
          <p>LINKING WORLDS, SHARING FILES</p>
        </div>
        <div className='wrapper'>
          <h1>Simple file sharing!</h1>
          <p>Upload and share the download link.</p>

          <button className="upload-button" onClick={onUploadClick}>Upload</button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <a href={result} target='_blank' rel="noopener noreferrer">{result}</a>
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-logo">LINKBRIDGE</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Hola Everyone , How are you ?</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: ranajayant527@gmail.com</p>
            <p>Phone: +91 7819016236</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">TW</a>
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">LI</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 LinkBridge. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;