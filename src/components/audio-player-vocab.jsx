import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

const AudioPlayerVocab = ({ text, voiceName }) => {
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

        let specificVoice = voices.find((voice) => voice.name === voiceName);

        // Se não achar, procura voz com "English" e "United States" no nome
        if (!specificVoice) {
          console.warn(
            `${voiceName} voice not found. Searching for fallback English (United States) voice...`
          );
          specificVoice = voices.find(
            (voice) =>
              voice.name.toLowerCase().includes("english") &&
              voice.name.toLowerCase().includes("united states")
          );
        }

        // Se ainda não achar, pega qualquer voz com "English" no nome
        if (!specificVoice) {
          specificVoice = voices.find((voice) =>
            voice.name.toLowerCase().includes("english")
          );
        }

        // Se tudo falhar, usa a primeira disponível
        if (!specificVoice) {
          specificVoice = voices[0];
        }

        setSelectedVoice(specificVoice);
        setLoading(false);
      } else {
        console.warn("No voices available. Retrying...");
        setTimeout(loadVoices, 100);
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
    <div style={{ marginBottom: "1px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1px" }}>
        <button
          onClick={isPlaying ? stopAudio : startAudio}
          style={{
            fontSize: "0.5rem",
            padding: "5px 8px",
            margin: 0,
            border: "none",
            background: "transparent",
          }}
          disabled={loading}
        >
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
            style={{ margin: 0 }}
          />
        </button>
        <input
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          style={{ margin: "0 5px", width: "80px", height: "2px" }}
          disabled={loading}
        />
        <button
          onClick={stopAudio}
          style={{
            fontSize: "0.5rem",
            padding: "5px 8px",
            margin: 0,
            border: "none",
            background: "transparent",
          }}
          disabled={loading}
        >
          <FontAwesomeIcon icon={faStop} style={{ margin: 0 }} />
        </button>
      </div>

      {loading && (
        <div style={{ fontSize: "0.8rem", color: "gray" }}>
          Loading voices...
        </div>
      )}
    </div>
  );
};

export default AudioPlayerVocab;
