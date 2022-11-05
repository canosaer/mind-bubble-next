//Next Components
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

//Page Components
import Header from './components/header'
import Hero from './components/hero'
import Programs from './components/programs'
import Events from './components/events'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Header />
      {/* <main className="home">
        <Hero />
        <Programs />
        <Events />
      </main>
      <Footer /> */}
    </>
  )
}
