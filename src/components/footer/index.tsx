import gitIcon from "../marquee/toolsIcon/github.svg";
import linkedinIcon from "../marquee/toolsIcon/linkedin.svg";
import "./index.css";

const Footer = () => {
    return (
        <div className="relative z-[10] flex flex-col w-[100dvw] p-8 justify-center lg:justify-start">
            <h1 className="contact__title text-4xl flex justify-center lg:justify-start">
                CONTACT
            </h1>
            <a
                className="contact__email flex justify-center lg:justify-start mb-[10dvh] hover:font-bold"
                href="mailto:louis.cobigo@gmail.com"
                data-cursor="pointer">
                louis.cobigo@gmail.com
            </a>
            <div className="flex flex-row justify-center w-full justify-between items-end">
                <p className="text-gray-500 text-thin">© 2024 Louis Cobigo</p>
                <div className="flex flex-row justify-end">
                    <a
                        href="https://github.com/louis-cobi"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer">
                        <svg
                            className="w-[6dvh] m-2 hover:fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="gray">
                            <path d="M12 0.3c-6.63 0-12 5.37-12 12 0 5.31 3.44 9.8 8.21 11.39.6.11.79-.26.79-.57v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.76.08-.75.08-.75 1.22.09 1.87 1.26 1.87 1.26 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.4 3.02-.4 1.03 0 2.06.14 3.02.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22v3.29c0 .31.18.68.8.56 4.77-1.59 8.21-6.08 8.21-11.39 0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/louis-cobigo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer">
                        <svg
                            className="w-[6dvh] m-2 hover:fill-white" 
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="gray">
                            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.49c-1.14 0-2.07-.93-2.07-2.07 0-1.15.93-2.08 2.07-2.08s2.07.93 2.07 2.08c0 1.14-.93 2.07-2.07 2.07zm15.11 12.96h-3.56v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.66h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.27z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
