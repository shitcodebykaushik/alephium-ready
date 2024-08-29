import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { TokenDapp } from '@/components/TokenDapp'
import { AlephiumConnectButton, useWallet } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'

export default function Home() {
  const { connectionStatus } = useWallet()

  return (
      <div className={styles.main}>
		<video autoPlay muted loop className={styles.videoBackground}>
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
		<div className='wrapper'>
       <Navbar />
        <section className={styles.spotlight}>
          <h1 className={styles.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, minima</h1>
          <Link href={'/project'} className={styles.button}>Get started</Link>
        </section>
        {/* <footer>
          <div>
            <h2>About Us</h2>
            <p>
              This is a decentralized app (DApp) built on the Alephium blockchain. Our mission is to provide secure,
              efficient, and user-friendly tools for managing and transacting tokens.
            </p>
          </div>
        </footer> */}
		</div>
      </div>
    </>
  )
}



export default Home
