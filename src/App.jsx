import appLogo from "./assets/logo.png";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function App() {
  const [mobileMenuShowing, setMobileMenuShowing] = useState(false);

  const toogleMenuMb = () => {
    console.log(
      "🚀 ~ file: App.jsx:13 ~ toogleMenuMb ~ mobileMenuShowing:",
      mobileMenuShowing
    );
    setMobileMenuShowing(!mobileMenuShowing);
  };

  return (
    <div className="container mx-auto md:px-4">
      <nav className="flex justify-between items-center p-5">
        <div className="w-32 md:w-full">
          <NavLink to="/">
            <img src={appLogo} alt="App logo" />
          </NavLink>
        </div>
        <div
          className={`${
            mobileMenuShowing ? "visible z-50" : "invisible"
          } fixed top-0 left-0 right-0 md:static w-full`}
        >
          <ul className="c-menu">
            <li className="m-10 md:m-1">
              <NavLink className="c-navLink" to="/">
                Home
              </NavLink>
            </li>
            <li className="m-10 md:m-1">
              <NavLink className="c-navLink" to="/#product">
                Product
              </NavLink>
            </li>
            <li className="m-10 md:m-1">
              <NavLink className="c-navLink" to="/#faq">
                Faq
              </NavLink>
            </li>
            <li className="m-10 md:m-1">
              <NavLink className="c-navLink" to="/#contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          id="menuMb"
          className={`visible z-50 ${
            mobileMenuShowing
              ? "text-white font-medium fixed right-6"
              : "text-black"
          } md:invisible transition-all duration-500 ease-out`}
        >
          <a href="#" onClick={toogleMenuMb}>
            {!mobileMenuShowing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </a>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="flex flex-col justify-between items-center md:flex-row p-5">
          <div className="hidden md:block">
            <img src={appLogo} />
          </div>
          <div className="flex flex-row justify-between p-2">
            <a
              href="#"
              className="text-primary hover:text-orange-700 transition duration-300 block h-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-twitter mr-4 text-base w-5 hover:w-6 transition-all duration-200"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-primary hover:text-orange-700 transition duration-300 block h-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-facebook mr-4 text-base w-5 hover:w-6 transition-all duration-200"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-primary hover:text-orange-700 transition duration-300 block h-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-instagram mr-4 text-base w-5 hover:w-6 transition-all duration-200"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
          </div>
          <div>
            <span className="font-semibold text-gray-500">
              Copyright 2020 Bella Onojie.com
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
