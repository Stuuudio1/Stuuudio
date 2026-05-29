'use client'

import ScrollIndicator from '../ui/ScrollIndicator'
import { useEffect, useRef, useState } from 'react'

const slides = [
    { src: '/images/revolt.webp', alt: 'Revolt project' },
    { src: '/images/solbase-grid-2.webp', alt: 'Solbase project' },
    { src: '/images/toch-feat.webp', alt: 'toch project' },
    // { src: '/images/vyrux.webp', alt: 'Vyrux project' },
    { src: '/images/astra-work3.webp', alt: 'Astra project' },
    { src: '/images/revo-grid.webp', alt: 'Revolt project' },
    { src: '/images/triskelion-work2.webp', alt: 'Triskelion project' },
    { src: '/images/astra.webp', alt: 'Astra project' },
    { src: '/images/focus-grid1.webp', alt: 'Focus project' },
    { src: '/images/astra-before.webp', alt: 'Astra project' },
    { src: '/images/solbase-work1.webp', alt: 'Solbase project' },
    { src: '/images/triskelion3.webp', alt: 'Astra project' },
    // { src: '/images/toch.webp', alt: 'Toch project' },
    { src: '/images/triskelion6.webp', alt: 'Triskelion project' },
    { src: '/images/neat.webp', alt: 'Neat project' },
    { src: '/images/focus.webp', alt: 'Focus project' },
    { src: '/images/solbase-feat.webp', alt: 'Solbase project' },
]

export default function Hero() {
    const [current, setCurrent] = useState(0)
    const [scale, setScale] = useState(1)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const slideshowRef = useRef<HTMLDivElement>(null)

    // Slideshow auto-advance
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 500)

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [current])

    // Scroll-driven scale — desktop only
    useEffect(() => {
        const isDesktop = () => window.innerWidth >= 1024

        const handleScroll = () => {
            if (!isDesktop() || !slideshowRef.current) return
            const rect = slideshowRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const progress = Math.min(Math.max(1 - rect.top / windowHeight, 0), 1)
            setScale(0.75 + progress * 0.25)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="min-h-screen bg-black flex flex-col pt-72 lg:pt-52 pb-5">
            {/* Top row */}
            <div className="flex justify-between items-start pb-8">
                <div className="flex items-center">
                    <ScrollIndicator />
                    <span className="text-white text-xs uppercase tracking-widest">Scroll down</span>
                </div>
                <p className="text-white text-sm md:text-2xl font-medium lg:font-medium w-50 lg:w-full max-w-lg text-left">
                    We're Stuuudio, yup the 3 U's are intentional. They're three U's. We never stop optimizing for: Yo<span className='font-bold'>U</span>, Yo<span className='font-bold'>U</span>r Brand, Yo<span className='font-bold'>U</span>r Audience. Lagos-born. Pixel-perfect. Always shipping.
                </p>
            </div>

            {/* Slideshow */}
            <div className="flex-1 flex flex-col" style={{ paddingTop: '60px' }}>
                <div
                    ref={slideshowRef}
                    className="relative w-full overflow-hidden origin-center"
                    style={{
                        aspectRatio: '16/9',
                        transform: `scale(${scale})`,
                        transition: 'transform 0.1s linear',
                    }}
                >
                    <img
                        src={slides[current].src}
                        alt={slides[current].alt}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="pt-12 lg:pb-12">
                    <div className="border-b border-white" />
                </div>
            </div>
        </section>
    )
}