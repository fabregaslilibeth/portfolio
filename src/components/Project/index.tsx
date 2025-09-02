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
    </div>
  );
}
