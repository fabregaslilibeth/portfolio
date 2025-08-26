'use client'

import styles from './styles.module.css';
import Picture1 from '../../../public/images/1.jpeg';
import Picture2 from '../../../public/images/2.jpeg';
import Picture3 from '../../../public/images/3.jpeg';
import Picture4 from '../../../public/images/4.jpeg';
import Picture5 from '../../../public/images/5.jpeg';
import Picture6 from '../../../public/images/6.jpeg';
import Picture7 from '../../../public/images/7.jpeg';
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function ZoomParallax() {

    const container = useRef(null);
    
    useEffect(() => {
        const lenis = new Lenis()
        
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale8
        },
        {
            src: Picture5,
            scale: scale9
        },
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
