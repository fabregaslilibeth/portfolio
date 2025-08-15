import styles from './Skills.module.css'
import gsap from 'gsap';

const skills = [
    {
      title: "React",
      background: "#0A0A0A url('/texture.png') repeat",
      color: "#61DAFB"
    },
    {
      title: "Next.js",
      background: "#8F8F8F url('/texture.png') repeat",
      color: "#000000"
    },
    {
      title: "Vue.js",
      background: "#1A1A1A url('/texture.png') repeat",
      color: "#42B883"
    },
    {
        title: "Nuxt.js",
        background: "#1A1A1A url('/texture.png') repeat",
        color: "#00C58E"
      },
    {
      title: "TypeScript",
      background: "#B8B8B8 url('/texture.png') repeat",
      color: "#3178C6"
    },
    {
      title: "Node.js",
      background: "#2D2D2D url('/texture.png') repeat",
      color: "#339933"
    },
    {
      title: "Laravel",
      background: "#D4D4D4 url('/texture.png') repeat",
      color: "#FF2D20"
    },
    {
      title: "MongoDB",
      background: "#404040 url('/texture.png') repeat",
      color: "#47A248"
    },
    {
        title: "MySQL",
        background: "#404040 url('/texture.png') repeat",
        color: "#00758F"
      },
    {
      title: "AWS",
      background: "#E8E8E8 url('/texture.png') repeat",
      color: "#FF9900"
    },
    {
      title: "Docker",
      background: "#525252 url('/texture.png') repeat",
      color: "#2496ED"
    }
]

export default function Home() {

  const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    gsap.to(e.target, {
      top: "-2vw", 
      background: "linear-gradient(to left, #672145, transparent)", 
      color: "white",
      duration: 0.3,
    })
  }

  const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    gsap.to(e.target, {
      top: "0", 
      background: skills[index].background, 
      color: skills[index].color,
      
      duration: 0.3, 
      delay: 0.1
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.projectContainer}>
        <h1>SKILLS</h1>
      </div>
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