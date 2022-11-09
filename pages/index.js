//Next Components
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

//Page Components
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Programs from '../components/home/Programs'
import Events from '../components/home/Events'
import Footer from '../components/home/Footer'

export default function Home() {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Header />
      <main className="home">
        <Hero />
        <Programs />
        {/* <Events /> */}
      </main>
      {/* <Footer /> */}
      <Script id="netlify-identity">
        {`if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }`
        }
      </Script>
    </>
  )
}
