export interface Project {
    src: string;
    title: string;
    techno: Array<String>;
    description: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: "Sharify",
        techno: ["React", "MongoDB", "Node.js", "Express"],
        description:
            "Application web progressive (PWA) permettant de créer des watchlists de films et séries, avec des fiches détaillées incluant synopsis, bandes-annonces, casting et plateformes de streaming disponibles. Fonctionnalité de watchlists collaboratives pour partager et gérer des listes avec plusieurs utilisateurs.",
        src: "/sharify.gif",
        link: "https://sharify-app.vercel.app/",
    },
    {
        title: "Candide",
        techno: ["React", "Three.js"],
        description:
            "Projet open source développé en partenariat avec Vana Principia, offrant une interface 3D immersive pour visualiser des terrains et des plantes à partir de données fournies. Il permet d'explorer différents types de végétation et leur disposition sur des terrains spécifiques, avec des données détaillées sur chaque plante.",
        src: "/candide.gif",
        link: "https://github.com/louis-cobi/candide",
    },
    {
        title: "TensorFlow Experimentation",
        techno: ["JavaScript", "TensorFlow"],
        description:
            "Exploration des capacités de reconnaissance visuelle via l’intelligence artificielle en utilisant TensorFlow. Développement de prototypes permettant d’identifier et de classer des objets dans des images en temps réel.",
        src: "/tensorflow.gif",
        link: "https://louis-cobi.github.io/TensorFlow-objectDetection/",
    },
    {
        title: "MylovelyPlanetAR",
        techno: ["JavaScript", "Réalité Augmentée"],
        description:
            "Création d’une expérience en réalité augmentée pour une campagne marketing du jeu My Lovely Planet. Utilisation de pattern markers pour afficher des modèles 3D interactifs via un téléphone ou un ordinateur.",
        src: "/arVideo.gif",
        link: "https://louis-cobi.github.io/MylovelyPlanetAR/",
    },
    {
        title: "SneakerCopApp",
        techno: ["React Native", "TypeScript"],
        description:
            "Développement d'une application mobile dédiée aux sneakers, regroupant les dernières sorties avec leur cote de revente estimée, un calendrier des futures sorties, un système de favoris et des fiches produits avec redirection vers les portails de vente.",
        src: "/sneakerCopApp.gif",
        link: "https://https://github.com/louis-cobi/SneakersCopApp",
    },
];
