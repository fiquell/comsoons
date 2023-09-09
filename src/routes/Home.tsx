import { ourTeams } from "@/constants";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState<string>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("* Don't worry, we will not spam you :)");
    setEmail("");
  }

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="mb-12 font-serif text-6xl md:text-7xl lg:text-8xl">
          COMING SOON
        </p>
        <div className="mb-8">
          <p>We're working on making something amazing.</p>
          <p>
            Subscribe to our newsletter to receive notifications when we arrive.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative w-full md:w-10/12 lg:w-1/2">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            required={true}
            value={email}
            className="w-full rounded-3xl bg-neutral-100 px-6 py-4 text-neutral-900 shadow-md outline outline-2 outline-neutral-900"
          />
          <div className="absolute inset-y-0 end-1 grid place-content-center">
            <button
              type="submit"
              className="rounded-3xl bg-neutral-900 px-6 py-3 font-medium text-neutral-100 transition duration-300 ease-in-out hover:scale-x-105 md:px-10">
              Notify Me
            </button>
          </div>
        </form>
      </section>
      <section className="flex min-h-screen flex-col items-center justify-center">
        <p className="mb-16 font-serif text-5xl md:text-6xl lg:text-7xl">
          Meet our team of creators, designers, and problem solvers.
        </p>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-5">
          {ourTeams.map(function (item) {
            return (
              <div key={item.name} className="text-right">
                <Link
                  to={item.url}
                  replace={true}
                  className="mb-4 block rounded-md rounded-tr-3xl shadow-md outline outline-2 outline-neutral-900 transition duration-300 ease-in-out hover:scale-105">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="h-80 w-80 rounded-md rounded-tr-3xl object-cover md:h-96 md:w-96"
                  />
                </Link>
                <p className="font-medium">{item.name}</p>
                <p>{item.profession}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
