import React, { useEffect } from "react";

const bubbleCount = 15;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AnimatedBackground() {
  useEffect(() => {
    const container = document.getElementById("animated-background");
    if (!container) return;

    // Create bubbles
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.left = `${getRandomInt(0, 100)}vw`;
      bubble.style.width = `${getRandomInt(10, 30)}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.animationDelay = `${getRandomInt(0, 20)}s`;
      container.appendChild(bubble);
    }

    // Create fish emojis
    const fishEmojis = ["🐟", "🐠", "🐡", "🦈", "🐬"];
    for (let i = 0; i < fishEmojis.length; i++) {
      const fish = document.createElement("div");
      fish.className = "fish";
      fish.style.top = `${getRandomInt(10, 80)}vh`;
      fish.style.animationDelay = `${i * 5}s`;
      fish.textContent = fishEmojis[i];
      container.appendChild(fish);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return <div id="animated-background" style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1, overflow: "hidden" }}></div>;
}

export default AnimatedBackground;
