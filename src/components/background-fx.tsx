import { useEffect, useRef } from "react";

/**
 * Fundo interativo: um brilho radial que segue o ponteiro do mouse,
 * desenhado atrás de todo o conteúdo. A grade animada vem do `body::before`
 * (index.css); aqui adicionamos a camada que reage ao cursor.
 *
 * As coordenadas são escritas em custom properties (`--mx` / `--my`) via
 * requestAnimationFrame para evitar reflows a cada `mousemove`.
 */
export function BackgroundFX() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;

    const render = () => {
      frame = 0;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      el.style.setProperty("--active", "1");
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onLeave = () => el.style.setProperty("--active", "0");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} aria-hidden="true" className="pointer-glow" />;
}
