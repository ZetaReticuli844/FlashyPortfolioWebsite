import { TwoPassDoubleSide } from "three";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    django,
    passwordmanager,
    github,
    ruby,
    rails,
    postgre,
    mysql,
    graphql,
    cplus,
    python,
    frontend
    
  } from "../assets";
  import {BiLogoDjango,BiLogoJavascript,BiLogoCss3,BiLogoHtml5} from "react-icons/bi";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    
    {
      title: "Backend Developer",
      icon: backend,
    }
 
  ];
  const education = [
{
 name:"Bachelor of technology in computer science and engineering",
 college:"Babu Banarasi Das institute of technology and management",
 logo: "https://media.licdn.com/dms/image/C4D0BAQEn2H4KtxRUCQ/company-logo_200_200/0/1652782179002?e=2147483647&v=beta&t=VLxMVJmHwrXGgwZzs5AHLHvQ86TU2wWfAdgdF5sZQ5Q",
 date:" December 2020 - May 2024",
}

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      type: "language",
    },
    {
      name: "CSS 3",
      icon: css,
      type: "language",
    },
    {
      name: "JavaScript",
      icon: javascript,
      type: "language",

    },
    {
      name: "Django",
      icon: django,
      type: "framework",
    },
    {
      name: "React JS",
      icon: reactjs,
      type: "framework",
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
      type: "framework",


    },
    {
      name: "Node JS",
      icon: nodejs,
      type: "framework",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      type: "tool",
    },
  
    {
      name: "git",
      icon: git,
      type: "tool",
    },
  
    {
      name: "docker",
      icon: docker,
      type: "tool",
    },
    {
      name:"Ruby",
      icon:ruby,
      type:"language",
    },
    {
      name:"Rails",
      icon:rails,
      type:"framework",
    },
    {
      name:"PostgreSQL",
      icon:postgre,
      type:"tool",
    },
    {
      name:"MySQL",
      icon:mysql,
      type:"tool",
    },
    {
      name:"github",
      icon:github,
      type:"tool",
    },
    {
      name:"GraphQL",
      icon:graphql,
      type:"tool",
    },
    {
      name:"C++",
      icon:cplus,
      type:"language",
    },
    {
      name:"Python",
      icon:python,
      type:"language",
    },

  ];
  
  const experiences = [
  
  ];
  
  const testimonials = [
   
  ];
  
  const projects = [
    {
      name: "SekuraChan Password Manager",
      description:
        "A password manager that can store your password securely. This app is built using Django.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",   //BiLogoDjango,BiLogoJavascript,BiLogoCss3,BiLogoHtml5
          icon: BiLogoHtml5,
        },
        {
          name: "django",
          color: "green-text-gradient",
          icon: BiLogoDjango,
        },
        {
          name: "css",
          color: "pink-text-gradient",
          icon: BiLogoCss3,
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
          icon: BiLogoJavascript,
        }
      ],
      image: passwordmanager,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects ,education};