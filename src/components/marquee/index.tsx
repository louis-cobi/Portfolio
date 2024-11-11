import Marquee from "react-fast-marquee";

import reactIcon from "./techIcon/react.svg";
import cssIcon from "./techIcon/css.svg";
import htmlIcon from "./techIcon/html.svg";
import javascriptIcon from "./techIcon/javascript.svg";
import mongodbIcon from "./techIcon/mongodb.svg";
import nodejsIcon from "./techIcon/nodejs.svg";
import threeIcon from "./techIcon/three.svg";
import typescriptIcon from "./techIcon/typescript.svg";

import figmaIcon from "./toolsIcon/figma.svg";
import gitIcon from "./toolsIcon/github.svg";
import notionIcon from "./toolsIcon/notion.svg";
import vscodeIcon from "./toolsIcon/vscode.svg";
import jiraIcon from "./toolsIcon/jira.svg";
import postmanIcone from "./toolsIcon/postman.svg";

const icons = [
    htmlIcon,
    cssIcon,
    javascriptIcon,
    typescriptIcon,
    reactIcon,
    mongodbIcon,
    nodejsIcon,
    threeIcon,
    figmaIcon,
    gitIcon,
    notionIcon,
    vscodeIcon,
    jiraIcon,
    postmanIcone,
];

const IconMarquee = () => {
    return (
        <Marquee
            gradient={true}
            gradientColor={"#0a090c"}
            gradientWidth={"20dvw"}
            pauseOnHover
            speed={100}>
            {icons.map((icon, index) => (
                <img
                    key={index}
                    src={icon}
                    alt={`Tech Icon ${index}`}
                    className="mx-10  h-[8dvh] w-[8dvw]"
                />
            ))}
        </Marquee>
    );
};

const IconMarqueeReversed = () => {
    return (
        <Marquee
            gradient={true}
            gradientColor={"#0a090c"}
            gradientWidth={"20dvw"}
            pauseOnHover
            speed={100}
            direction="right">
            {icons.map((icon, index) => (
                <img
                    key={index}
                    src={icon}
                    alt={`Tools Icon ${index}`}
                    className="mx-10  h-[8dvh] w-[8dvw]"
                />
            ))}
        </Marquee>
    );
};

export { IconMarquee, IconMarqueeReversed };
