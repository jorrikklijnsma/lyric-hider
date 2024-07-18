import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-4 items-center">
        <img src="./logo-lyric-hider.png" alt="logo of the lyric hider" className='max-h-10 aspect-square' />
        <Link to="/" className="text-violet-800 text-3xl font-bold font-mono">Lyric Hider</Link>
      </div>
    </header>
  );
}