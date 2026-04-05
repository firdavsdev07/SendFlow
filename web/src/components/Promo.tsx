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
      className="my-32 rounded-4xl p-40 text-center text-white relative overflow-hidden
      bg-[linear-gradient(155deg,#a78bfa_0%,#818cf8_40%,#67e8f9_100%)]
      premium-shadow-lg"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="relative z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-7xl font-bold drop-shadow-lg"
        >
          Ready to send <br /> securely?
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-xl text-2xl text-white/90"
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
            className="flex items-center gap-3 rounded-full bg-white px-8 py-4
            text-xl font-bold text-violet transition-all duration-300 hover:opacity-90 shadow-xl hover:shadow-2xl"
          >
            Get Started for Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#"
            className="flex items-center gap-3 rounded-full border-2 border-white/80
            px-8 py-4 text-xl font-semibold text-white backdrop-blur-sm
            transition-all duration-300 hover:opacity-90 hover:bg-white/10"
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
          className="mt-10 flex flex-wrap justify-center gap-10 text-lg font-semibold text-white/90"
        >
          <span className="flex items-center gap-2">
            <CircleCheck className="w-5 h-5 text-white drop-shadow-md" /> Open Source
          </span>
          <span className="flex items-center gap-2">
            <CircleCheck className="w-5 h-5 text-white drop-shadow-md" /> P2P Network
          </span>
          <span className="flex items-center gap-2">
            <CircleCheck className="w-5 h-5 text-white drop-shadow-md" /> No Tracking
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Promo;
