import { Button } from "../button";

const Terminal = () => {
    return (
        <div className="flex items-center justify-center h-[75dvh] w-screen relative z-[10]">
            <div
                className="text-white p-6 rounded-lg w-[80dvw] lg:max-w-md font-mono"
                style={{ backgroundColor: "rgb(0 0 0 / 90%)", boxShadow:" 0px 8px 10px #000000" }}>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2 text-red-500">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <p className="text-sm">{`>_`}</p>
                </div>
                <div className="mt-4">
                    <p className="text-green-400">$ npm install louis-cobigo</p>
                    <p className="text-white">+ louis-cobigo@1.0.0</p>
                    <p className="text-white">
                        added 1 package, and audited 2 packages in 3s
                    </p>
                    <div className="flex items-center">
                        <p className="text-green-400">$</p>
                        <Button>Click to download CV</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
