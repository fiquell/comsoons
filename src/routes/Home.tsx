import { ourTeams } from "@/constants";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="mb-12 font-serif text-6xl md:text-7xl lg:text-8xl">
          COMING SOON
        </p>
        <div className="mb-6">
          <p>We're working on making something amazing.</p>
          <p>
            Subscribe to our newsletter to receive notifications when we arrive.
          </p>
        </div>
        <Link
          to="/contacts"
          replace={true}
          className="rounded-md bg-neutral-100 px-8 py-3 font-bold text-neutral-900 shadow-md outline outline-2 outline-neutral-900 transition duration-300 ease-in-out hover:rotate-2 hover:scale-110">
          NOTIFY ME
        </Link>
      </div>
      <div className="flex min-h-screen flex-col items-center">
        <p className="mb-24 font-serif text-5xl md:text-6xl lg:text-7xl">
          Meet our team of creators, designers, and problem solvers.
        </p>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-5">
          {ourTeams.map(function (item) {
            return (
              <div key={item.name} className="text-center md:text-left">
                <Link
                  to={item.url}
                  replace={true}
                  className="mb-4 block rounded-tr-3xl shadow-md ring ring-neutral-900 transition duration-300 ease-in-out hover:scale-105">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="h-80 w-80 rounded-tr-3xl object-cover md:h-96 md:w-96"
                  />
                </Link>
                <p className="font-medium">{item.name}</p>
                <p>{item.profession}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-1 mt-24 text-center md:mt-0">
        <p>Website by Object Society's</p>
        <p>
          &copy; Object Society's {new Date().getFullYear()}. All Right
          Reserved.
        </p>
      </div>
    </div>
  );
}
