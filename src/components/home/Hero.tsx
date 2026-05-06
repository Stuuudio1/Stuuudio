'use client'

import ScrollIndicator from '../ScrollIndicator'
import { useEffect, useRef, useState } from 'react'

const slides = [
    {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
        alt: 'Brand identity project',
        label: 'Brand Identity',
    },
    {
        src: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1600&q=80',
        alt: 'Motion design project',
        label: 'Motion Design',
    },
    {
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80',
        alt: 'Interior & spatial design',
        label: 'Spatial Design',
    },
    {
        src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80',
        alt: 'Web design project',
        label: 'Web Design',
    },
    {
        src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1600&q=80',
        alt: 'Film & video production',
        label: 'Film & Video',
    },
    {
        src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600&q=80',
        alt: 'Photography project',
        label: 'Photography',
    },
    {
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
        alt: 'Office & workspace design',
        label: 'Environment Design',
    },
    {
        src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80',
        alt: 'Graphic design project',
        label: 'Graphic Design',
    },
]

export default function Hero() {
    const [current, setCurrent] = useState(0)
    const [prev, setPrev] = useState<number | null>(null)
    const [transitioning, setTransitioning] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setPrev(current)
            setTransitioning(true)
            const next = (current + 1) % slides.length
            setTimeout(() => {
                setCurrent(next)
                setTransitioning(false)
                setPrev(null)
            }, 700)
        }, 50)

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [current])

    return (
        <section className="min-h-screen bg-black flex flex-col pt-40 lg:pt-52 pb-5">
            {/* Top row */}
            <div className="flex justify-between items-start pb-8">
                <div className="flex items-center">
                    <ScrollIndicator />
                    <span className="text-white text-xs uppercase tracking-widest">Scroll down</span>
                </div>

                <p className="text-white text-sm md:text-2xl font-medium lg:font-bold w-50 lg:w-full max-w-lg text-left">
                    We're Stuuudio — a Lagos-born creative agency building brands and digital
                    presence for businesses that refuse to be average. Design, motion, film,
                    web, and everything in between.
                </p>
            </div>

            {/* Slideshow */}
            <div className="flex-1 flex flex-col" style={{ paddingTop: '60px' }}>
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    {slides.map((slide, i) => {
                        const isActive = i === current
                        const isPrev = i === prev

                        return (
                            <div
                                key={slide.src}
                                className="absolute inset-0 transition-opacity duration-800 ease-in-out"
                                style={{
                                    opacity: isActive ? 1 : isPrev && transitioning ? 0 : 0,
                                    zIndex: isActive ? 2 : isPrev ? 1 : 0,
                                }}
                            >
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )
                    })}

                </div>
                <div className="pt-12 pb-1 lg:pb-12">
                    <div className="border-b border-white" />
                </div>

            </div>
        </section>
    )
}