'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Project from '@/components/Project';
import Modal from '@/components/Modal';
import { projects } from '../../data/projects';

export default function Works() {
  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} project={project} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}
