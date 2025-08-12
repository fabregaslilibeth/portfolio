import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './Projects.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Salar de Atacama",
        src: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
    },
    {
        title: "Valle de la luna",
        src: "https://cdn.pixabay.com/photo/2023/01/28/19/01/bird-7751561_1280.jpg"
    },
    {
        title: "Miscanti Lake",
        src: "https://cdn.pixabay.com/photo/2023/04/24/15/06/great-tit-7948318_1280.jpg"
    },
    {
        title: "Miniques Lagoons",
        src: "https://cdn.pixabay.com/photo/2024/03/12/15/43/great-tit-8629045_1280.jpg"
    },
]

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
                        src={projects[selectedProject].src}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </div>
                <div className={styles.column}>
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
