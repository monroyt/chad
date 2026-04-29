"use client";

import { useEffect, useRef, useState } from "react";
import { SmartImage } from "../ui/smart-image";

export default function ChadPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [needsTap, setNeedsTap] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = 1;
    const playRequest = audio.play();

    if (playRequest) {
      playRequest.catch(() => setNeedsTap(true));
    }
  }, []);

  const startAudio = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    await audio.play();
    setNeedsTap(false);
  };

  return (
    <main className="chad-scene" aria-label="Chad">
      <audio ref={audioRef} loop autoPlay preload="auto">
        <source src="/assets/tevez.mp3" type="audio/mpeg" />
        <source src="/assets/tevez.ogg" type="audio/ogg" />
        <source src="/assets/tevez.wav" type="audio/wav" />
      </audio>

      <section className="chad-stage">
        <SmartImage name="chad" alt="Chad" />
        <p className="chad-text">PUTO SI NO</p>
      </section>

      {needsTap && (
        <button className="audio-fallback" type="button" onClick={startAudio}>
          Activar audio
        </button>
      )}
    </main>
  );
}
