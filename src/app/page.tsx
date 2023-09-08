"use client";

import React from "react";

export default function Home() {
  // Add function to play a song located in public/song.mp3 when the button is clicked

  const playSong = () => {
    const audioEl: any = document.getElementsByClassName("audio-element")[0];
    audioEl.play();

    const button = document.querySelector("button");
    button && button.classList.add("jump");

    const per = document.querySelector(".per");
    per && per.classList.add("per-scale");
  };

  return (
    <main className="relative flex min-h-screen-d flex-col items-center justify-center bg-black">
      <button
        onClick={playSong}
        className="text-[12vw] relative z-10 font-bold text-center text-[#db2f85]"
      >
        GOSLING
      </button>
      <audio className="audio-element">
        <source src="song.mp3"></source>
      </audio>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="per"
        src="gosling.jpeg"
        className="absolute object-contain per top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0"
      />
    </main>
  );
}
