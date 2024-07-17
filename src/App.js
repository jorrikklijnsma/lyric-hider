import React, { useState, useEffect } from 'react';
import { FileUploader } from './components/FileUploader';
import { LanguageSelector } from './components/LanguageSelector';
import { TextDisplay } from './components/TextDisplay';
import { ActionButtons } from './components/ActionButtons';
import { Stats } from './components/Stats';
import { NewReplacement } from './components/NewReplacement';
import { replacementData } from './data/replacementData';
import { SectionAnnotationDialog } from './components/SectionAnnotationDialog';
import { LyricsFetcher } from './components/LyricsFetcher';

export default function App() {
  const [replacementOptions, setReplacementOptions] = useState(replacementData);
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [text, setText] = useState('');
  const [processedText, setProcessedText] = useState([]);
  const [stats, setStats] = useState({ total: 0, replaced: 0 });
  const [isAnnotationDialogOpen, setIsAnnotationDialogOpen] = useState(false);
  const [annotations, setAnnotations] = useState([]);

  const handleAddAnnotation = (sectionType, annotationText) => {
    setAnnotations([...annotations, { type: sectionType, text: annotationText }]);
  };

  const processTextWithAnnotations = () => {
    if (!currentLanguage || !replacementOptions[currentLanguage]) {
      return;
    }

    const words = text.split(/(\s+)/);
    const processed = words.map((word, index) => {
      // ... existing word processing logic
    });

    // Insert annotations
    annotations.forEach((annotation, index) => {
      const position = Math.floor((index + 1) * processed.length / (annotations.length + 1));
      processed.splice(position, 0, {
        id: `annotation-${index}`,
        type: 'annotation',
        sectionType: annotation.type,
        text: annotation.text
      });
    });

    setProcessedText(processed);
    updateStats(processed);
  };

  useEffect(() => {

    if (currentLanguage && text) {
      processText();
    }
  }, [currentLanguage, text, replacementOptions, annotations]);

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Lyric Hider</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <FileUploader onFileUpload={handleFileUpload} />
          <LanguageSelector
            languages={Object.keys(replacementOptions)}
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
          <LyricsFetcher onLyricsFound={handleLyricsFound} />
          <ActionButtons
            onPaste={() => navigator.clipboard.readText().then(handleTextChange)}
            onToggleAll={handleToggleAll}
            onToggleRandom={handleToggleRandom}
            onCopyToClipboard={handleCopyToClipboard}
          />
        </div>
        <div>
          <Stats stats={stats} />
          <NewReplacement 
        onAddReplacement={handleAddReplacement} 
        processedText={processedText}
        onBulkReplace={handleBulkReplace}
      />
        </div>
      </div>
      <button
        onClick={() => setIsAnnotationDialogOpen(true)}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Section Annotation
      </button>
      <TextDisplay
        processedText={processedText}
        onToggleReplacement={handleToggleReplacement}
      />
    </div>
  );
}