import React, { useState, useEffect, useRef } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDots } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';

const navItems = [
  { id: 'home', icon: <AiOutlineHome /> },
  { id: 'about', icon: <AiOutlineUser /> },
  { id: 'experience', icon: <BiBook /> },
  { id: 'portfolio', icon: <BsBriefcase /> },
  { id: 'contact', icon: <BiMessageSquareDots /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState('home');
  const navRef = useRef(null);

  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        setActiveNav(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.35, // Adjust this threshold based on your needs (0.0 to 1.0)
    });

    // Attach the observer to each section
    navItems.forEach((item) => {
      const target = document.querySelector(`#${item.id}`);
      if (target) {
        observer.observe(target);
      }
    });

    // Clean up the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav ref={navRef}>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setActiveNav(item.id)}
          className={activeNav === item.id ? 'active' : ''}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
