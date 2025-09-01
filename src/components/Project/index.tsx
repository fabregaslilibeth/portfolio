"use client";
import React from "react";
import styles from "./style.module.css";
import { Project } from "../../data/projects";

export default function index({ 
  index, 
  project, 
  setModal 
}: { 
  index: number, 
  project: Project, 
  setModal: (modal: { active: boolean, index: number }) => void 
}) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{project.name}</h2>
      <p>{project.category}</p>
      <div style={{ marginTop: '0.5rem' }}>
        {project.skills.slice(0, 3).map((skill, skillIndex) => (
          <span key={skillIndex} style={{
            display: 'inline-block',
            background: `${project.color}20`,
            color: project.color,
            padding: '0.2rem 0.5rem',
            borderRadius: '12px',
            fontSize: '0.7rem',
            margin: '0.1rem',
            border: `1px solid ${project.color}30`
          }}>
            {skill}
          </span>
        ))}
        {project.skills.length > 3 && (
          <span style={{
            display: 'inline-block',
            background: `${project.color}10`,
            color: project.color,
            padding: '0.2rem 0.5rem',
            borderRadius: '12px',
            fontSize: '0.7rem',
            margin: '0.1rem',
            border: `1px solid ${project.color}20`
          }}>
            +{project.skills.length - 3}
          </span>
        )}
      </div>
    </div>
  );
}
