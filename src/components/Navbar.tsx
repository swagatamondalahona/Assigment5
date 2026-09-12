import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="relative mx-auto flex h-14 max-w-6xl items-center px-4 md:px-6">

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-2xl font-semibold text-gray-700 md:hidden"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>

                {/* Logo */}
                <div className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0">
                    <div className="flex h-14 w-20 items-center justify-center">
                        <img
                            src={logo}
                            alt="Dev Stack"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="mx-auto hidden items-center gap-6 md:flex">

                    <a
                        href="#"
                        className="text-xs font-semibold text-pink-600"
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        className="text-xs font-semibold text-gray-600 hover:text-pink-600"
                    >
                        Technologies
                    </a>

                    <a
                        href="#"
                        className="text-xs font-semibold text-gray-600 hover:text-pink-600"
                    >
                        Projects
                    </a>

                    <a
                        href="#"
                        className="text-xs font-semibold text-gray-600 hover:text-pink-600"
                    >
                        About
                    </a>

                    <a
                        href="#"
                        className="text-xs font-semibold text-gray-600 hover:text-pink-600"
                    >
                        Contact
                    </a>

                </div>

                {/* Sign In / Sign Up */}
                <div className="ml-auto flex items-center gap-2 md:gap-4">

                    <button className="cursor-pointer text-xs font-semibold text-gray-700">
                        Sign In
                    </button>

                    <button className="btn-gradient cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold text-white md:px-4">
                        Sign Up
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t border-gray-100 bg-white px-5 py-4 shadow-md md:hidden">

                    <div className="flex flex-col gap-4">

                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-semibold text-pink-600"
                        >
                            Home
                        </a>

                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-semibold text-gray-600 hover:text-pink-600"
                        >
                            Technologies
                        </a>

                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-semibold text-gray-600 hover:text-pink-600"
                        >
                            Projects
                        </a>

                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-semibold text-gray-600 hover:text-pink-600"
                        >
                            About
                        </a>

                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-semibold text-gray-600 hover:text-pink-600"
                        >
                            Contact
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;