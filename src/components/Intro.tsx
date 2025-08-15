'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './Intro.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {

    const background = useRef(null);
    const introImage = useRef(null);
    const homeHeader = useRef(null);
    const title = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: homeHeader.current,
                scrub: 1,
                start: "top top",
                end: "bottom top",
                markers: false
            },
        })

        timeline
            .fromTo(background.current, 
                {clipPath: "inset(15%)"}, 
                {clipPath: "inset(0%)", duration: 1}
            )
            .fromTo(introImage.current, 
                {height: "475px"}, 
                {height: "200px", duration: 1}, 
                0
            )
            .fromTo(title.current,
                {y: 0, scale: 1},
                {y: -100, scale: 0.8, duration: 1},
                0
            )

        // Additional scroll effect for the title
        gsap.fromTo(title.current,
            {
                opacity: 0,
                y: 500
            },
            {
                scrollTrigger: {
                    trigger: homeHeader.current,
                    scrub: 1,
                    start: "top center",
                    end: "center center",
                    markers: false
                },
                opacity: 1,
                y: 0,
                ease: "power2.out"
            }
        )
    }, [])

    return (
        <div ref={homeHeader} className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                {/* <Image 
                    src={'/images/color.png'}
                    fill={true}
                    alt="background image"
                    priority={true}
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                /> */}
            </div>
            <div className={styles.intro}>
                <div data-scroll data-scroll-speed="30" ref={introImage} className={styles.introImage}>
                    <Image
                        src={'/images/color.png'}
                        alt="intro image"
                        fill={true}
                        priority={true}
                        style={{ objectFit: 'contain', objectPosition: 'top' }}
                    />
                </div>
                <h1 data-scroll data-scroll-speed="5" ref={title}>BETH FABREGAS</h1>
             </div>
        </div>
    )
}