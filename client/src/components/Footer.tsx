import { Link, useLocation } from "wouter";

export default function Footer() {
  const [location, navigate] = useLocation();
  const currentYear = new Date().getFullYear();

  const handleHashLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    if (location !== "/") {
      // Navigate to `/` first, then scroll to section
      navigate("/");

      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on home page, scroll immediately
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleHashLinkClick(e, "#about")}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleHashLinkClick(e, "#portfolio")}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleHashLinkClick(e, "#services")}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleHashLinkClick(e, "#contact")}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="text-gray-400 hover:text-primary transition-colors duration-300 cursor-pointer">
                    Gallery
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleHashLinkClick(e, "#services")}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Video Production
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleHashLinkClick(e, "#services")}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Motion Graphics
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleHashLinkClick(e, "#services")}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Color Grading
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleHashLinkClick(e, "#services")}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Audio Editing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider bg-gray-800"></div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Jay Khandwaye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
