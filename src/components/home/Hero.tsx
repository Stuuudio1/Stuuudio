'use client'

import ScrollIndicator from '../ui/ScrollIndicator'
import { useEffect, useRef } from 'react'

export default function Hero() {
    const slideshowRef = useRef<HTMLDivElement>(null)
    const scaleRef = useRef(1)
    const frameRef = useRef<number | null>(null)

    useEffect(() => {
        const isDesktop = () => window.innerWidth >= 1024

        const handleScroll = () => {
            if (!slideshowRef.current) return

            // Mobile: always full size
            if (!isDesktop()) {
                slideshowRef.current.style.transform = 'scale(1)'
                return
            }

            const rect = slideshowRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const progress = Math.min(
                Math.max(1 - rect.top / windowHeight, 0),
                1
            )

            const newScale = 0.75 + progress * 0.25

            if (newScale !== scaleRef.current) {
                scaleRef.current = newScale

                if (frameRef.current) {
                    cancelAnimationFrame(frameRef.current)
                }

                frameRef.current = requestAnimationFrame(() => {
                    if (slideshowRef.current) {
                        slideshowRef.current.style.transform = `scale(${newScale})`
                    }
                })
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)

            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current)
            }
        }
    }, [])

    return (
        <section className="min-h-screen bg-black flex flex-col pt-72 lg:pt-52 pb-5">
            {/* Top row */}
            <div className="flex justify-between items-start pb-8">
                <div className="flex items-center gap-2">
                    <ScrollIndicator />
                    <span className="text-white text-xs uppercase tracking-widest">Scroll down</span>
                </div>
                <p className="text-white text-xl lg:text-2xl font-medium w-50 lg:w-full max-w-lg text-left">
                    We're Stuuudio, yup the 3 U's are intentional. They're three U's because we never stop optimizing for: yo<span className='font-bold'>U</span>, yo<span className='font-bold'>U</span>r brand, yo<span className='font-bold'>U</span>r audience.
                </p>
            </div>

            {/* Video */}
            <div className="flex-1 flex flex-col" style={{ paddingTop: '60px' }}>
                <div
                    ref={slideshowRef}
                    className="relative w-full overflow-hidden origin-center scale-100 lg:scale-75"
                    style={{
                        aspectRatio: '16/9',
                        transition: 'transform 0.1s linear',
                    }}
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ pointerEvents: 'none' }}
                    >
                        <source
                            src="https://res.cloudinary.com/dlfh6aguk/video/upload/q_auto,f_auto,vc_auto/v1780578065/mavin_wgujdg.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="pt-12 lg:pb-12">
                    <div className="border-b border-white" />
                </div>
            </div>
        </section>
    )
}