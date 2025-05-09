import React from "react";
import html from "../img/icons portifólio/html.png"


function Tecnologia() {
    return (
      <div className="h-[100vh] w-[100vw] bg-black flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl mb-6 font-bold">TECNOLOGIAS</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-[20px] bg-[#F28705] w-[200px] h-[200px] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            >
              <img src={html} alt="HTML" className="w-[80px] h-[80px]" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default Tecnologia