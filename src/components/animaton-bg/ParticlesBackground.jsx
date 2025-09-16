import React, { useRef, useEffect, useState } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const particlesArray = useRef([]);
  const [theme, setTheme] = useState("light"); // default

  useEffect(() => {
    // Detect system theme
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial theme  
    setTheme(darkQuery.matches ? "dark" : "light");

    // Listen for changes
    const handleThemeChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    darkQuery.addEventListener("change", handleThemeChange);

    return () => {
      darkQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Particle {
      constructor(x, y, size, dx, dy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.dx = dx;
        this.dy = dy;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = theme === "dark" ? "#3B82F6" : "#2563EB";
        ctx.fill();
      }
      update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > width) this.dx *= -1;
        if (this.y < 0 || this.y > height) this.dy *= -1;

        this.draw();
      }
    }

    function initParticles() {
      particlesArray.current = [];
      const numParticles = 60;
      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * width;
        const y = Math.random() * height;
        const dx = (Math.random() - 0.5) * 0.6;
        const dy = (Math.random() - 0.5) * 0.6;
        particlesArray.current.push(new Particle(x, y, size, dx, dy));
      }
    }

    function connectParticles() {
      for (let a = 0; a < particlesArray.current.length; a++) {
        for (let b = a; b < particlesArray.current.length; b++) {
          const dx = particlesArray.current[a].x - particlesArray.current[b].x;
          const dy = particlesArray.current[a].y - particlesArray.current[b].y;
          const distance = dx * dx + dy * dy;
          if (distance < 120 * 120) {
            ctx.beginPath();
            ctx.strokeStyle =
              theme === "dark"
                ? "rgba(96,165,250,0.2)"
                : "rgba(59,130,246,0.25)";
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray.current[a].x, particlesArray.current[a].y);
            ctx.lineTo(particlesArray.current[b].x, particlesArray.current[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.fillStyle = theme === "dark" ? "#000000" : "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      particlesArray.current.forEach((p) => p.update());
      connectParticles();
      requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]); // rerun when theme changes

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -10,
      }}
    />
  );
};

export default ParticlesBackground;
