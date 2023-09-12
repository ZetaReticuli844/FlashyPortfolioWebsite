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
    frontend,
    portfolio,
    
  } from "../assets";
  import {BiLogoDjango,BiLogoJavascript,BiLogoCss3,BiLogoHtml5,BiLogoTailwindCss} from "react-icons/bi";

  
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
 college:"Babu Banarasi Das institute of technology and management, Lucknow",
 logo: "https://media.licdn.com/dms/image/C4D0BAQEn2H4KtxRUCQ/company-logo_200_200/0/1652782179002?e=2147483647&v=beta&t=VLxMVJmHwrXGgwZzs5AHLHvQ86TU2wWfAdgdF5sZQ5Q",
 date:"2020-2024",
},
{
  name:"Intermediate",
  college:"Lucknow public school South City, Lucknow",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUGLm4i3-vfrrDEfRVSmIahTABcAnJheJ66Bp5gox&s",
  date:"2018-2019",
},
{
  name:"High School",
  college:"Army Public School Nehru Road, Lucknow",
  logo:"https://media.licdn.com/dms/image/C560BAQGyeZOF7Zf_RA/company-logo_200_200/0/1587707876871?e=2147483647&v=beta&t=TnltOJ0y48nObFyctnxIHpywsHRLzr5PCQ-7dq74Wt0",
  date:"2016-2017",
},

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
      source_code_link: "https://github.com/ZetaReticuli844/SekuraChan-password-manager",
    },
    {
      name: "Portfolio Website",
      description:"A portfolio website built using React JS and Tailwind CSS",
      tags: [
        { name: "reactjs", color: "blue-text-gradient", icon: BiLogoJavascript },
        { name: "tailwind", color: "green-text-gradient", icon: BiLogoTailwindCss },

 
      ],
      image: portfolio,
      source_code_link: "https://github.com/ZetaReticuli844/FlashyPortfolioWebsite",
    }
    
  ];
  const languages = [
    {
      name: "English",
      greeting: "Hi",
    },
    {
      name: "Hindi",
      greeting: "नमस्ते",
  
    },
    {
      name: "Japanese",
      greeting: "こんにちは",
    },
    {
      name: "Spanish",
      greeting: "Hola",
    },
    {
      name: "French",
      greeting: "Bonjour",

    },
    { name: "German",
      greeting: "Hallo",
    },
    {
      name: "Chinese",
      greeting: "你好",
    },
    {
      name: "Russian",
      greeting: "Здравствуйте",
    },
    { name: "Arabic",
      greeting: "مرحبا",
    },
    {
      name: "Portuguese",
      greeting: "Olá",
    },
    { 
      name: "Italian",
      greeting: "Ciao",
    },
    {  name: "Korean",

      greeting: "안녕하세요",
    },
    {
      name: "Turkish",
      greeting: "Merhaba",
    },
    { name: "Polish",

      greeting: "Cześć",
    },
    {
      name:"Telugu",
      greeting:"హలో",
    },
    { name:"Tamil",
    greeting:"வணக்கம்", 
  },{
    name:"Kannada",
    greeting:"ಹಲೋ",
  },{
    name:"Malayalam",
    greeting:"ഹലോ",
  },{
    name:'Bengali',
    greeting:"হ্যালো",
  },{
    name:"Marathi",
    greeting:"नमस्कार",
  },
  {
    name:"Gujarati",
    greeting:"હેલો",
  },
  { name:"Urdu",
  greeting:"ہیلو",
},
{
  name:"Swedish",
greeting:"Hallå",
},
{
  name:"Greek",
greeting:"Γεια σας",
},



  ];
  
  export { services, technologies, experiences, testimonials, projects ,education, languages};