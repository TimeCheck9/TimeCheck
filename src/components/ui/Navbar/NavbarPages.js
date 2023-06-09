import { useState } from "react";
import { Logo } from "../logo/Logo";
import { Link } from "react-router-dom";

const NavbarPages = () => {

    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-black shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            <Logo width="40" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <div className=" space-y-2 lg:hidden md:inline-block">
                            <Link
                                to="/Register"
                                className="inline-block w-full px-4 py-2 text-center text-emerald-700 underline rounded-md hover:bg-slate-800 hover:text-green-500"
                            >
                                Registrarse
                            </Link>
                            <Link
                                to="/Login"
                                className="inline-block w-full px-4 py-2 text-center text-emerald-700 underline rounded-md shadow hover:bg-slate-800 hover:text-green-500"
                            >
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hidden space-x-2 md:inline-block">
                    <Link
                        to="/Login"
                        className="px-4 py-2 text-white bg-lime-700 rounded-md shadow hover:bg-slate-600"
                    >
                        Sign in
                    </Link>
                    <Link
                       to="/Register"
                        className="px-4 py-2 text-white bg-lime-700 rounded-md shadow hover:bg-slate-600"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavbarPages