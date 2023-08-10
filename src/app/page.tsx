export default function Home() {
  return (
    <div className="flex items-center flex-col p-8 text-center bg-indigo-50 h-screen dark:bg-indigo-950 dark:text-indigo-50">
      <div className="max-w-2xl">
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-4 dark:text-indigo-300">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
        </p>
        <button className="bg-indigo-600 dark:bg-indigo-400 dark:text-indigo-950 px-4 py-2 mt-4 rounded font-medium text-indigo-50 enabled:hover:bg-indigo-700 dar transition-all duration-500 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed">
          Sign in
        </button>
      </div>
    </div>
  )
}
