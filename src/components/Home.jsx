import React from "react";
import github from "../img/icons portifólio/github.png";
import linkedin from "../img/icons portifólio/linkedin.png";
import curriculo from "../img/icons portifólio/cv.png";
// import code from "../icons/programacao.png";
import fotoPerfil from "../img/foto de perfil.jpg";

function Home() {
    return (
        <section
            id="home"
            className="min-h-screen w-screen bg-black flex flex-col items-center"
            aria-label="Seção inicial do portfólio"
        >
            {/* Ícone de código */}
            {/* <div className="absolute top-4 left-4">
                <img className="w-16" src={code} alt="Ícone de programação" />
            </div> */}

            {/* Menu de navegação */}
            <nav className="hidden lg:flex barraMenu items-center justify-center space-x-8 py-4" aria-label="Menu principal">

                {/* <li className="do-hyeon-regular text-white cursor-pointer hover:text-[#F28705]">
                    <a href="#home">HOME</a>
                </li> */}
                <li className="do-hyeon-regular text-white cursor-pointer hover:text-[#F28705]">
                    <a href="#introducao">INTRODUÇÃO</a>
                </li>
                <li className="do-hyeon-regular text-white cursor-pointer hover:text-[#F28705]">
                    <a href="#tecnologia">TECNOLOGIAS</a>
                </li>
                <li className="do-hyeon-regular text-white cursor-pointer hover:text-[#F28705]">
                    <a href="#projetos">PORTFÓLIO</a>
                </li>
            </nav>

            {/* Conteúdo principal */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-10 lg:mt-32 px-4 lg:px-16 text-white">
                {/* Foto de perfil */}
                <div className=" overflow-hidden rounded-full w-48 h-48 lg:w-64 lg:h-64 border-4 border-[#F28705]">
                    <img
                        className="w-full h-full object-cover"
                        src={fotoPerfil}
                        alt="Foto de Paulo Miguel"
                    />
                </div>

                {/* Texto e redes */}
                <div className="containerDireita flex flex-col items-center lg:items-start lg:ml-16 mt-8 lg:mt-0 text-center lg:text-left">
                    <h1 className="inter text-4xl lg:text-5xl text-white">Olá!</h1>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start mt-4">
                        <h2 className="inter text-lg lg:text-xl text-white">Sou</h2>
                        <h2 className="inter text-3xl lg:text-5xl text-[#F28705] font-bold lg:pl-4">
                            Paulo Miguel
                        </h2>
                    </div>
                    <p className="containerCentral mt-4 inter text-white text-sm lg:text-base leading-relaxed">
                        Estudante de programação há cerca de 3 anos, com foco em <br />
                        desenvolvimento web usando Javascript e React. Estou buscando<br />
                        minha primeira oportunidade na área para continuar aprendendo e<br />
                        contribuindo com minhas habilidades.
                    </p>

                    {/* Ícones de redes sociais */}
                    <div className="containerIcons flex justify-center lg:justify-start space-x-4 mt-6 flex-wrap" aria-label="Links de contato">
                        <a
                            href="https://github.com/PauloMiguelVIdal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="containerP hover:bg-[#F28705] p-2 rounded-full inline-block"
                        >
                            <img className="w-8 lg:w-10" src={github} alt="GitHub" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/paulo-miguel-vidal-da-silva"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="containerP hover:bg-[#F28705] p-2 rounded-full inline-block"
                        >
                            <img className="w-8 lg:w-10" src={linkedin} alt="LinkedIn" />
                        </a>

                        <a
                            href="/public/PauloMiguel_CV-LATEX.pdf"
                            download
                            aria-label="Currículo PDF"
                            className="containerP hover:bg-[#F28705] p-2 rounded-full inline-block"
                        >
                            <img className="w-8 lg:w-10" src={curriculo} alt="Currículo" />
                        </a>
                    </div>

                </div>
            </div>

            {/* Título final */}
            <h2 className="do-hyeon-regular text-2xl lg:text-4xl text-white mt-8 lg:mt-16 text-center">
                DESENVOLVEDOR WEB
            </h2>
        </section>
    );
}

export default Home;
