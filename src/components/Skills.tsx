import styles from './Skills.module.css'
import gsap from 'gsap';

const skills = [
    {
      title: "React",
      backgroundColor: "#0A0A0A",
      color: "#61DAFB"
    },
    {
      title: "Next.js",
      backgroundColor: "#8F8F8F",
      color: "#000000"
    },
    {
      title: "Vue.js",
      backgroundColor: "#1A1A1A",
      color: "#42B883"
    },
    {
        title: "Nuxt.js",
        backgroundColor: "#1A1A1A",
        color: "#00C58E"
      },
    {
      title: "TypeScript",
      backgroundColor: "#B8B8B8",
      color: "#3178C6"
    },
    {
      title: "Node.js",
      backgroundColor: "#2D2D2D",
      color: "#339933"
    },
    {
      title: "Laravel",
      backgroundColor: "#D4D4D4",
      color: "#FF2D20"
    },
    {
      title: "MongoDB",
      backgroundColor: "#404040",
      color: "#47A248"
    },
    {
        title: "MySQL",
        backgroundColor: "#404040",
        color: "#00758F"
      },
    {
      title: "AWS",
      backgroundColor: "#E8E8E8",
      color: "#FF9900"
    },
    {
      title: "Docker",
      backgroundColor: "#525252",
      color: "#2496ED"
    }
]

//https://anacuna.com/

export default function Home() {

  const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    gsap.to(e.target, {
      top: "-2vw", 
      backgroundColor: skills[index].backgroundColor, 
      color: skills[index].color,
      duration: 0.3
    })
  }

  const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    gsap.to(e.target, {
      top: "0", 
      backgroundColor: "white", 
      color: "black",
      duration: 0.3, 
      delay: 0.1
    })
  }

  return (
    <div className={styles.container}>
        <div className={styles.projectContainer}>
            {
              skills.map( (project, index) => {
                return <div onMouseEnter={(e) => {manageMouseEnter(e, index)}} onMouseLeave={(e) => {manageMouseLeave(e, index)}} key={index}>
                  <p>{project.title}</p>
                </div>
              })
            }
        </div>
    </div>
  )
}