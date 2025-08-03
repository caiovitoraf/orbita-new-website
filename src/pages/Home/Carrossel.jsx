import React, { useRef, useEffect } from 'react'

// Logos for carousel
import BMpark from '../../assets/images/BMpark.png'
import alecrim from '../../assets/images/alecrim.png'
import ammaq from '../../assets/images/ammaq.png'
import becoBW from '../../assets/images/becoBW.png'
import capeleti from '../../assets/images/capeleti.png'
import donQueson from '../../assets/images/donQueson.png'
import FSW from '../../assets/images/FSW.png'
import holiLogoBW from '../../assets/images/holiLogoBW.png'
import mundoMathe from '../../assets/images/mundoMathe.png'
import nextLeads from '../../assets/images/nextLeads.png'
import restauranteCorintiano from '../../assets/images/restauranteCorintiano.png'
import shodokan from '../../assets/images/shodokan.png'
import unicentro from '../../assets/images/unicentro.png'

const clients = [
  BMpark,
  alecrim,
  ammaq,
  becoBW,
  capeleti,
  donQueson,
  FSW,
  holiLogoBW,
  mundoMathe,
  nextLeads,
  restauranteCorintiano,
  shodokan,
  unicentro,
]

export default function Carrossel() {
  const carouselRef = useRef(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    // Function to scale items based on center proximity
    const handleScale = () => {
      const containerRect = carousel.getBoundingClientRect()
      const containerCenterX = containerRect.left + containerRect.width / 2

      Array.from(carousel.children).forEach((item) => {
        const rect = item.getBoundingClientRect()
        const itemCenterX = rect.left + rect.width / 2
        const distance = Math.abs(containerCenterX - itemCenterX)
        const maxDistance = containerRect.width / 2
        let scale = 1.2 - (distance / maxDistance) * 0.4
        if (scale < 0.8) scale = 0.8
        item.style.transform = `scale(${scale})`
      })
    }

    let animationFrameId
    const speed = 1 // pixels per frame

    const animate = () => {
      if (carousel.scrollWidth > carousel.clientWidth) {
        carousel.scrollLeft += speed
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0
        }
        handleScale()
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    // Initial call and start loop
    handleScale()
    animate()

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section id="clientes-carousel" className="mt-16 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-extrabold text-neutral-800 font-sans">
          Alguns de nossos clientes:
        </h2>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orbita-purple" />

        <div
          ref={carouselRef}
          className="overflow-hidden whitespace-nowrap py-8"
        >
          {clients.concat(clients).map((logo, idx) => (
            <div
              key={idx}
              className="inline-block mx-4 bg-neutral-900 rounded-xl p-4 transition-transform"
            >
              <img
                src={logo}
                alt={`Cliente ${idx + 1}`}
                className="h-20 w-auto object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
