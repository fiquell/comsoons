export interface Links {
  label: string;
  url: string;
}

type Image = {
  src: string | string[];
  alt: string;
};

export interface Teams {
  name: string;
  profession: string;
  url: string;
  image: Image;
}
