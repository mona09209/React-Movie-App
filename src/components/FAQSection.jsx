import { useState } from "react";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {question}
        </h3>

        <span className="text-red-500 text-2xl">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const faqs = [
    {
      question: "What is this movie platform?",
      answer:
        "A modern movie discovery app built with React and TMDB API allowing users to explore trending and popular movies.",
    },
    {
      question: "Do I need an account?",
      answer:
        "No account is required. You can browse movies instantly.",
    },
    {
      question: "Where does movie data come from?",
      answer:
        "All movie data is provided by The Movie Database (TMDB) API.",
    },
    {
      question: "Can I watch movies here?",
      answer:
        "This platform is for discovery only and does not stream movies.",
    },
  ];

  return (
    <section className=" px-6 md:px-16 py-20 ">
      <h2 className="text-2xl md:text-3xl text-center font-black text-white mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto curser-pointer">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
}