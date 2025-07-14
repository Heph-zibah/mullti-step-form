import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center mb-20 lg:mb-5">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Created by{" "}
        <a
          className="text-[var(--blue-950)] font-bold hover:underline"
          href="https://www.frontendmentor.io/profile/Heph-zibah"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tosin Daramola
        </a>
      </p>
    </footer>
  );
}

export default Footer