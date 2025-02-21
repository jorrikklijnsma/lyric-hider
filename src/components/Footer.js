import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center">&copy; {currentYear} Lyric Hider. All rights reserved.
          <span className='block mt-4 text-xs text-violet-500'>
            Disclaimer: LLM's are heavily involved during the development of this project.
          </span>
        </p>
      </div>
    </footer>
  );
}