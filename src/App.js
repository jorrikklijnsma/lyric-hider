import React, { useState, useEffect } from 'react';
import { FileUploader } from './components/FileUploader';
import { LanguageSelector } from './components/LanguageSelector';
import { TextDisplay } from './components/TextDisplay';
import { ActionButtons } from './components/ActionButtons';
import { Stats } from './components/Stats';
import { NewReplacement } from './components/NewReplacement';

export default function App() {
  const [replacementOptions, setReplacementOptions] = useState({});
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [text, setText] = useState('');
  const [processedText, setProcessedText] = useState([]);
  const [stats, setStats] = useState({ total: 0, replaced: 0 });

  useEffect(() => {
    if (currentLanguage && text) {
      processText();
    }
  }, [currentLanguage, text, replacementOptions]);

  const processText = () => {
    console.log('Processing text...');
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
        'original' in item ? { ...item, isReplaced: true } : item
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Text Replacement Tool</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <FileUploader onFileUpload={handleFileUpload} />
          <LanguageSelector
            languages={Object.keys(replacementOptions)}
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
          <ActionButtons
            onPaste={() => navigator.clipboard.readText().then(handleTextChange)}
            onToggleAll={handleToggleAll}
            onToggleRandom={handleToggleRandom}
          />
        </div>
        <div>
          <Stats stats={stats} />
          <NewReplacement onAddReplacement={handleAddReplacement} />
        </div>
      </div>
      <TextDisplay
        processedText={processedText}
        onToggleReplacement={handleToggleReplacement}
      />
    </div>
  );
}