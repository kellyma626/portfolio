"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const TRACK_URL = "https://api.soundcloud.com/tracks/918283489";
const SONG = {
  title: "mr. golden sun",
  artist: "Super Simple Songs",
  link: "https://soundcloud.com/supersimplesongs/mr-golden-sun-sing-along",
};
const VOLUME = 40;

const DANCE = ["♪┏(・o･)┛♪", "♪┗(・o･)┓♪"];
const DANCE_SPEED = 700;

type SCWidget = {
  play(): void;
  pause(): void;
  seekTo(ms: number): void;
  setVolume(volume: number): void;
  bind(event: string, callback: () => void): void;
};

declare global {
  interface Window {
    SC?: {
      Widget: ((iframe: HTMLIFrameElement) => SCWidget) & { Events: Record<string, string> };
    };
  }
}

const playerSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(TRACK_URL)}&auto_play=false&visual=false`;

export default function MusicToggle() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<SCWidget | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  const setup = () => {
    if (!window.SC || !iframeRef.current || widgetRef.current) return;
    const widget = window.SC.Widget(iframeRef.current);
    const events = window.SC.Widget.Events;
    widget.bind(events.READY, () => {
      widget.setVolume(VOLUME);
      setReady(true);
    });
    widget.bind(events.PLAY, () => setPlaying(true));
    widget.bind(events.PAUSE, () => setPlaying(false));
    // loop the song
    widget.bind(events.FINISH, () => {
      widget.seekTo(0);
      widget.play();
    });
    widgetRef.current = widget;
  };

  useEffect(setup, []);

  const [frame, setFrame] = useState(0);
  useEffect(() => {
    if (!playing) {
      setFrame(0);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setFrame((f) => (f + 1) % DANCE.length), DANCE_SPEED);
    return () => clearInterval(id);
  }, [playing]);

  const toggle = () => {
    const widget = widgetRef.current;
    if (!widget) return;
    if (playing) widget.pause();
    else widget.play();
  };

  return (
    <>
      <Script src="https://w.soundcloud.com/player/api.js" strategy="afterInteractive" onReady={setup} />
      <iframe
        ref={iframeRef}
        src={playerSrc}
        title="music player"
        allow="autoplay; encrypted-media"
        aria-hidden
        tabIndex={-1}
        className="pointer-events-none fixed bottom-0 right-0 h-px w-px opacity-0"
      />

      <div className="fixed bottom-5 right-5 z-20 flex flex-col items-end gap-2">
        {playing && (
          <a
            href={SONG.link}
            target="_blank"
            rel="noreferrer"
            className="link-underline rounded-full bg-cream/90 px-3 py-1 text-xs leading-4 text-muted backdrop-blur-xs"
          >
            {SONG.title} · {SONG.artist} · soundcloud ↗
          </a>
        )}

        <button
          type="button"
          onClick={toggle}
          disabled={!ready}
          aria-pressed={playing}
          aria-label={playing ? "pause music" : "play music"}
          title={playing ? "pause music" : "play music"}
          className={`flex h-9.5 cursor-pointer items-center gap-2 rounded-full bg-cream/90 px-4 text-sm leading-5 backdrop-blur-xs transition-colors disabled:cursor-wait disabled:opacity-60 ${
            playing ? "text-accent" : "text-muted hover:text-ink"
          }`}
        >
          <span aria-hidden className="whitespace-nowrap text-base">
            {DANCE[frame]}
          </span>
        </button>
      </div>
    </>
  );
}
