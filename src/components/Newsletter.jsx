import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

  
    localStorage.setItem("newsletter_email", email);

    setSuccess(true);
    setEmail("");
  };

  return (
    <section className="relative px-6 md:px-16 py-24 overflow-hidden">

     
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-purple-900/20 blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto text-center backdrop-blur-xl  p-10 md:p-14 shadow-2xl">

       

        <p className="text-gray-400 mt-3 mb-8">
          Subscribe to get updates about trending and upcoming movies.
        </p>

        {!success ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-xl bg-black text-white
                         border border-[#212D67] focus:outline-none
                         focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700
                         transition font-bold  hover:scale-105 active:scale-95 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-red-500 font-semibold">
            Successfully subscribed!
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;