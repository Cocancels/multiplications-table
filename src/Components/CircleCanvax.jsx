import React, { useEffect, useRef } from "react";

const CircleCanvas = ({ numberOfPoints, multiplicationTable }) => {
  const canvasRef = useRef(null);
  const circleRadius = 200; // Rayon du cercle

  const getCenter = (canvas) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    return { centerX, centerY };
  };

  const drawPoint = (centerX, centerY, angleBetweenPoints, angleOffset) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    for (let i = 0; i < numberOfPoints; i++) {
      const angle = i * angleBetweenPoints + angleOffset;
      const x = centerX + circleRadius * Math.cos(angle);
      const y = centerY + circleRadius * Math.sin(angle);

      ctx.beginPath();
      ctx.arc(x, y, 3, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  const drawLine = (centerX, centerY, angleBetweenPoints, angleOffset) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    for (let i = 0; i < numberOfPoints; i++) {
      const startAngle = i * angleBetweenPoints + angleOffset;
      const endAngle =
        ((multiplicationTable * i) % numberOfPoints) * angleBetweenPoints +
        angleOffset;
      const startX = centerX + circleRadius * Math.cos(startAngle);
      const startY = centerY + circleRadius * Math.sin(startAngle);
      const endX = centerX + circleRadius * Math.cos(endAngle);
      const endY = centerY + circleRadius * Math.sin(endAngle);

      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
    }
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const angleBetweenPoints = (2 * Math.PI) / numberOfPoints;
    const { centerX, centerY } = getCenter(canvas);
    const angleOffset = -Math.PI / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPoint(centerX, centerY, angleBetweenPoints, angleOffset);
    drawLine(centerX, centerY, angleBetweenPoints, angleOffset);

    ctx.beginPath();
    ctx.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI);
    ctx.stroke();

    console.log("draw");
  }, [numberOfPoints, multiplicationTable]);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth / 2}
      height={window.innerHeight * 0.8}
      style={{ display: "block", margin: "auto" }}
    ></canvas>
  );
};

export default CircleCanvas;
