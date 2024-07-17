import React from 'react';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <div className="text-center flex flex-col gap-4 py-12 items-center">
      <img src="./logo-lyric-hider.png" alt="logo of the lyric hider" className='w-1/2 max-w-36 mx-auto aspect-square my-6' />
      <h1 className="text-4xl font-bold mb-2">Welcome to the Lyric Hider</h1>
      <h2 className="text-2xl font-semibold">Hide lyrics from your favorite songs</h2>
      <p className='max-w-96'>Hide lyrics from your favorite songs with our tool. you can easaly import your lyrics and use one of the existing word sets to replace existing words to phonetic equivalents.</p>
      <Link to="/tool" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </Link>
      <h2 className="text-2xl font-semibold mt-4">How it works</h2>
      <p className='max-w-96'>You can also adjust these words on the fly in the "replacement" section.</p>
      <p className='max-w-96'>Lyrics can be imported using the paste button which will take the lyrics from your clipboard.</p>
      <p className='max-w-96'>You can also search for lyrics using the search button. This only works on an exact match of the song title and artist. Otherwise it's not going to find any results</p>
    </div>
  );
}