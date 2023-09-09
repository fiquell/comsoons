import { Links, Teams } from "@/types";

export const navLinks: Links[] = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
];

export const ourTeams: Teams[] = [
  {
    name: "Name X",
    profession: "Profession X",
    url: "#",
    image: {
      src: "https://images.pexels.com/photos/12892896/pexels-photo-12892896.jpeg",
      alt: "Alt X",
    },
  },
  {
    name: "Name Y",
    profession: "Profession Y",
    url: "#",
    image: {
      src: "https://images.pexels.com/photos/12506089/pexels-photo-12506089.jpeg",
      alt: "Alt Y",
    },
  },
  {
    name: "Name Z",
    profession: "Profession Z",
    url: "#",
    image: {
      src: "https://images.pexels.com/photos/3116381/pexels-photo-3116381.jpeg",
      alt: "Alt Z",
    },
  },
];
