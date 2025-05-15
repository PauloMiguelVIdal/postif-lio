import React from "react";
import github from "../img/icons portifólio/github.png"
import linkedin from "../img/icons portifólio/linkedin.png"
import curriculo from "../img/icons portifólio/cv.png"
import code from "../icons/programacao.png"
import fotoPerfil from "../img/foto de perfil.jpg"
function Home() {
    return (
        <div id="home" className="h-screen w-screen bg-black flex flex-col items-center">
            <div className="absolute top-4 left-4">
                <img className="w-16" src={code} alt="Code Icon" />
            </div>
            <ul className="barraMenu flex items-center justify-center space-x-8 py-4">
                <li className="do-hyeon-regular text-white cursor-pointer hover:text-[#F28705]"> <a href="#projetos"></a>HOME</li>
                <li className="do-hyeon-regular text-white cursor-pointer hover:text-[#F28705]">INTRODUÇÃO</li>
                <li className="do-hyeon-regular text-white cursor-pointer hover:text-[#F28705]">TECNOLOGIAS</li>
                <li className="do-hyeon-regular text-white cursor-pointer hover:text-[#F28705]"><a href="#projetos" />PORTIFÓLIO</li>
            </ul>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-32 px-4 lg:px-16">
                <div className="containerFoto overflow-hidden rounded-full w-48 h-48 lg:w-64 lg:h-64">
                    <img className="w-full h-full object-cover" src={fotoPerfil} alt="Foto de Perfil" />
                </div>
                <div className="containerDireita flex flex-col items-center lg:items-start lg:ml-16 mt-8 lg:mt-0 text-center lg:text-left">
                    <h1 className="inter text-4xl lg:text-5xl text-white">Olá!</h1>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start mt-4">
                        <h1 className="inter text-lg lg:text-xl text-white">Sou</h1>
                        <h1 className="inter text-3xl lg:text-5xl text-[#F28705] font-bold lg:pl-4">
                            Paulo Miguel
                        </h1>
                    </div>
                    <div className="containerCentral mt-4">
                        <h3 className="inter text-white text-sm lg:text-base leading-relaxed">
                            "Estudante de programação há cerca de 2 anos, com foco em <br />
                            desenvolvimento web usando Javascript e React. Estou buscando<br />
                            minha primeira oportunidade na área para continuar aprendendo e<br />
                            contribuindo com minhas habilidades."
                        </h3>
                    </div>
                    <div className="containerIcons flex justify-center lg:justify-start space-x-4 mt-6">
                        <button className="containerP hover:bg-[#F28705] p-2 rounded-full">
                            <a href="https://github.com/PauloMiguelVIdal/" target="_blank" rel="noopener noreferrer">
                                <img className="w-8 lg:w-10" src={github} alt="GitHub" />
                            </a>
                        </button>
                        <button className="containerP hover:bg-[#F28705] p-2 rounded-full">
                            <a href="www.linkedin.com/in/paulo-miguel-vidal-da-silva" target="_blank" rel="noopener noreferrer">
                                <img className="w-8 lg:w-10" src={linkedin} alt="LinkedIn" />
                            </a>
                        </button>
                        <button className="containerP hover:bg-[#F28705] p-2 rounded-full">
                            <img className="w-8 lg:w-10" src={curriculo} alt="Currículo" />
                        </button>
                    </div>
                </div>
            </div>
            <h1 className="do-hyeon-regular text-2xl lg:text-4xl text-white mt-8 lg:mt-16 text-center">
                DESENVOLVEDOR WEB
            </h1>
        </div>
    )
}

export default Home