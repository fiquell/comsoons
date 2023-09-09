import { M1, M2, M3 } from "@/assets";
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
      src: M1,
      alt: "Alt X",
    },
  },
  {
    name: "Name Y",
    profession: "Profession Y",
    url: "#",
    image: {
      src: M2,
      alt: "Alt Y",
    },
  },
  {
    name: "Name Z",
    profession: "Profession Z",
    url: "#",
    image: {
      src: M3,
      alt: "Alt Z",
    },
  },
];
