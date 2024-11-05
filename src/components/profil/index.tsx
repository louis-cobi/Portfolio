import { Button } from "../button"

const Profil = () => {

    return (
        <div className="w-full min-h-screen flex 100-dvh 100-dvw justify-center lg:justify-start relative z-[10]">
            <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-16 flex flex-col items-center content-center self-center">
                <div className=" lg:items-start lg:my-10 lg:mx-10 p-5 rounded-lg backdrop-blur-md backdrop-brightness-125 md:backdrop-filter-none">
                    <p>Bonjour 👋</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Button
                        onClick={() => console.log('clicked')}
                        className="custom-class"
                    >
                        <a href="">Télécharger mon CV</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Profil