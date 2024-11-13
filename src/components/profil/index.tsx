import { Button } from "../button";

const Profil = () => {
    return (
        <div className="w-full min-h-screen flex 100-dvh 100-dvw justify-center lg:justify-start relative z-[10]">
            <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-16 flex flex-col items-center content-center self-center">
                <div className=" lg:items-start lg:my-10 lg:mx-10 p-5 rounded-lg backdrop-blur-md backdrop-brightness-125 md:backdrop-filter-none">
                    <h1 className="text-xl font-bold">Bonjour 👋</h1>
                    <p className="pt-2 pb-2">
                        Je m'appelle Louis COBIGO. Je suis un{" "}
                        <strong>développeur web</strong> toujours à l’affût des
                        nouvelles technologies et des tendances du numérique.
                        Après avoir terminé mes études en alternance, j'ai
                        acquis une solide expérience pratique et une grande
                        curiosité qui me poussent à explorer des idées
                        innovantes. J’aime créer des interfaces intuitives et
                        dynamiques, et je cherche toujours à perfectionner mes
                        compétences pour offrir des solutions élégantes et
                        performantes.{" "}
                    </p>
                    <p>
                        Vous trouverez dans la section ci-dessous une sélection
                        de mes projets et de mes expérimentations : un aperçu de
                        mon savoir-faire et de ma créativité. N’hésitez pas à
                        explorer et à me contacter si mon univers vous parle !
                    </p>
                    <div>
                        {`>`}
                        <Button
                            onClick={() => console.log("clicked")}
                            className="custom-class">
                            <a href="">Télécharger mon CV</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profil;
