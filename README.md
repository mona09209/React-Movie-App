# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
 <section className="px-6 md:px-16 mt-10">
        <div className="mb-8 flex items-end justify-between ">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">Trending Movies</h2>
            <p className="text-sm text-gray-500">Handpicked for your cinematic taste</p>
          </div>
          <a href="#" className="text-sm font-bold text-red-600 hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {

            trending.length > 0 ? (trending.map((movie) => (<MovieCard key={movie.id} movie={movie} />))) : (<p>Loading...</p>)

          }
        </div>
      </section>

      <section className="px-6 md:px-16 mt-14 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">Popular Movies</h2>
            <p className="text-sm text-gray-500"> Audience favorites worldwide</p>
          </div>
          <a href="#" className="text-sm font-bold text-red-600 hover:underline">View All</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {
            popular.length > 0 ? (popular.map((movie) => (<MovieCard key={movie.id} movie={movie} />))) : (<p>Loading...</p>)
          }
        </div>
      </section>








       <div className="mb-8 flex items-end justify-between">
          <div>
             <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
        {title}
      </h2>
             <p className="text-sm text-gray-500">
        {description}
      </p>
          </div>
          <a href="#" className="text-sm font-bold text-red-600 hover:underline">View All</a>
        </div>






.hero-circle::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);

  width: 130%;
  height: 6%;

  background: radial-gradient(
      120% 100% at 50% 0%,
      rgba(33,45,103,0.9) 0%,
      rgba(10,10,10,0.7) 55%,

      transparent 100%
  );
border-top: 2px inset #E7000B;
  border-top-left-radius: 60% 100%;
  border-top-right-radius: 60% 100%;
  filter: blur(2px);
}



         content: "";
  position: absolute;
  bottom: 0;
  width: 130%;
  height: 6%;
    left: 50%;
    transform: translateX(-50%);
 
  background: linear-gradient(to bottom, #212D67 10%, rgba(5, 5, 5, 0.6) 45%, transparent 100%);
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  border-top: 4px inset red;
  /* box-shadow: 0 -8px 40px !important rgba(255, 0, 80, 0.25); */