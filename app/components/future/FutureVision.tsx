"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function FutureVision() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const updateParticle = (p: Particle) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    };

    const drawParticle = (p: Particle) => {
      if (!ctx) return;
      ctx.fillStyle = "rgba(59, 130, 246, 0.5)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    };

    const animateNeural = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        updateParticle(p1);
        drawParticle(p1);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (distance < 150) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animateNeural);
    };

    resize();
    initParticles();
    animateNeural();

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="future"
      className="py-32 bg-black relative flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} id="neural-canvas" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-12">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
          「探す」という行為から、
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-white">
            人々を解放する。
          </span>
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto"></div>
        <p className="font-serif text-slate-400 text-lg leading-loose max-w-2xl mx-auto">
          技術と現場の橋渡し役として。
          <br />
          文脈を考慮したSNSテキストの感情分析（BERT）など、
          <br />
          曖昧な言葉を価値ある情報へ変換するシステムを構築し、
          <br />
          創造や自己実現に集中できる社会インフラを実装します。
        </p>
      </div>
    </section>
  );
}
