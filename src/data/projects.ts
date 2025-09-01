export interface Project {
  name: string;
  skills: string[]; // Array of skill slugs
  website?: string;
  youtube?: string;
  image?: string;
  slug: string;
  color: string;
  category: string;
}

export const projects: Project[] = [
  {
    name: "Moshi Ramen",
    skills: ["react", "nextjs", "typescript", "mongodb"],
    website: "https://ecommerce-demo.com",
    youtube: "https://youtube.com/watch?v=demo1",
    image: "/images/1.jpeg",
    slug: "moshi-ramen",
    color: "#3a54b1",
    category: "e-commerce"
  },
  {
    name: "Get Inked",
    skills: ["vuejs", "nuxtjs", "nodejs", "mysql"],
    website: "https://taskmanager-app.com",
    youtube: "https://youtube.com/watch?v=demo2",
    image: "/images/2.jpeg",
    slug: "get-inked",
    color: "#de6495",
    category: "task management"
  },
  {
    name: "Bella Pizza",
    skills: ["react", "typescript", "aws", "docker"],
    website: "https://social-dashboard.com",
    youtube: "https://youtube.com/watch?v=demo3",
    image: "/images/3.jpeg",
    slug: "bella-pizza",
    color: "#CB2B2B",
    category: "food delivery"
  },
  {
    name: "Lalaguna Villas",
    skills: ["vuejs", "nodejs", "mongodb", "docker"],
    website: "https://chat-app-demo.com",
    youtube: "https://youtube.com/watch?v=demo4",
    image: "/images/4.jpeg",
    slug: "lalaguna-villas",
    color: "#0a6e93",
    category: "real estate"
  },
  {
    name: "Jewelmer",
    skills: ["nextjs", "typescript", "aws"],
    website: "https://portfolio-demo.com",
    youtube: "https://youtube.com/watch?v=demo5",
    image: "/images/5.jpeg",
    slug: "jewelmer",
    color: "#014c47",
    category: "jewelry"
  },
  {
    name: "Weather Forecast App",
    skills: ["react", "nodejs", "mysql"],
    website: "https://weather-app.com",
    youtube: "https://youtube.com/watch?v=demo6",
    image: "/images/6.jpeg",
    slug: "weather-forecast-app",
    color: "#CB952B",
    category: "weather"
  },
];
