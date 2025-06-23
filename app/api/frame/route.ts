import { NextRequest, NextResponse } from 'next/server';
import { updateGame, createInitialState } from '../../../lib/game';
import { renderGameImage } from '../../../lib/render';

let gameState = createInitialState();

export async function GET(req: NextRequest) {
  const move = req.nextUrl.searchParams.get('move') as 'left' | 'right' | 'none';
  gameState = updateGame(gameState, move || 'none');

  const imgBuffer = await renderGameImage(gameState);

  return new NextResponse(imgBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'no-cache',
    },
  });
}
