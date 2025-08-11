import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './Description.module.css';

const phrases = [
    "I am a Certified Public Accountant",
    "turned passionate Web Developer",
    "blending analytical precision",
    "with creative problem-solving",
    "to craft seamless user experiences",
    "and deliver impactful digital solutions"
]

export default function Index() {

  return (
    <div className={styles.description} >
        {
            phrases.map( (phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>
            })
        }
    </div>
  )
}

function AnimatedText({children}: {children: React.ReactNode}) {
    const text = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(text.current, 
            {
                opacity: 0,
                x: -200
            },
            {
                scrollTrigger: {
                    trigger: text.current,
                    scrub: 1,
                    start: "top bottom",
                    end: "bottom top",
                    markers: false
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 1
            }
        )
    }, [])

    return <p data-scroll data-scroll-speed="10.5" ref={text}>{children}</p>
}