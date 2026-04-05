import { Home, LogOut, Settings, Share2, Users } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

function Dashboard() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-cream via-violet/5 to-cyan/5">
      {/* Sidebar */}
      <aside className="w-64 glass-effect border-r border-white/30 p-6 flex flex-col">
        <Link to="/" className="flex items-center gap-2 mb-12">
          <img src={logo} alt="SendFlow" className="w-10 h-10" />
          <span className="font-bold text-2xl bg-linear-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
            SendFlow
          </span>
        </Link>

        <nav className="flex-1 space-y-2">
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold ${
              location.pathname === "/dashboard"
                ? "bg-violet/10 text-violet"
                : "text-text-muted hover:bg-white/50"
            } transition-colors`}
          >
            <Home className="w-5 h-5" />
            Home
          </Link>
          <Link
            to="/dashboard/transfers"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold ${
              location.pathname === "/dashboard/transfers"
                ? "bg-violet/10 text-violet"
                : "text-text-muted hover:bg-white/50"
            } transition-colors`}
          >
            <Share2 className="w-5 h-5" />
            Transfers
          </Link>
          <Link
            to="/dashboard/rooms"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold ${
              location.pathname === "/dashboard/rooms"
                ? "bg-violet/10 text-violet"
                : "text-text-muted hover:bg-white/50"
            } transition-colors`}
          >
            <Users className="w-5 h-5" />
            Rooms
          </Link>
          <Link
            to="/dashboard/settings"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold ${
              location.pathname === "/dashboard/settings"
                ? "bg-violet/10 text-violet"
                : "text-text-muted hover:bg-white/50"
            } transition-colors`}
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-coral hover:bg-coral/10 transition-colors font-semibold">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <nav className="glass-effect border-b border-white/30 px-8 py-4 flex justify-end items-center">
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl">
            <div className="text-right">
              <h4 className="font-bold text-sm">Alex Rivera</h4>
              <p className="text-xs text-text-muted">alex@sendflow.io</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center text-white font-bold text-sm">
              AR
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
