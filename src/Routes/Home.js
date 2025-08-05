import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Hero from "../components/Hero";
import heroImage from "../Assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import SearchBar from "../components/Searchbar";






const pageVariants = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function Home() {
  useEffect(() => {
    // Internal CSS styles for toast responsiveness
    const style = document.createElement("style");
    style.innerHTML = `
      .custom-toast {
        font-size: 1rem;
        line-height: 1.5;
        word-wrap: break-word;
      }

      .toast-link {
        color: #fff;
        text-decoration: underline;
        font-weight: bold;
      }

      @media (max-width: 480px) {
        .custom-toast {
          font-size: 0.85rem;
          text-align: center;
        }

        .toast-link {
          display: block;
          margin-top: 5px;
        }
      }
    `;
    document.head.appendChild(style);
    
    // 1️⃣ Translator toast
    const translatorDelay = Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000;


    const translatorTimer = setTimeout(() => {
      toast.info(
        <div className="custom-toast">
          🈯 <strong>Translator is ready to help you</strong> —&nbsp;
          <Link to="/translate" className="toast-link">
            Open Translator
          </Link>
        </div>,
        {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: true,
          theme: "colored",
        }
      );

      // 2️⃣ Budget manager toast appears ~5.5s later
      const budgetTimer = setTimeout(() => {
        toast.info(
          <div className="custom-toast">
            💰 <strong>Don't forget to manage your budget before planning a trip!</strong> —&nbsp;
            <Link to="/budget" className="toast-link">
              Open Budget Manager
            </Link>
          </div>,
          {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            closeButton: true,
            theme: "colored",
          }
        );
      }, 15000);

      // Cleanup budget toast timer
      return () => clearTimeout(budgetTimer);
    }, translatorDelay);

    // Cleanup
    return () => {
      document.head.removeChild(style);
      clearTimeout(translatorTimer);
    };
  }, []);

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      <Hero
        cName="hero"
        heroImage={heroImage}
        title="Your Journey your story"
        text="Choose your favorite destination"
        buttontext="Travel Plan"
        url="/budgetmanager"
        btnclass="show"
        
      />

   
      <ToastContainer />
      <SearchBar />
      <Destination />
      <Trip />
      <Footer />
    </motion.div>
  );
}
