import { createCanvas } from 'canvas';
import type { GameState } from './game';

export async function renderGameImage(state: GameState): Promise<Buffer> {
  const canvas = createCanvas(300, 200);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 300, 200);

  // Player Paddle
  ctx.fillStyle = '#0f0';
  ctx.fillRect(state.playerX, 190, 50, 5);

  // AI Paddle
  ctx.fillStyle = '#f00';
  ctx.fillRect(state.aiX, 5, 50, 5);

  // Ball
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(state.ballX, state.ballY, 5, 0, Math.PI * 2);
  ctx.fill();

  // Score
  ctx.fillStyle = '#fff';
  ctx.font = '14px Arial';
  ctx.fillText(`Score: ${state.score}`, 10, 20);

  return canvas.toBuffer('image/png');
}
