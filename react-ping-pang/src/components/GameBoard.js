import { useEffect, } from 'react';

import '../styles/GameBoard.css';

function GameBoard() {
  useEffect(() => {

    var canvas = document.getElementById("game-board");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
    var ballRadius = 10;
    var x = canvas.width / 2;
    var y = canvas.height - 30;
    var dx = 2;
    var dy = -2;

    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();

      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
      }

      x += dx;
      y += dy;
    }

    setInterval(draw, 10);

    return () => {
      console.log('cleanup');
    }
  }, [])

  return (

    <div>
      <canvas id="game-board" className="game-board" ></canvas>
    </div>
  );
}

export default GameBoard;
