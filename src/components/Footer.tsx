import logo from "../assets/logo-text.png";

function Footer() {
    return (
        <footer className="bg-white text-black mt-12 border-t border-gray-200">

            {/* Main Footer */}
            <div className="max-w-6xl mx-auto px-4 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="Dev Stack Logo"
                                className="w-20 h-20 object-contain cursor-pointer"
                            />
                        </div>

                        <p className="text-sm font-medium text-gray-600 leading-6 mt-4">
                            Build your ideal development stack by exploring
                            modern technologies and tools for your next project.
                        </p>

                        {/* Social Links - Text Only */}
                        <div className="flex gap-4 mt-5 text-xs font-medium text-gray-600">
                            <a
                                href="#"
                                className="hover:text-black transition"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="hover:text-black transition"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="hover:text-black transition"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>


                    {/* Product */}
                    <div>
                        <h3 className="font-bold mb-4 text-black">
                            Product
                        </h3>

                        <ul className="space-y-3 text-sm font-medium text-gray-600">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition"
                                >
                                    Your Stack
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition"
                                >
                                    Features
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition"
                                >
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Company */}
                    <div>
                        <h3 className="font-bold mb-4 text-black">
                            Company
                        </h3>

                        <ul className="space-y-3 text-sm font-medium text-gray-600">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition"
                                >
                                    Careers
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Legal */}
                    <div>
                        <h3 className="font-bold mb-4 text-black">
                            Legal
                        </h3>

                        <ul className="space-y-3 text-sm font-medium text-gray-600">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition"
                                >
                                    Terms of Service
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition"
                                >
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>


                {/* Bottom Bar */}
                <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">

                    <p className="text-xs font-medium text-gray-500">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5 text-xs font-medium text-gray-500">
                        <a
                            href="#"
                            className="hover:text-black transition"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="hover:text-black transition"
                        >
                            Terms
                        </a>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;