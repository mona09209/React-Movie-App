import { useEffect } from "react";

function TrailerModal({ trailerKey, onClose }) {

  /* ================= منع Scroll ================= */
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  /* ================= Escape Key ================= */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50
                 flex items-center justify-center
                 backdrop-blur-xl bg-black/40
                 animate-fadeIn"
    >
      {/* stop propagation حتى لا يُغلق عند الضغط داخل الفيديو */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[92%] md:w-[900px]
                   aspect-video rounded-2xl
                   overflow-hidden shadow-2xl
                   animate-scaleIn"
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0`}
          title="Trailer"
          allow="autoplay"
          allowFullScreen
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4
                     bg-black/60 hover:bg-black
                     text-white px-3 py-1
                     rounded-lg transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default TrailerModal;