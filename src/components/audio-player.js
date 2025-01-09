import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';

const AudioPlayer = ({ text, voiceName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1); 

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      const specificVoice = availableVoices.find(voice => voice.name === voiceName);
      if (specificVoice) {
        setSelectedVoice(specificVoice);
      } else {
        console.warn(`${voiceName} voice not found. Using the first available voice.`);
        setSelectedVoice(availableVoices[0]);
      }
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, [voiceName]);

  const startAudio = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice; 
    utterance.rate = rate; 
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const stopAudio = () => {
    window.speechSynthesis.cancel(); 
    setIsPlaying(false); 
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Audio Player</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={isPlaying ? stopAudio : startAudio}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <input
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          style={{ margin: '0 10px' }}
        />
        <button onClick={stopAudio}>
          <FontAwesomeIcon icon={faStop} />
        </button>
      </div>
      <div>
        <label>Rate: {rate.toFixed(1)}</label>
      </div>
    </div>
  );
};

export default AudioPlayer;