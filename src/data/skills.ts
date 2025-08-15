export interface Skill {
  title: string;
  slug: string;
  background: string;
  color: string;
}

export const skills: Skill[] = [
  {
    title: "React",
    slug: "react",
    background: "#0A0A0A url('/texture.png') repeat",
    color: "#61DAFB"
  },
  {
    title: "Next.js",
    slug: "nextjs",
    background: "#8F8F8F url('/texture.png') repeat",
    color: "#000000"
  },
  {
    title: "Vue.js",
    slug: "vuejs",
    background: "#1A1A1A url('/texture.png') repeat",
    color: "#42B883"
  },
  {
    title: "Nuxt.js",
    slug: "nuxtjs",
    background: "#1A1A1A url('/texture.png') repeat",
    color: "#00C58E"
  },
  {
    title: "TypeScript",
    slug: "typescript",
    background: "#B8B8B8 url('/texture.png') repeat",
    color: "#3178C6"
  },
  {
    title: "Node.js",
    slug: "nodejs",
    background: "#2D2D2D url('/texture.png') repeat",
    color: "#339933"
  },
  {
    title: "Laravel",
    slug: "laravel",
    background: "#D4D4D4 url('/texture.png') repeat",
    color: "#FF2D20"
  },
  {
    title: "MongoDB",
    slug: "mongodb",
    background: "#404040 url('/texture.png') repeat",
    color: "#47A248"
  },
  {
    title: "MySQL",
    slug: "mysql",
    background: "#404040 url('/texture.png') repeat",
    color: "#00758F"
  },
  {
    title: "AWS",
    slug: "aws",
    background: "#E8E8E8 url('/texture.png') repeat",
    color: "#FF9900"
  },
  {
    title: "Docker",
    slug: "docker",
    background: "#525252 url('/texture.png') repeat",
    color: "#2496ED"
  }
];
