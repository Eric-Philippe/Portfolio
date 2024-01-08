import { useEffect } from "react";
import { ParticlesDesign } from "../Animations/Particles";
import { FaCamera, FaDesktop } from "react-icons/fa";
import { drawCircle } from "../../utils/utils";
import RouterProps from "../../models/Router";

export default function Head({ setIsDev }: RouterProps) {
  const getMyAge = () => {
    const birthYear = 2003;
    const birthMonth = 5; // May

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;

    let age = currentYear - birthYear;

    if (currentMonth < birthMonth) {
      age--;
    }

    return age;
  };

  useEffect(() => {
    drawCircle(400, 0, 0, "#10b3c2");
    drawCircle(200, 600, 0, "#10c283");
    drawCircle(400, 800, 0, "#10c283");

    const canvas = document.getElementById("canvas-bubble");

    if (canvas) {
      setTimeout(() => {
        canvas.style.opacity = "1";
        canvas.style.transition = "opacity 0.5s ease-in-out";
      }, 1000);
    }
  }, []);

  return (
    <>
      <div className="relative">
        <ParticlesDesign color1="#10c283" color2="#10b3c2" />
        <div className="head-content">
          <div className="absolute top-0 left-0 right-0 h-72 z-[-1] opacity-20 pointer-events-none">
            <div
              className="fade-in"
              style={{
                width: "100%",
                height: "100%",
                animationDelay: "0.6s",
                animationDuration: "1s",
              }}
            >
              <canvas
                id="canvas-bubble"
                height="360"
                width="1241"
                style={{ width: "100%", height: "100%", opacity: 0 }}
              ></canvas>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-[#10c283] to-[#10b3c2]"></div>
          <header className="p-4 header-content">
            <div className="flex items-center justify-between">
              <a
                aria-label="Home"
                className="inline-block rounded-full"
                href="/"
              >
                Eric PHILIPPE
              </a>
              <nav className="space-x-4 text-sm text-gray-800 flex">
                <a
                  className="hover:underline flex items-center space-x-1.5"
                  onClick={() => setIsDev(true)}
                  style={{
                    zIndex: 10,
                    cursor: "pointer",
                  }}
                >
                  <FaDesktop className="mt-0.5 w-4" />
                  <span>Informatique</span>
                </a>
                <a
                  className="hover:underline flex items-center space-x-1.5"
                  onClick={() => setIsDev(false)}
                  style={{
                    zIndex: 10,
                    cursor: "pointer",
                  }}
                >
                  <FaCamera className="mt-0.5 w-4" />
                  <span>Photographie</span>
                </a>
              </nav>
            </div>
          </header>
        </div>

        <div className="py-8 lg:py-16 flex items-center px-6">
          <div className="text-center mx-auto inline-block">
            <div className="py-2 z-1 px-6 gradient-border-badge-photo relative bg-transparent inline-flex items-center justify-center">
              <span className="z-10 text-sm lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#10c283] to-[#10b3c2] font-semibold relative -top-px">
                PhotoPortfolio
              </span>
            </div>
            <h1 className="text-3xl lg:text-6xl leading-tight max-w-3xl font-bold tracking-tight mt-6 mx-auto">
              <a
                style={{
                  background:
                    "linear-gradient(to right, #10b3c2, #000000, #000000, #000000)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textDecoration: "none",
                }}
              >
                Éric PHILIPPE
              </a>{" "}
              - Photographe{" "}
              <a
                style={{
                  background:
                    "linear-gradient(to right, #000000, #000000, #10c283)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textDecoration: "none",
                }}
              >
                Amateur
              </a>
            </h1>
            <div className="max-w-3xl mx-auto lg:text-xl text-gray-600 mt-3 leading-normal font-light">
              Photographe amateur de {getMyAge()} ans, je prends des photos pour
              le plaisir et pour partager mes expériences.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
