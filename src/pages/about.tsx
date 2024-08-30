import Navbar from '@/components/Navbar'
import React from 'react'

const about = () => {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <div style={styles.container}>
          {/* <h1 style={styles.heading}>About Us</h1> */}
          <p style={styles.paragraph}>
            At Aznet Fund, our mission is to democratize access to financial services through the power of Web3
            technology. We believe that everyone should have the opportunity to participate in the global economy,
            regardless of their location or background. By providing a decentralized platform, we empower users to
            manage their assets, invest in emerging opportunities, and secure their financial future without relying on
            traditional financial institutions.
          </p>

          <h2 style={styles.heading}>Why Choose Us?</h2>
          <p style={styles.paragraph}>
            Innovative Solutions: We're at the forefront of Web3 innovation, constantly developing new features to
            enhance your financial experience. Community-Driven: Our platform is built for the community, by the
            community. We prioritize user feedback and continuously improve our services to meet your needs.
            Transparency: With blockchain technology at our core, we offer full transparency in all transactions,
            ensuring trust and accountability.
          </p>
          <h2 style={styles.heading}>Our Vision</h2>
          <p style={styles.paragraph}>
            We envision a world where financial services are accessible, fair, and open to all. By harnessing the power
            of decentralized technology, we aim to create a more inclusive financial system that empowers individuals
            and fosters economic growth.
          </p>
        </div>
      </div>
    </div>
  )
}

const styles  = {
    container: {
        padding: '80px',
        marginTop : '30px'
    },
    heading: {
        fontSize: '24px',
        fontWeight: '400',
        marginBottom: '10px',
    },
    subHeading: {
        fontSize: '20px',
        fontWeight: '400',
        marginBottom: '10px',
    },
    paragraph: {
        fontSize: '18px',
        lineHeight: '1.5',
        fontWeight: '300',
        marginBottom : '40px'
    },
    
}

export default about
