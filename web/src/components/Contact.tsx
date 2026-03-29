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
          <h6 className="bg-fuchsia-100 border border-violet text-violet font-semibold text-sm px-4 py-0.5 rounded-full inline-block mb-6">
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
            className="flex items-center gap-4 transition-opacity duration-200 hover:opacity-70"
          >
            <div className="bg-[#fdf0f0] p-3 rounded-xl">
              <Mail className="w-5 h-5 text-text-primary" />
            </div>
            <span className="text-lg font-medium">hello@sendflow.io</span>
          </a>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.15}
          viewport={{ once: true }}
          className="bg-white rounded-4xl shadow-sm p-10 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <img src={logo} alt="SendFlow" className="w-8 h-8" />
            <span className="font-bold text-xl text-violet">SendFlow</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-muted uppercase tracking-wide">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="border border-border-color rounded-2xl px-5 py-3 text-lg outline-none focus:border-violet transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-muted uppercase tracking-wide">
              Subject
            </label>
            <input
              type="text"
              placeholder="What's this about?"
              className="border border-border-color rounded-2xl px-5 py-3 text-lg outline-none focus:border-violet transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-muted uppercase tracking-wide">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us more..."
              className="border border-border-color rounded-2xl px-5 py-3 text-lg outline-none focus:border-violet transition-colors duration-200 resize-none"
            />
          </div>

          <button className="w-full bg-linear-to-r from-violet to-cyan text-white text-lg font-semibold py-4 rounded-2xl transition-opacity duration-200 hover:opacity-85 cursor-pointer">
            Send Message
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
