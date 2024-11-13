export interface Project {
    src: string;
    title: string;
    techno: Array<String>;
    description: string;
    link: string;
  }

export const projects: Project[] = [
    {
      title: "SneakerCopApp",
      techno: ["React Native", "TypeScript"],
      description: "Développement d’une application mobile dédiée aux sneakers, regroupant les dernières sorties avec leur cote de revente estimée, un calendrier des futures sorties, un système de favoris et des fiches produits avec redirection vers les portails de vente.",
      src: "/sneakerCopApp.gif",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    },
    {
      title: "Clément Chapillon",
      techno: [],
      description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: "/tensorflow.gif",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    },
    {
      title: "Zissou",
      techno: [],
      description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "/arVideo.gif",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    },
    {
      title: "Mathias Svold and Ulrik Hasemann",
      techno: [],
      description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
      src: "house.jpg",
      link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    },
    {
      title: "Mark Rammers",
      techno: [],
      description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
      src: "cactus.jpg",
      link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    }
  ]