import React from 'react'
import Head from 'next/head'
import { TokenDapp } from '@/components/TokenDapp'
import { AlephiumConnectButton, useWallet } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'

const Home: any = () => {
  const { connectionStatus } = useWallet()

  return (
      <div>
        <nav style={styles.navbar}>
          <div style={styles.logo}>MyWeb3App</div>
          <ul style={styles.navLinks}>
            <li>
              <a href="#home" style={styles.navItem}>
                Home
              </a>
            </li>
            <li>
              <a href="#project" style={styles.navItem}>
                Project
              </a>
            </li>
            <li>
              <a href="#about" style={styles.navItem}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" style={styles.navItem}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <section style={styles.spotlight}>
          {/* <button style={styles.getStartedButton}>Get Started</button> */}
          <AlephiumConnectButton />
          <Head>
            <title>Token Faucet</title>
            <meta name="description" content="Generated by @alephium/cli init" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {connectionStatus === 'connected' && <TokenDapp config={tokenFaucetConfig} />}
        </section>
        <footer>
          <div>
            <h2>About Us</h2>
            <p>
              This is a decentralized app (DApp) built on the Alephium blockchain. Our mission is to provide secure,
              efficient, and user-friendly tools for managing and transacting tokens.
            </p>
          </div>
        </footer>
      </div>
  )
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px'
  },
  navItem: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px'
  },
  spotlight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    backgroundColor: '#61dafb'
  },
  getStartedButton: {
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: '#282c34',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}

export default Home
