export type GameState = {
    playerX: number;
    aiX: number;
    ballX: number;
    ballY: number;
    ballVX: number;
    ballVY: number;
    score: number;
  };
  
  export function createInitialState(): GameState {
    return {
      playerX: 120,
      aiX: 120,
      ballX: 150,
      ballY: 100,
      ballVX: 2,
      ballVY: 2,
      score: 0,
    };
  }
  
  export function updateGame(state: GameState, move: 'left' | 'right' | 'none'): GameState {
    const newState = { ...state };
  
    // Move player
    if (move === 'left') newState.playerX -= 10;
    if (move === 'right') newState.playerX += 10;
    newState.playerX = Math.max(0, Math.min(240, newState.playerX));
  
    // AI follows ball
    if (newState.aiX + 25 < newState.ballX) newState.aiX += 2;
    else if (newState.aiX + 25 > newState.ballX) newState.aiX -= 2;
  
    // Ball
    newState.ballX += newState.ballVX;
    newState.ballY += newState.ballVY;
  
    if (newState.ballX <= 0 || newState.ballX >= 295) newState.ballVX *= -1;
  
    if (newState.ballY >= 190 && newState.ballX >= newState.playerX && newState.ballX <= newState.playerX + 50) {
      newState.ballVY *= -1;
      newState.score++;
    }
  
    if (newState.ballY <= 10 && newState.ballX >= newState.aiX && newState.ballX <= newState.aiX + 50) {
      newState.ballVY *= -1;
    }
  
    if (newState.ballY > 200) return createInitialState();
  
    return newState;
  }
  