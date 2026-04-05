import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import logo from "../assets/logo.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

function Contact() {
  return (
    <section className="py-32">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h6 className="glass-effect premium-shadow text-violet font-bold text-sm px-5 py-2 rounded-full inline-block mb-6">
            Contact Us
          </h6>
          <h1 className="text-6xl mb-6">
            Let's start a <br />
            <span className="bg-linear-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              conversation.
            </span>
          </h1>
          <p className="text-text-muted text-xl mb-12">
            Have a question, feedback, or partnership idea? <br />
            We'd love to hear from you.
          </p>

          <a
            href="mailto:hello@sendflow.io"
            className="flex items-center gap-4 transition-all duration-300 hover:scale-105"
          >
            <div className="glass-effect premium-shadow p-4 rounded-xl">
              <Mail className="w-6 h-6 text-violet" />
            </div>
            <span className="text-lg font-semibold">hello@sendflow.io</span>
          </a>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.15}
          viewport={{ once: true }}
          className="glass-effect premium-shadow-lg rounded-4xl p-10 flex flex-col gap-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <img src={logo} alt="SendFlow" className="w-15 h-15 drop-shadow-md" />
            <span className="font-bold text-xl text-violet">SendFlow</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-wide">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="glass-effect border-2 border-transparent rounded-2xl px-5 py-3 text-lg outline-none focus:border-violet transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-wide">
              Subject
            </label>
            <input
              type="text"
              placeholder="What's this about?"
              className="glass-effect border-2 border-transparent rounded-2xl px-5 py-3 text-lg outline-none focus:border-violet transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-wide">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us more..."
              className="glass-effect border-2 border-transparent rounded-2xl px-5 py-3 text-lg outline-none focus:border-violet transition-all duration-200 resize-none"
            />
          </div>

          <button className="w-full animated-gradient text-white text-lg font-bold py-4 rounded-2xl transition-all duration-300 hover:opacity-90 premium-shadow cursor-pointer">
            Send Message
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
