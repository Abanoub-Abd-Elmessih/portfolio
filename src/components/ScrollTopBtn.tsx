"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-20 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
};
