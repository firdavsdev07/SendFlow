import { motion } from "framer-motion";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

function Promo() {
  return (
    <section
      className="my-32 rounded-4xl p-40 text-center text-white
      bg-[linear-gradient(155deg,#a78bfa_0%,#818cf8_40%,#67e8f9_100%)]
      shadow-2xl"
    >
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-7xl font-bold"
      >
        Ready to send <br /> securely?
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.1}
        viewport={{ once: true }}
        className="mx-auto mt-6 max-w-xl text-2xl text-white/80"
      >
        Join thousands of privacy-conscious users who trust SendFlow for their
        most sensitive file transfers.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <Link
          to="/auth/login"
          className="flex items-center gap-3 rounded-full bg-white px-6 py-4
          text-xl font-semibold text-violet transition-opacity duration-200 hover:opacity-85"
        >
          Get Started for Free
          <ArrowRight className="w-5 h-5" />
        </Link>
        <a
          href="#"
          className="flex items-center gap-3 rounded-full border border-white
          px-6 py-4 text-xl font-medium text-white
          transition-opacity duration-200 hover:opacity-70"
        >
          View Pricing
        </a>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.3}
        viewport={{ once: true }}
        className="mt-10 flex flex-wrap justify-center gap-10 text-lg font-medium text-white/80"
      >
        <span className="flex items-center gap-2">
          <CircleCheck className="w-5 h-5 text-white" /> Open Source
        </span>
        <span className="flex items-center gap-2">
          <CircleCheck className="w-5 h-5 text-white" /> P2P Network
        </span>
        <span className="flex items-center gap-2">
          <CircleCheck className="w-5 h-5 text-white" /> No Tracking
        </span>
      </motion.div>
    </section>
  );
}

export default Promo;
