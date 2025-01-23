import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';

const AudioPlayer = ({ text, voiceName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(true);
  const [availableVoices, setAvailableVoices] = useState([]);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length) {
        console.log("Available voices:", voices);
        setAvailableVoices(voices);
        const specificVoice = voices.find(voice => voice.name === voiceName);
        if (specificVoice) {
          setSelectedVoice(specificVoice);
        } else {
          console.warn(`${voiceName} voice not found. Using fallback voice.`);
          setSelectedVoice(voices[0]); // Usar a primeira voz disponível como fallback
        }
        setLoading(false);
      } else {
        console.warn("No voices available. Retrying...");
        setTimeout(loadVoices, 100); // Tentar novamente após 100ms
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [voiceName]);

  const startAudio = () => {
    console.log("Starting audio with voice:", selectedVoice);
    if (!selectedVoice) {
      console.warn("No voice selected!");
      return;
    }
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
    <div style={{ marginBottom: '5px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <button 
          onClick={isPlaying ? stopAudio : startAudio} 
          style={{ fontSize: '0.7rem', padding: '5px 8px' }} 
          disabled={loading} 
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <input
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          style={{ margin: '0 5px', width: '100px', height: '4px' }} 
          disabled={loading} 
        />
        <button 
          onClick={stopAudio} 
          style={{ fontSize: '0.8rem', padding: '5px 8px' }} 
          disabled={loading} 
        >
          <FontAwesomeIcon icon={faStop} />
        </button>
      </div>
      <div>
        <label style={{ fontSize: '0.8rem' }}>Rate: {rate.toFixed(1)}</label>
      </div>
      {loading && <div style={{ fontSize: '0.8rem', color: 'gray' }}>Loading voices...</div>}
    </div>
  );
};

export default AudioPlayer;