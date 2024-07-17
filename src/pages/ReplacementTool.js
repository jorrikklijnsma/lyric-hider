import React, {useState, useEffect} from 'react';
import { ActionButtons } from '../components/ActionButtons';
import { FileUploader } from '../components/FileUploader';
import { LanguageSelector } from '../components/LanguageSelector';
import { LyricsFetcher } from '../components/LyricsFetcher';
import { NewReplacement } from '../components/NewReplacement';
import { replacementData } from '../data/replacementData';
import { Stats } from '../components/Stats';
import { TextDisplay } from '../components/TextDisplay';

export default function ReplacementTool() {
  const [replacementOptions, setReplacementOptions] = useState(replacementData);
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [text, setText] = useState('');
  const [processedText, setProcessedText] = useState([]);
  const [stats, setStats] = useState({ total: 0, replaced: 0 });
  const [openSection, setOpenSection] = useState('input');


  useEffect(() => {

    if (currentLanguage && text) {
      processText();
    }
  }, [currentLanguage, text, replacementOptions]);

  const processText = () => {
    if (!currentLanguage || !replacementOptions[currentLanguage]) {
      return;
    }

    const words = text.split(/(\s+)/);
    const processed = words.map((word, index) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
      const option = replacementOptions[currentLanguage].find(opt => opt.original.toLowerCase() === cleanWord);
      
      if (option) {
        let replacement = option.replacement;
        if (word[0] === word[0].toUpperCase()) {
          replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
        }
        const finalReplacement = word.replace(new RegExp(cleanWord, 'i'), replacement);
        return { id: index, original: word, replacement: finalReplacement, isReplaced: false };
      }
      return { id: index, text: word };
    });

    setProcessedText(processed);
    updateStats(processed);
  };

  const updateStats = (processed) => {
    const total = processed.filter(item => 'original' in item).length;
    const replaced = processed.filter(item => item.isReplaced).length;
    setStats({ total, replaced });
  };

  const handleFileUpload = (jsonData) => {
    setReplacementOptions(jsonData);
    setCurrentLanguage(Object.keys(jsonData)[0]);
  };

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleToggleReplacement = (id) => {
    setProcessedText(prev => {
      const newProcessed = prev.map(item => 
        item.id === id ? { ...item, isReplaced: !item.isReplaced } : item
      );
      updateStats(newProcessed);
      return newProcessed;
    });
  };

  const handleToggleAll = () => {
    setProcessedText(prev => {
      const newProcessed = prev.map(item => 
        'original' in item ? { ...item, isReplaced: !item.isReplaced } : item
      );
      updateStats(newProcessed);
      return newProcessed;
    });
  };

  const handleToggleRandom = (count) => {
    setProcessedText(prev => {
      const replaceableItems = prev.filter(item => 'original' in item);
      const shuffled = [...replaceableItems].sort(() => 0.5 - Math.random());
      const toToggle = new Set(shuffled.slice(0, count).map(item => item.id));
      
      const newProcessed = prev.map(item => 
        toToggle.has(item.id) ? { ...item, isReplaced: !item.isReplaced } : item
      );
      updateStats(newProcessed);
      return newProcessed;
    });
  };

  const handleAddReplacement = (original, replacement) => {
    setReplacementOptions(prev => ({
      ...prev,
      [currentLanguage]: [...prev[currentLanguage], { original, replacement }]
    }));
  };


  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const SectionHeader = ({ title, section }) => {
    const isSectionOpen = openSection === section;
    return (
      <button
        className={`flex justify-between items-center p-3 rounded-md cursor-pointer ${isSectionOpen ? 'bg-gray-200 hover:bg-gray-300' : 'bg-none hover:bg-gray-100'}`}
        onClick={() => toggleSection(section)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
      </button>
    );
  }

  const handleCopyToClipboard = () => {
    // format the text to be copied to clipboard with the same styling ar the original text
    const replacedText = processedText.map(item => {
      // if the item is a text, return the text
      if ('text' in item) {
        return item.text;
      }

      // the replaced text if there is a replacement
      const replacedText = item.isReplaced ? item.replacement : item.original;

      return replacedText;
    }).join('');
    navigator.clipboard.writeText(replacedText);
  }

  const handleBulkReplace = (original, replacement) => {
    setProcessedText(prevText => 
      prevText.map(item => {
        if ('original' in item && item.original.toLowerCase().includes(original.toLowerCase())) {
          return { ...item, replacement, isReplaced: true };
        }
        return item;
      })
    );

    setReplacementOptions(prev => ({
      ...prev,
      [currentLanguage]: [
        ...prev[currentLanguage].filter(item => item.original.toLowerCase() !== original.toLowerCase()),
        { original, replacement }
      ]
    }));

    updateStats(processedText);
  };

  const handleLyricsFound = (lyrics) => {
    setText(lyrics);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Text Replacement Tool</h1>
      
      <div className="space-y-4">
        <div className='flex gap-4'>
          <SectionHeader title="Input Options" section="input" />
          <SectionHeader title="Text Actions" section="actions" />
          <SectionHeader title="Get Lyrics" section="lyrics" />
          <SectionHeader title="Replacement Options" section="replacement" />
          <SectionHeader title="Statistics" section="stats" />

        </div>
        <div>
          {openSection === 'input' && (
            <div className="flex flex-col items-start justify-start mt-2 space-y-2">
              <FileUploader onFileUpload={handleFileUpload} />
              <LanguageSelector
                languages={Object.keys(replacementOptions)}
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
              />
            </div>
          )}
          {openSection === 'lyrics' && (
            <div className="flex flex-col items-start justify-start mt-2 space-y-2">
              <LyricsFetcher onLyricsFound={handleLyricsFound} />
            </div>
          )}
          {openSection === 'actions' && (
            <div className="mt-2">
              <ActionButtons
                onPaste={() => navigator.clipboard.readText().then(handleTextChange)}
                onToggleAll={handleToggleAll}
                onToggleRandom={handleToggleRandom}
                onCopyToClipboard={handleCopyToClipboard}
              />
            </div>
          )}
          {openSection === 'replacement' && (
            <div className="mt-2 space-y-2">
              <NewReplacement 
                onAddReplacement={handleAddReplacement}
                processedText={processedText}
                onBulkReplace={handleBulkReplace}
              />
            </div>
          )}
          {openSection === 'stats' && (
            <div className="mt-2 space-y-2">
              <Stats stats={stats} />
            </div>
          )}
        </div>

        <TextDisplay
          processedText={processedText}
          onToggleReplacement={handleToggleReplacement}
        />
      </div>
    </div>
  );
}