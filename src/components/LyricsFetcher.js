import React, { useState } from 'react';

export const LyricsFetcher = ({ onLyricsFound }) => {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLyrics = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      if (!response.ok) {
        throw new Error('Failed to fetch lyrics');
      }
      const data = await response.json();
      onLyricsFound(data.lyrics);
    } catch (error) {
      setError('Failed to fetch lyrics. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Fetch Lyrics</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Artist name"
          className="flex-1 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md"
        />
        <input
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder="Song title"
          className="flex-1 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md"
        />
        <button
          onClick={fetchLyrics}
          disabled={isLoading}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {isLoading ? 'Loading...' : 'Fetch Lyrics'}
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {error && 
      <div className='mt-2'>
        <a href="https://lyrics.ovh/" target="_blank" rel="noreferrer" className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
          Click
        </a> to open lyrics.ovh and find the artist name and song title.
      </div>
      }
    </div>
  );
};