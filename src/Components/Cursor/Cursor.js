import React, { useEffect } from "react";

function Cursor() {
	useEffect(() => {
		const canvas = document.getElementById("scene");
		const ctx = canvas.getContext("2d");
		let width = window.innerWidth;
		let height = window.innerHeight;
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		let ballX = x;
		let ballY = y;
		handleResize();

		function drawBall() {
			ctx.beginPath();

			ballX += (x - ballX) * 0.1;
			ballY += (y - ballY) * 0.1;

			ctx.arc(ballX, ballY, 8, 0, 2 * Math.PI);
			ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
			ctx.stroke();

			ctx.fillStyle = "green";
			// ctx.fill();
		}

		function loop() {
			ctx.clearRect(0, 0, width, height);
			drawBall();
			requestAnimationFrame(loop);
		}

		loop();

		function handleMouseMove(e) {
			x = e.clientX;
			y = e.clientY;
		}

		function handleResize() {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;

			window.addEventListener("resize", handleResize);
			window.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<canvas
			className='cursor-wrapper w-screen h-screen fixed top-0 left-0 z-50  pointer-events-none'
			id='scene'
		></canvas>
	);
}

export default Cursor;
