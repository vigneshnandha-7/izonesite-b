import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Share2,
  PenTool,
  Palette,
  Cpu,
  Smartphone,
  MessageSquare,
  Phone,
  MessageCircle,
  Megaphone,
  Vote,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useAdmin } from "@/context/AdminContext";

const developmentServices = [
  { name: "Web Development", path: "/development/web-development", icon: Code },
  {
    name: "Software Development",
    path: "/development/software-development",
    icon: Cpu,
  },
  {
    name: "App Development",
    path: "/development/app-development",
    icon: Smartphone,
  },
  {
    name: "Social Media Marketing",
    path: "/development/social-media-marketing",
    icon: Share2,
  },
  {
    name: "Content Writing",
    path: "/development/content-writing",
    icon: PenTool,
  },
  {
    name: "Graphics Designer",
    path: "/development/graphics-designer",
    icon: Palette,
  },
  {
    name: "AI & ML Development",
    path: "/development/ai-ml-development",
    icon: Brain,
  },
];

const servicesItems = [
  { name: "Bulk SMS", path: "/services/bulk-sms", icon: MessageSquare },
  { name: "Voice SMS", path: "/services/voice-sms", icon: Phone },
  {
    name: "WhatsApp Panel",
    path: "/services/whatsapp-panel",
    icon: MessageCircle,
  },
  {
    name: "WhatsApp Marketing",
    path: "/services/whatsapp-marketing",
    icon: Megaphone,
  },
  {
    name: "Digital Election Campaign",
    path: "/services/digital-election-campaign",
    icon: Vote,
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Development",
    path: "/development",
    hasDropdown: true,
    dropdownType: "development",
  },
  {
    name: "Services",
    path: "/services",
    hasDropdown: true,
    dropdownType: "services",
  },
  { name: "Clients", path: "/clients" },
  { name: "Career", path: "/career" },
  { name: "Contact Us", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();
  const { isAdminLoggedIn } = useAdmin();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location.pathname]);

  const getDropdownItems = (type) => {
    if (type === "development") return developmentServices;
    if (type === "services") return servicesItems;
    return [];
  };

  const isActiveDropdownPath = (type) => {
    if (type === "development")
      return location.pathname.startsWith("/development");
    if (type === "services") return location.pathname.startsWith("/services");
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-background/95 dark:bg-[#0d1117]/95 backdrop-blur-md shadow-sm border-b border-black/5 dark:border-white/5" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Left Group (Logo + Menu) */}
        <div className="flex items-center gap-12 lg:gap-20 xl:gap-32">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:bg-primary/30 transition-all">
              <span className="text-primary font-display font-bold text-lg">
                IZ
              </span>
            </div>
            <span className="font-display text-xl font-bold transition-colors text-foreground">
              Izone<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-6 md:gap-4 items-center">
          {navLinks.map((link) => (
            <div key={link.path} className="relative">
              {link.hasDropdown ? (
                <div
                  onMouseEnter={() => setActiveDropdown(link.dropdownType)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 font-medium ${
                      isActiveDropdownPath(link.dropdownType)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`${
                        activeDropdown === link.dropdownType ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.dropdownType && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 nav-dropdown-card p-2"
                      >
                        <Link
                          to={`/${link.dropdownType}`}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                        >
                          <span>All {link.name}</span>
                        </Link>
                        <div className="h-px bg-border my-1" />
                        {getDropdownItems(link.dropdownType).map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                              location.pathname === item.path
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                          >
                            <item.icon size={18} className="text-primary" />
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`relative font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
          </div>
        </div>

        {/* Desktop Right Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />


        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden nav-dropdown-card mt-2 mx-4 overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === link.dropdownType
                              ? null
                              : link.dropdownType
                          )
                        }
                        className={`w-full flex items-center justify-between py-2 px-4 rounded-lg transition-colors ${
                          isActiveDropdownPath(link.dropdownType)
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`${
                            mobileDropdown === link.dropdownType
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileDropdown === link.dropdownType && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-1 overflow-hidden"
                          >
                            <Link
                              to={`/${link.dropdownType}`}
                              className="flex items-center gap-3 py-2 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                            >
                              <span className="text-sm">All {link.name}</span>
                            </Link>
                            {getDropdownItems(link.dropdownType).map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 py-2 px-4 rounded-lg transition-colors ${
                                  location.pathname === item.path
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                }`}
                              >
                                <item.icon size={16} className="text-primary" />
                                <span className="text-sm">{item.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className={`py-2 px-4 rounded-lg transition-colors block ${
                        location.pathname === link.path
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
