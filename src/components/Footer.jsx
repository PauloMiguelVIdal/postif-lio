import React from 'react';

const Footer = () => {
    return (
        <footer className="footer h-screen w-screen bg-gradient-to-b from-[#131B64] to-black flex flex-col items-center justify-center text-white">
            <p>
                Conecte-se comigo no{' '}
                <a
                    href="https://www.linkedin.com/in/seu-perfil"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </p>
        </footer>
    );
};

export default Footer;