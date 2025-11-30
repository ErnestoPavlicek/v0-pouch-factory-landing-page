"use client"

import { useState, useEffect } from "react"
import { AgeVerificationModal } from "@/components/age-verification-modal"
import { NicotineWarningBanner } from "@/components/nicotine-warning-banner"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustIndicators } from "@/components/trust-indicators"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FactorySection } from "@/components/factory-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

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
      <Header />
      <HeroSection />
      <TrustIndicators />
      <AboutSection />
      <ServicesSection />
      <FactorySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
