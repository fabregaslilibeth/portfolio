'use client';
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
      <main>
        <Intro />
        <Description />
        <Skills />
        {/* <div style={{height: "100vh"}}>
            <h1>Projects</h1>
            https://blog.olivierlarose.com/tutorials/text-mask-animation
          </div>
          <div style={{height: "100vh"}}>
            <h1>Skills</h1>
            https://blog.olivierlarose.com/tutorials/project-gallery-colored-card
          </div> */}
          <Projects />
      </main>
  )
}
