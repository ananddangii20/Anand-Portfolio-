import { useEffect, useRef } from "react";

const Galaxy = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let raf = 0;
        let t = 0;
        const pointer = {
            x: width / 2,
            y: height / 2,
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();

        const starCount = Math.max(140, Math.floor((width * height) / 10000));
        const stars = Array.from({ length: starCount }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * 0.9 + 0.2,
            size: Math.random() * 1.4 + 0.2,
            speed: Math.random() * 0.14 + 0.03,
            twinkleSeed: Math.random() * Math.PI * 2,
        }));

        const shootingStars = Array.from({ length: 3 }).map(() => ({
            active: false,
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            life: 0,
            ttl: 0,
        }));

        const nebulas = [
            { x: 0.22, y: 0.24, radius: 360, color: "56, 189, 248", alpha: 0.2 },
            { x: 0.78, y: 0.7, radius: 340, color: "14, 165, 233", alpha: 0.16 },
            { x: 0.52, y: 0.42, radius: 300, color: "244, 114, 182", alpha: 0.08 },
        ];

        const drawNebula = () => {
            nebulas.forEach((nebula, idx) => {
                const driftX = Math.sin(t * 0.00008 + idx) * 20;
                const driftY = Math.cos(t * 0.00006 + idx * 0.8) * 14;
                const x = width * nebula.x + driftX;
                const y = height * nebula.y + driftY;
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, nebula.radius);

                gradient.addColorStop(0, `rgba(${nebula.color}, ${nebula.alpha})`);
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, nebula.radius, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        const animate = () => {
            t += 16;
            ctx.clearRect(0, 0, width, height);
            drawNebula();

            stars.forEach((star) => {
                star.y += star.speed;

                if (star.y > height + 4) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }

                const pointerX = ((pointer.x - width / 2) / width) * (3.5 * star.z);
                const pointerY = ((pointer.y - height / 2) / height) * (2.5 * star.z);
                const brightness = 0.45 + 0.55 * Math.sin(t * 0.0015 + star.twinkleSeed);
                const alpha = 0.35 + brightness * 0.75;

                ctx.beginPath();
                ctx.fillStyle = `rgba(226, 232, 240, ${alpha})`;
                ctx.arc(star.x + pointerX, star.y + pointerY, star.size * star.z, 0, Math.PI * 2);
                ctx.fill();
            });

            if (Math.random() < 0.018) {
                const slot = shootingStars.find((shootingStar) => !shootingStar.active);
                if (slot) {
                    slot.active = true;
                    slot.x = Math.random() * width * 0.7;
                    slot.y = Math.random() * height * 0.45;
                    slot.vx = 6 + Math.random() * 3;
                    slot.vy = 1.3 + Math.random() * 1.7;
                    slot.life = 0;
                    slot.ttl = 28 + Math.floor(Math.random() * 20);
                }
            }

            shootingStars.forEach((shootingStar) => {
                if (!shootingStar.active) {
                    return;
                }

                shootingStar.life += 1;
                shootingStar.x += shootingStar.vx;
                shootingStar.y += shootingStar.vy;

                const fade = 1 - shootingStar.life / shootingStar.ttl;
                const trailLength = 120;
                const startX = shootingStar.x;
                const startY = shootingStar.y;
                const endX = shootingStar.x - trailLength;
                const endY = shootingStar.y - trailLength * 0.15;

                const trail = ctx.createLinearGradient(startX, startY, endX, endY);
                trail.addColorStop(0, `rgba(191, 219, 254, ${0.95 * fade})`);
                trail.addColorStop(1, "rgba(186, 230, 253, 0)");

                ctx.strokeStyle = trail;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                if (shootingStar.life >= shootingStar.ttl) {
                    shootingStar.active = false;
                }
            });

            raf = requestAnimationFrame(animate);
        };

        animate();

        const handlePointer = (event: MouseEvent) => {
            pointer.x = event.clientX;
            pointer.y = event.clientY;
        };

        const handleResize = () => {
            resize();
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handlePointer, { passive: true });

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handlePointer);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full block"
        />
    );
};

export default Galaxy;