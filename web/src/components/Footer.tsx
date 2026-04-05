import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer
      className="px-30 py-16 mt-10 glass-effect border-t border-white/30"
    >
      <div className="flex justify-between items-start">
        {/* Logo & desc */}
        <div className="max-w-xs">
          <a href="/" className="flex items-center justify-start gap-2 mb-4 transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="SendFlow" className="w-20 h-20 drop-shadow-md" />
            <span className="text-violet font-bold text-3xl">SendFlow</span>
          </a>
          <p className="text-text-muted text-lg">
            Secure, direct browser-to-browser file transfers without
            intermediate servers.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-20">
          <div>
            <h4 className="font-bold text-xl mb-4">Product</h4>
            <ul className="flex flex-col gap-3 text-text-muted text-lg">
              <li>
                <a href="#" className="transition-all duration-300 hover:text-violet hover:translate-x-1 inline-block">How It Works</a>
              </li>
              <li>
                <a href="#" className="transition-all duration-300 hover:text-violet hover:translate-x-1 inline-block">Pricing</a>
              </li>
              <li>
                <a href="#" className="transition-all duration-300 hover:text-violet hover:translate-x-1 inline-block">Security</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4">Legal</h4>
            <ul className="flex flex-col gap-3 text-text-muted text-lg">
              <li>
                <a href="#" className="transition-all duration-300 hover:text-violet hover:translate-x-1 inline-block">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="transition-all duration-300 hover:text-violet hover:translate-x-1 inline-block">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-violet/20 mt-12 pt-6 text-center text-text-muted text-lg">
        <span>© 2026 SendFlow. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
