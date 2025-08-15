export interface Project {
  name: string;
  skills: string[]; // Array of skill slugs
  website?: string;
  youtube?: string;
}

export const projects: Project[] = [
  {
    name: "E-Commerce Platform",
    skills: ["react", "nextjs", "typescript", "mongodb"],
    website: "https://ecommerce-demo.com",
    youtube: "https://youtube.com/watch?v=demo1"
  },
  {
    name: "Task Management App",
    skills: ["vuejs", "nuxtjs", "nodejs", "mysql"],
    website: "https://taskmanager-app.com",
    youtube: "https://youtube.com/watch?v=demo2"
  },
  {
    name: "Social Media Dashboard",
    skills: ["react", "typescript", "aws", "docker"],
    website: "https://social-dashboard.com",
    youtube: "https://youtube.com/watch?v=demo3"
  },
  {
    name: "Real-time Chat Application",
    skills: ["vuejs", "nodejs", "mongodb", "docker"],
    website: "https://chat-app-demo.com",
    youtube: "https://youtube.com/watch?v=demo4"
  },
  {
    name: "Portfolio Website",
    skills: ["nextjs", "typescript", "aws"],
    website: "https://portfolio-demo.com",
    youtube: "https://youtube.com/watch?v=demo5"
  },
  {
    name: "Weather Forecast App",
    skills: ["react", "nodejs", "mysql"],
    website: "https://weather-app.com",
    youtube: "https://youtube.com/watch?v=demo6"
  },
  {
    name: "Blog Platform",
    skills: ["nuxtjs", "laravel", "mysql", "docker"],
    website: "https://blog-platform.com",
    youtube: "https://youtube.com/watch?v=demo7"
  },
  {
    name: "Inventory Management System",
    skills: ["vuejs", "typescript", "mongodb", "aws"],
    website: "https://inventory-system.com",
    youtube: "https://youtube.com/watch?v=demo8"
  },
  {
    name: "Learning Management System",
    skills: ["react", "nextjs", "laravel", "mysql"],
    website: "https://lms-demo.com",
    youtube: "https://youtube.com/watch?v=demo9"
  },
  {
    name: "API Gateway Service",
    skills: ["nodejs", "typescript", "docker", "aws"],
    website: "https://api-gateway.com",
    youtube: "https://youtube.com/watch?v=demo10"
  }
];
