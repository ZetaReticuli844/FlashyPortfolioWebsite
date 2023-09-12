import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {styles} from '../styles'

const languages = [
  {
    name: "English",
    greeting: "Welcome",
  },
  {
    name: "Hindi",
    greeting: "स्वागत है",
  },
  {
    name: "Japanese",
    greeting: "ようこそ",
  },
  {
    name: "Chinese",
    greeting: "欢迎",
  },
  {
    name: "German",
    greeting: "Willkommen",
  },
  {
    name: "Russian",
    greeting: "Добро пожаловать",
  },
  {
    name: "Korean",
    greeting: "어서 오세요",
  },
  {
    name: "Spanish",
    greeting: "Bienvenido",
  },
  {
    name: "French",
    greeting: "Bienvenue",
  },
  
  
  
  {
    name: "Arabic",
    greeting: "أهلاً وسهلاً",
  },
  {
    name: "Portuguese",
    greeting: "Bem-vindo",
  },
  {
    name: "Italian",
    greeting: "Benvenuto",
  },
  
  {
    name: "Turkish",
    greeting: "Hoş geldiniz",
  },
  {
    name: "Polish",
    greeting: "Witamy",
  },
  {
    name: "Telugu",
    greeting: "స్వాగతం",
  },
  {
    name: "Tamil",
    greeting: "வருக",
  },
  {
    name: "Kannada",
    greeting: "ಸ್ವಾಗತ",
  },
  {
    name: "Malayalam",
    greeting: "സ്വാഗതം",
  },
  {
    name: 'Bengali',
    greeting: "স্বাগতম",
  },
  {
    name: "Marathi",
    greeting: "स्वागत आहे",
  },
  {
    name: "Gujarati",
    greeting: "સ્વાગત છે",
  },
  {
    name: "Urdu",
    greeting: "خوش آمدید",
  },
  {
    name: "Swedish",
    greeting: "Välkommen",
  },
  {
    name: "Greek",
    greeting: "Καλώς ήρθατε",
  },
];

const Greetings = () => {
  const sequence = languages.flatMap((language) => [
    language.greeting,
    2000,
  ]);

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    
      className={`${styles.heroSubText} mt-2 text-white-100`}
    />
  );
};

export default Greetings;