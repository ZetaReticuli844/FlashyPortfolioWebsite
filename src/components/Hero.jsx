import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Lottie from 'lottie-react';
import laptop from './animations/laptop.json';
import Greetings from './Greetings';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 w-full h-full object-cover">
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${
            styles.paddingX
          } flex flex-row items-start gap-5`}
        >
          {!isMobile && (
            <div className="relative w-[200px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full">
              <Lottie
                animationData={laptop}
                className="w-[100px] mr-60 pt-60 pr-60 sm:w-[500px] sm:pt-0 sm:pr-0"
              />
            </div>
          )}
          <div className={!isMobile ? '' : 'w-full'}>
            <h1 className={`${styles.heroHeadText}`}>
              Ahoy curious visitor, My name is{' '}
              <span className=" text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-fuchsia-600 to-red-600">
                Yogesh
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 `}>
              <Greetings />
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 ">
        <a href="#about">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaChevronDown className="text-secondary text-3xl" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;