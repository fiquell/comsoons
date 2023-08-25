export default function Home() {
  function handleNotifications() {
    alert("Looks great");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-center">
      <div className="mt-64">
        <p className="mb-4 font-cursive text-6xl font-bold md:text-7xl lg:text-8xl">
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
          onClick={handleNotifications}
          className="rounded-md bg-neutral-100 px-8 py-3 font-bold text-neutral-900 shadow-md outline outline-2 outline-neutral-900 transition duration-300 ease-in-out hover:rotate-2 hover:scale-110">
          NOTIFY ME
        </button>
      </div>
      <div className="mb-2">
        <p>Website by Object Society's</p>
        <p>
          &copy; Object Society's {new Date().getFullYear()}. All Right
          Reserved.
        </p>
      </div>
    </div>
  );
}
