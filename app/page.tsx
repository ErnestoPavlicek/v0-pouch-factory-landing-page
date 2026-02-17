"use client"

import { useState, useEffect } from "react"
import { AgeVerificationModal } from "@/components/age-verification-modal"
import { NicotineWarningBanner } from "@/components/nicotine-warning-banner"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import Facility from "@/components/Facility"
import Contact from "@/components/Contact"
import FooterNew from "@/components/footer"

export default function Home() {
  const [isAgeVerified, setIsAgeVerified] = useState(false)
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    const verified = localStorage.getItem("age-verified")
    if (verified === "true") {
      setIsAgeVerified(true)
      setShowModal(false)
    }
  }, [])

  const handleAgeVerification = (verified: boolean) => {
    if (verified) {
      localStorage.setItem("age-verified", "true")
      setIsAgeVerified(true)
      setShowModal(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {showModal && <AgeVerificationModal onVerify={handleAgeVerification} />}

      <NicotineWarningBanner />
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Facility />
      <Contact />
      <FooterNew />
    </main>
  )
}
