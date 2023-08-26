import { ourTeams } from "@/constants";
import { Link } from "react-router-dom";

export default function Home() {
  function handleCTA() {
    alert("Looks great");
  }

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="mb-12 font-cursive text-6xl font-bold md:text-7xl lg:text-8xl">
          COMING SOON
        </p>
        <div className="mb-6">
          <p>We're working on making something amazing.</p>
          <p>
            Subscribe to our newsletter to receive notifications when we arrive.
          </p>
        </div>
        <button
          type="button"
          onClick={handleCTA}
          className="rounded-md bg-neutral-100 px-8 py-3 font-bold text-neutral-900 shadow-md outline outline-2 outline-neutral-900 transition duration-300 ease-in-out hover:rotate-2 hover:scale-110">
          NOTIFY ME
        </button>
      </div>
      <div className="flex min-h-screen flex-col items-center">
        <p className="mb-24 font-cursive text-5xl font-bold md:text-6xl lg:text-7xl">
          Meet our team of creators, designers, and problem solvers.
        </p>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-5">
          {ourTeams.map(function (item) {
            return (
              <div key={item.name} className="text-center md:text-left">
                <Link
                  to={item.url}
                  className="mb-4 block rounded-tr-3xl shadow-md ring-2 ring-neutral-900 transition duration-300 ease-in-out hover:scale-105">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="h-80 w-80 rounded-tr-3xl object-cover md:h-96 md:w-96"
                  />
                </Link>
                <p className="text-lg font-medium">{item.name}</p>
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
