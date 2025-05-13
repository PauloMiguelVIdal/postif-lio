import React from "react";
import computador from "../img/icons portifólio/computador-portatil.png"
import usuario from "../img/icons portifólio/avatar-de-perfil.png"


function Introducao() {
    return (
        <div className=" h-screen w-screen bg-gradient-to-b from-black to-[#350973] flex flex-col items-center pt-10">
            {/* BLOCO SOBRE MIM */}
            <div className="relative w-[60%] bg-[#350973] rounded-[20px] p-6 shadow-xl z-10">
                <h1 className="do-hyeon-regular text-[50px] text-[#F28705]">SOBRE MIM</h1>
                <div className="flex justify-between items-center mt-4">
                    <p className="inter text-white w-[80%] pr-4">
                        Desde cedo, percebi que a busca por aprendizado é algo natural para mim. Sempre fui motivado por <strong>novos desafios</strong> e, ao descobrir a <strong>programação</strong>, vi que essa área seria uma excelente forma de canalizar essa curiosidade. Além de gostar de acompanhar os <strong>avanços tecnológicos</strong>, encontrei na programação uma maneira de estar sempre aprendendo e evoluindo, enquanto crio <strong>soluções práticas</strong> e <strong>inovadoras</strong>.
                    </p>
                    <img className="h-[100px] rounded-full border-4 border-[#F28705]" src={usuario} alt="Usuário" />
                </div>
            </div>
    
            {/* BLOCO OBJETIVOS FUTUROS */}
            <div className="relative w-[60%] bg-[#350973] rounded-[20px] p-6 mt-10 shadow-xl z-10">
                <h1 className="do-hyeon-regular text-[50px] text-[#F28705]">OBJETIVOS FUTUROS</h1>
                <p className="inter text-white mt-4">
                    Atualmente, estou focado em aprimorar minhas habilidades no <strong>front-end</strong>, especialmente com <strong>React</strong>, para dominar completamente essa área. Além disso, estou expandindo meus conhecimentos no <strong>back-end</strong>, buscando uma base sólida em tecnologias como <strong>ASP.NET</strong> e <strong>Python</strong>. Meu objetivo é me tornar um <strong>desenvolvedor full-stack</strong>, capaz de criar aplicações completas e robustas, combinando um <strong>front-end moderno</strong> com um <strong>back-end eficiente</strong>.
                </p>
            </div>
    
            {/* IMAGEM DECORATIVA */}
            {/* <img src={computador} className="w-[500px] rotate-[-45deg] absolute right-0 bottom-[200px] z-0 opacity-30 pointer-events-none" alt="Computador decorativo" /> */}
        </div>
    );
    
}

export default Introducao