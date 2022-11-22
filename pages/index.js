//Next Components
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

//Page Components
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Programs from '../components/home/Programs'
import Events from '../components/home/Events'
import Footer from '../components/home/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <Hero />
        <Programs />
        <Events />
      </main>
      {/* <Footer /> */}
    </>
  )
}
