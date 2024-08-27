import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './BgCanvas.css';

const BgCanvas = () => {
  const bgCanvasRef = useRef();
  const binaryWords = useRef([]);

  useEffect(() => {
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    bgCanvasRef.current.width = WIDTH;
    bgCanvasRef.current.height = HEIGHT;
    const bgContext = bgCanvasRef.current.getContext('2d');

    const cellSize = 50;
    const cols = Math.floor(WIDTH / cellSize);
    const rows = Math.floor(HEIGHT / cellSize);

    const generateValues = () => {
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellSize;
          const y = row * cellSize;
          const value = Math.round(Math.random());
          binaryWords.current.push({ x, y, value });
        }
      }
    };

    const drawGrid = () => {
      bgContext.fillStyle = '#777';
      bgContext.font = '10px Arial';
      bgContext.textAlign = 'center';
      bgContext.textBaseline = 'middle';

      binaryWords.current.forEach(binary => {
        bgContext.fillText(binary.value, binary.x + cellSize / 2, binary.y + cellSize / 2);
      });
    };

    const animateBg = () => {
      bgContext.clearRect(0, 0, WIDTH, HEIGHT);
      binaryWords.current.forEach(binary => {
        binary.y -= 0.3;

        if (binary.y < 50) {
          binary.y = HEIGHT;
        }

        bgContext.fillText(binary.value, binary.x + cellSize / 2, binary.y + cellSize / 2);
      });

      requestAnimationFrame(animateBg);
    };

    generateValues();
    drawGrid();
    animateBg();
  }, []);

  return <canvas ref={bgCanvasRef} id="bg-canvas"></canvas>;
};

export default BgCanvas;