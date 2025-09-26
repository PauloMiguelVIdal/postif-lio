import React from "react";
import computador from "../img/icons portifólio/computador-portatil.png";
import usuario from "../img/icons portifólio/avatar-de-perfil.png";

function Introducao() {
  return (
    <div
      id="introducao"
      className="min-h-screen w-full bg-gradient-to-b from-black to-[#350973] flex flex-col items-center pt-10 px-4"
    >
      {/* SOBRE MIM */}
      <div className="w-full max-w-5xl bg-[#6411D9] rounded-[20px] p-6 md:p-10 shadow-lg mb-10">
        <h1 className="do-hyeon-regular text-3xl md:text-5xl text-[#F28705] text-center md:text-left mb-6">
          SOBRE MIM
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="inter text-white text-justify text-base leading-relaxed md:w-[80%]">
            Desde cedo, percebi que a busca por aprendizado é algo natural para
            mim. Sempre fui motivado por <strong>novos desafios</strong> e, ao
            descobrir a <strong>programação</strong>, vi que essa área seria
            uma excelente forma de canalizar essa curiosidade. Além de gostar
            de acompanhar os <strong>avanços tecnológicos</strong>, encontrei
            na programação uma maneira de estar sempre aprendendo e evoluindo,
            enquanto crio <strong>soluções práticas</strong> e{" "}
            <strong>inovadoras</strong>.
          </p>
          <img
            className="h-24 w-24 md:h-28 md:w-28 rounded-full border-4 border-[#F28705] object-cover"
            src={usuario}
            alt="Foto de perfil"
          />
        </div>
      </div>

      {/* OBJETIVOS FUTUROS */}
      <div className="w-full max-w-5xl bg-[#6411D9] rounded-[20px] p-6 md:p-10 shadow-lg">
        <h1 className="do-hyeon-regular text-3xl md:text-5xl text-[#F28705] text-center md:text-left mb-6">
          OBJETIVOS FUTUROS
        </h1>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img
            src={computador}
            alt="Computador"
            className="h-24 w-24 md:h-28 md:w-28 object-contain mx-auto md:mx-0"
          />
          <p className="inter text-white text-justify text-base leading-relaxed">
            Atualmente, estou focado em aprimorar minhas habilidades no{" "}
            <strong>front-end</strong>, especialmente com{" "}
            <strong>React</strong>, para dominar completamente essa área. Além
            disso, estou expandindo meus conhecimentos no{" "}
            <strong>back-end</strong>, buscando uma base sólida em tecnologias
            como <strong>Express</strong> e <strong>Node.js</strong>. Meu
            objetivo é me tornar um <strong>desenvolvedor full-stack</strong>,
            capaz de criar aplicações completas e robustas, combinando um{" "}
            <strong>front-end moderno</strong> com um{" "}
            <strong>back-end eficiente</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introducao;
