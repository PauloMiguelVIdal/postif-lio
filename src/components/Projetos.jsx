import React from 'react';
import belmacio from '../img/img sites/logo barbearia.png';
import sitePersonal from '../img/img sites/gustavo capa.png';
import obank from '../img/img sites/obank.png';
import climaOpen from "../img/img sites/climaOpen.png";
import vaneStore from "../img/img sites/vaneStore.png"
import businessGame from "../img/img sites/logo Joguinho.png";
const Projetos = () => {
    const projetos = [
        // {
        //     id: 1,
        //     nome: 'Barbearia Belmacio',
        //     imagem: belmacio,
        //     tecnologias: ['HTML', 'CSS', 'JavaScript'],
        //     github: 'https://github.com/PauloMiguelVIdal/barbeariaBelmacio',
        //     deploy: 'https://barbearia-belmacio.vercel.app/',
        //     desc: 'Um site responsivo para uma barbearia, com informações sobre serviços e agendamentos.',
        //     situação: 'completo',
        // },
                {
            id: 6,
            nome: 'Business Game',
            imagem: businessGame,
            tecnologias: ['React', 'TailwindCSS', 'JavaScript',' Material UI','ChartJs'],
            github: 'https://github.com/PauloMiguelVIdal/joguinho-de-lojas',
            deploy: 'https://joguinho-de-lojas.vercel.app/',
            desc: 'Um jogo com economia variável e com inúmeras possibilidades de expansão.',
            situação: 'completo',
        },
        {
            id: 2,
            nome: 'Personal Gustavo',
            imagem: sitePersonal,
            tecnologias: ['React', 'CSS', 'JavaScript'],
            github: 'https://github.com/PauloMiguelVIdal/personalGustavo',
            deploy: 'https://personal-gustavo-three.vercel.app/',
            desc: 'Um projeto real de site para um personal trainer, com informações geração de ofertas e direcionamento para WhatsApp.',
            situação: 'completo',
        },
        {
            id: 3,
            nome: 'Vane Store',
            imagem: vaneStore,
            tecnologias: ['React', 'TailwindCSS', 'JavaScript',' Material UI',' Axios',' React Router','API'],
            github: 'https://github.com/PauloMiguelVIdal/teste-tailwind-form',
            deploy: 'https://teste-tailwind-form-9t2a.vercel.app/',
            desc: 'Um site de loja fictiícia, no qual consumi a API Fake Store para popular os produtos.',
            situação: 'completo',
        },
        {
            id: 4,
            nome: 'Clima Open',
            imagem: climaOpen,
            tecnologias: ['React', 'TailwindCSS', 'JavaScript','ChartJs',' Material UI',' Axios','API'],
            github: 'https://github.com/PauloMiguelVIdal/ClimaApi',
            deploy: 'https://clima-api-six.vercel.app/',
            desc: 'Um site de clima, com funcionalidades de temperatura e chuva.',
            situação: 'completo',
        },
        {
            id: 7,
            nome: 'Rocheli',
            imagem: vaneStore,
            tecnologias: ['React','Bcrypt','NodeJS','Express','MongoDB','TailwindCSS', 'JavaScript',' Material UI',' Axios',' React Router','API'],
            github: 'https://github.com/PauloMiguelVIdal/teste-tailwind-form',
            deploy: 'https://teste-tailwind-form-9t2a.vercel.app/',
            desc: 'Um site de loja de roupas no qual é possivel se cadastrar, fazer login e comprar produtos e adicionar produtos.',
            situação: 'completo',
        },
        {
            id: 5,
            nome: 'Obank',
            imagem: obank,
            tecnologias: ['React', 'TailwindCSS', 'JavaScript',' Material UI',' Axios',' React Router','API'],
            github: 'https://github.com/PauloMiguelVIdal/teste-tailwind-form',
            deploy: 'https://teste-tailwind-form-9t2a.vercel.app/',
            desc: 'Um site institucional fictício de um banco.',
            situação: 'completo',
        },

    ];

    return (
        <div
            id="projetos"
            className="projetos-container bg-gradient-to-b from-[#350973] to-[#131B64] min-h-screen w-full p-6 flex items-center justify-center"
        >
            <div className="max-w-7xl w-full">
                <h1 className="text-white text-3xl mb-6 font-bold do-hyeon-regular text-center">
                    Meus projetos
                </h1>
                <p className="text-white text-center mb-8">
                    Todos os meus projetos foram criados através de uma necessidade real ou através de sites que acharia interessante criar buscando fidelizar o máximo possível das minhas ideias
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projetos.map((projeto) => (
                        <div
                            key={projeto.id}
                            className="bg-[radial-gradient(circle_at_top_left,_#6411D9,_#350973,_#000000)] rounded-lg shadow-lg flex flex-col items-center p-4 h-full"
                        >
                            {/* Imagem com sobreposição se estiver em desenvolvimento */}
                            <div className="w-full aspect-square bg-black relative overflow-hidden rounded-lg flex items-center justify-center mb-4">
                                <img
                                    src={projeto.imagem}
                                    alt={projeto.nome}
                                    className="object-cover w-full h-full rounded-lg"
                                />
                                {projeto.situação.toLowerCase() === 'em desenvolvimento' && (
                                    <div className="absolute inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center rounded-lg">
                                        <span className="text-white text-lg font-bold">Em desenvolvimento</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col justify-between flex-grow w-full">
                                <h3 className="text-white text-xl font-semibold mb-2 text-center">
                                    {projeto.nome}
                                </h3>
                                <p className="text-white text-sm mb-4 text-center">
                                    {projeto.desc}
                                </p>

                                <div className="tecnologias flex flex-wrap justify-center mb-4">
                                    {projeto.tecnologias.map((tec, index) => (
                                        <span
                                            key={index}
                                            className="inline-block bg-purple-700 text-white text-sm px-2 py-1 rounded-full m-1"
                                        >
                                            {tec}
                                        </span>
                                    ))}
                                </div>

                                <div className="links mt-auto flex justify-center space-x-8">
                                    <a
                                        href={projeto.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:underline"
                                    >
                                        <i className="fab fa-github"></i> Código
                                    </a>
                                    <a
                                        href={projeto.deploy}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:underline"
                                    >
                                        <i className="fas fa-external-link-alt"></i> Deploy
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projetos;
