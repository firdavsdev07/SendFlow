import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#faf0ff" }}
      className="px-30 py-16 mt-10"
      
    >
      <div className="flex justify-between items-start">
        {/* Logo & desc */}
        <div className="max-w-xs">
          <a href="/" className="flex items-center justify-start gap-2  mb-4">
            <img src={logo} alt="SendFlow" className="w-20 h-20" />
            <span className="text-violet font-bold text-3xl">SendFlow</span>
          </a>
          <p className="text-text-muted text-lg italic">
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
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4">Legal</h4>
            <ul className="flex flex-col gap-3 text-text-muted text-lg">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border-color mt-12 pt-6 text-center text-text-muted text-lg">
        <span>© 2026 SendFlow. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
