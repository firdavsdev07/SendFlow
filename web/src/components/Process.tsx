import { motion } from "framer-motion";
import {
  CircleCheck,
  Lock,
  Infinity,
  Clock,
  Activity,
  UserMinus,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

function Process() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 py-40">
      {/* Left text */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:col-span-3"
      >
        <h6 className="bg-orange-100 w-30 text-sm text-center text-coral border border-orange-200 font-semibold py-0.5 rounded-full">
          Core Principles
        </h6>
        <h1 className="text-7xl py-6">
          Engineered for <br /> Absolute Privacy.
        </h1>
        <p className="text-2xl pb-4 text-text-muted">
          SendFlow isn't just a file transfer tool; it's a statement <br />{" "}
          about digital sovereignty. We provide the plumbing, you <br /> provide
          the data. No middleman, ever.
        </p>
        <div className="flex gap-3 py-6">
          <CircleCheck className="text-mint" />
          <p className="font-semibold">No account required</p>
        </div>
        <div className="flex gap-3 pb-4">
          <CircleCheck className="text-mint" />
          <p className="font-semibold">AES-256 GCM Encryption</p>
        </div>
      </motion.div>

      {/* Military Grade */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.1}
        viewport={{ once: true }}
        className="lg:col-span-3 shadow-sm box-border p-8 bg-[#f5f2fa] rounded-4xl border-violet"
      >
        <div className="w-20 h-20 bg-[#faf7fc] p-2 rounded-xl flex items-center justify-center">
          <Lock className="w-10 h-10 text-black" />
        </div>
        <h2 className="text-4xl font-semibold py-6">Military Grade Encryption</h2>
        <p className="text-xl text-text-muted">
          Every byte is encrypted in your browser before it even starts <br />
          traveling. Only you and your peer hold the keys.
        </p>
      </motion.div>

      {/* No File Limits */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.1}
        viewport={{ once: true }}
        className="lg:col-span-2 shadow-sm bg-[#edfafa] rounded-4xl my-6 p-8"
      >
        <div className="w-20 h-20 bg-[#f2fbfc] p-2 rounded-xl flex items-center justify-center">
          <Infinity className="w-10 h-10 text-black" />
        </div>
        <h2 className="text-4xl font-semibold py-6">No File Limits</h2>
        <p className="text-xl text-text-muted">
          Whether it's 1MB or 1TB, we don't <br />
          care. Since we don't store it, we don't <br /> limit it.
        </p>
      </motion.div>

      {/* One-time Rooms */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true }}
        className="lg:col-span-2 shadow-sm bg-[#f5f4f2] rounded-4xl my-6 p-8"
      >
        <div className="w-20 h-20 bg-[#faf9f7] p-2 rounded-xl flex items-center justify-center">
          <Clock className="w-10 h-10 text-black" />
        </div>
        <h2 className="text-4xl font-semibold py-6">One-time Rooms</h2>
        <p className="text-xl text-text-muted">
          Rooms exist only as long as you're in <br /> them. Once closed, all
          traces vanish.
        </p>
      </motion.div>

      {/* Live Progress */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.3}
        viewport={{ once: true }}
        className="lg:col-span-2 shadow-sm bg-[#faf1f0] rounded-4xl my-6 p-8"
      >
        <div className="w-20 h-20 bg-[#fcf7f7] p-2 rounded-xl flex items-center justify-center">
          <Activity className="w-10 h-10 text-black" />
        </div>
        <h2 className="text-4xl font-semibold py-6">Live Progress</h2>
        <p className="text-xl text-text-muted pb-20">
          Real-time bit-by-bit transfer tracking <br />
          with peer latency monitoring.
        </p>
      </motion.div>

      {/* No Account */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.1}
        viewport={{ once: true }}
        className="lg:col-span-3 shadow-sm box-border p-8 bg-[#edfafa] rounded-4xl border-violet"
      >
        <div className="w-20 h-20 bg-[#f2fbfc] p-2 rounded-xl flex items-center justify-center">
          <UserMinus className="w-10 h-10 text-black" />
        </div>
        <h2 className="text-4xl font-semibold py-6">No Account Needed</h2>
        <p className="text-xl text-text-muted pb-30">
          Start sharing immediately. No emails, no passwords, no data <br />
          collection. Just pure P2P utility.
        </p>
      </motion.div>

      {/* Multi-Recipient */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true }}
        className="lg:col-span-3 shadow-sm bg-[#faf1f0] rounded-4xl p-8"
      >
        <div className="w-20 h-20 bg-[#fcf7f7] p-2 rounded-xl flex items-center justify-center">
          <Users className="w-10 h-10 text-black" />
        </div>
        <h2 className="text-4xl font-semibold py-6">Multi-Recipient</h2>
        <p className="text-xl text-text-muted">
          Stream your files to multiple peers simultaneously using <br />{" "}
          efficient WebRTC mesh technology.
        </p>
      </motion.div>
    </div>
  );
}

export default Process;
