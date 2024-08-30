import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import * as THREE from 'three';

// Inline CSS styles
const containerStyle: React.CSSProperties = {
  position: 'relative',
  minHeight: '100vh',
  backgroundColor: '#1a202c',
  color: '#f7fafc',
  fontFamily: `'Roboto', sans-serif`,
  overflow: 'hidden',
};

const mainStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 1,
  padding: '60px 20px',
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center',
};

const titleStyle: React.CSSProperties = {
  fontSize: '4rem',
  margin: '0 0 20px',
  color: '#edf2f7',
  fontWeight: '700',
  lineHeight: '1.3',
};

const sectionStyle: React.CSSProperties = {
  marginBottom: '40px',
  padding: '30px',
  backgroundColor: '#2d3748',
  borderRadius: '15px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  color: '#edf2f7',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '2rem',
  margin: '0 0 15px',
  color: '#edf2f7',
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
};

const teamStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap',
  marginTop: '30px',
};

const teamMemberStyle: React.CSSProperties = {
  textAlign: 'center',
  maxWidth: '250px',
};

const teamImageStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
};

const About: React.FC = () => {
  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={containerStyle}>
      <Head>
        <title>About - Aznet</title>
        <meta name="description" content="Learn more about Aznet, our mission, and our team." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
      </Head>
      <Navbar />
      <main style={mainStyle}>
        <h1 style={titleStyle}>About Aznet</h1>

        <section style={sectionStyle}>
          <h2 style={subtitleStyle}>Our Mission</h2>
          <p style={paragraphStyle}>
            At Aznet, our mission is to revolutionize the financial world by leveraging the power of blockchain technology.
            We aim to provide a decentralized platform that ensures security, transparency, and efficiency in financial transactions.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subtitleStyle}>Our Vision</h2>
          <p style={paragraphStyle}>
            We envision a world where financial services are accessible to everyone, without the need for intermediaries. 
            By integrating cutting-edge technology and user-centric design, we strive to make financial management simple and accessible.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={subtitleStyle}>Meet the Team</h2>
          <div style={teamStyle}>
            <div style={teamMemberStyle}>
              <img src="/team/member1.jpg" alt="Team Member 1" style={teamImageStyle} />
              <h3>Kaushik Raj</h3>
              <p>Developer </p>
            </div>
            <div style={teamMemberStyle}>
              <img src="/team/member2.jpg" alt="Team Member 2" style={teamImageStyle} />
              <h3>Ajmal</h3>
              <p>Developer</p>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={subtitleStyle}>Contact Us</h2>
          <p style={paragraphStyle}>
            Have questions or want to get in touch with us? Feel free to reach out through our email at contact@aznet.com. 
            We're always here to help and answer any queries you may have.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
