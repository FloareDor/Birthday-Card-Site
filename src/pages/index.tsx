import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });

      const cursorDot = cursorDotRef.current;
      if (cursorDot) {
        cursorDot.style.left = `${clientX}px`;
        cursorDot.style.top = `${clientY}px`;
      }
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex h-screen w-screen items-center justify-center relative overflow-hidden custom-cursor"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 50px, #ffffff 51px)`,
        backgroundSize: "20px 20px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FCC6E2] via-[#FF69B4] to-[#FCC6E2] animate-gradient"></div>
      <div className="flex flex-col items-center z-10">
        <span className="text-center text-4xl font-bold">
          ✨Happy Birthday Lorem!🎈
        </span>
        <div className="mt-6">
          <Link href="/birthday-card.html">
            <button
              className="rounded-lg bg-yellow-300 px-6 py-3 bg-gradient-to-tr from-[#FF69B4] via-[#ff89c6] to-[#ffa0d1] animate-gradient outline-1 outline outline-[#ff86c5] hover:bg-[#ffa0d1] transform active:scale-90 active:outline-[#fdbedd] duration-75 cursor-none"
              style={{ cursor: "none" }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="text-lg font-bold">Click</span>
            </button>
          </Link>
        </div>
      </div>
      <div
        ref={cursorDotRef}
        className={`cursor-dot ${isHovering ? "hover" : ""}`}
      >
        🎂
      </div>
    </div>
  );
}