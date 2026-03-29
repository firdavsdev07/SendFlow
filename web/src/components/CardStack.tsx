import { motion } from "framer-motion";
import { Download, Send, ShieldCheck, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function CardStack() {
  return (
    <div className="pt-56">
      <div className="flex flex-col items-center">
        <motion.h6
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-fuchsia-200 border border-violet text-violet font-bold px-8 py-0.5 rounded-full"
        >
          The Process
        </motion.h6>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          viewport={{ once: true }}
          className="text-center text-6xl py-6"
        >
          Simple, Direct, Powerful
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
          className="text-center text-2xl text-text-muted"
        >
          We use WebRTC technology to establish a direct pipeline between you and <br />
          your recipient. Your files never touch our servers.
        </motion.p>
      </div>

      <div className="flex relative py-30 justify-between">
        {/* Step 01 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="icon bg-mint p-6 rounded-xl">
            <Users className="text-white w-12 h-12" />
          </div>
          <h6 className="text-lg pt-4 text-text-muted font-bold">STEP 01</h6>
          <h2 className="text-3xl font-bold my-2">Create Room</h2>
          <p className="text-text-muted text-center text-lg">
            Generate a secure <br /> peer-to-peer room <br /> instantly.
          </p>
        </motion.div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-cyan w-10 h-0.5"></div>
        </div>

        {/* Step 02 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="icon bg-cyan p-6 rounded-xl">
            <Send className="text-white w-12 h-12" />
          </div>
          <h6 className="text-lg pt-4 text-text-muted font-bold">STEP 02</h6>
          <h2 className="text-3xl font-bold my-2">Share Link</h2>
          <p className="text-text-muted text-center text-lg">
            Send the generated room <br /> URL to your recipient
          </p>
        </motion.div>

        <div className="w-170 h-170 absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-fuchsia-200 rounded-full"></div>

        {/* Center card */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-2 justify-center items-center bg-white shadow-xl rounded-4xl h-50 w-50"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661602011150-6c6f8b9ba788?w=500&auto=format&fit=crop&q=60"
            alt="#img"
            className="w-30 h-30 object-cover rounded-2xl"
          />
          <h2 className="text-2xl font-bold">You</h2>
        </motion.div>

        {/* Step 03 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="icon bg-violet p-6 rounded-xl">
            <ShieldCheck className="text-white w-12 h-12" />
          </div>
          <h6 className="text-lg pt-4 text-text-muted font-bold">STEP 03</h6>
          <h2 className="text-3xl font-bold my-2">P2P Handshake</h2>
          <p className="text-text-muted text-center text-lg">
            Browsers connect directly <br /> with end-to-end encryption.
          </p>
        </motion.div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-linear-to-r from-violet-500 to-cyan-500 w-10 h-0.5"></div>
        </div>

        {/* Step 04 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="icon bg-coral p-6 rounded-xl">
            <Download className="text-white w-12 h-12" />
          </div>
          <h6 className="text-lg pt-4 text-text-muted font-bold">STEP 04</h6>
          <h2 className="text-3xl font-bold my-2">File Arrives</h2>
          <p className="text-text-muted text-center text-lg">
            Files flow directly to their <br /> device at max speed
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default CardStack;
