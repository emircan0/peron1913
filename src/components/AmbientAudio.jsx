import React from 'react';
import { Music2, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { media } from '../media';

const AMBIENT_VOLUME = 0.16;

export default function AmbientAudio() {
  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [needsStart, setNeedsStart] = React.useState(false);

  React.useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return undefined;
    }

    audio.volume = AMBIENT_VOLUME;
    const playbackAttempt = audio.play();

    if (playbackAttempt) {
      playbackAttempt
        .then(() => {
          setIsPlaying(true);
          setNeedsStart(false);
        })
        .catch(() => {
          setIsPlaying(false);
          setNeedsStart(true);
        });
    }

    return () => audio.pause();
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        setNeedsStart(false);
      } catch {
        setNeedsStart(true);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const toggleMute = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  const status = needsStart ? 'Başlat' : isPlaying ? (isMuted ? 'Sessiz' : 'Çalıyor') : 'Duraklatıldı';

  return (
    <aside className={`ambient-player${needsStart ? ' is-awaiting' : ''}`} aria-label="Fon müziği kontrolü">
      <audio
        ref={audioRef}
        src={media.ambientAudio}
        autoPlay
        loop
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className="ambient-player-label">
        <Music2 size={15} aria-hidden="true" />
        <span>Fon Müziği</span>
        <small>{status}</small>
      </div>
      <div className="ambient-player-actions">
        <button type="button" onClick={togglePlayback} aria-label={isPlaying ? 'Müziği durdur' : 'Müziği oynat'}>
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button type="button" onClick={toggleMute} aria-label={isMuted ? 'Sesi aç' : 'Sesi kapat'}>
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </aside>
  );
}
