import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './Projects.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: container.current,
            pin: imageContainer.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            markers: false
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={projects[selectedProject].image || "/images/placeholder.svg"}
                        fill={true}
                        alt={projects[selectedProject].name}
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>{projects[selectedProject].category}</p>
                </div>
                <div className={styles.column}>
                    <p>Technologies: {projects[selectedProject].skills.join(', ')}</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.name}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
