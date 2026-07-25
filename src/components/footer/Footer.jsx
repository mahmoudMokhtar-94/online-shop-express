import { FacebookIcon } from "../../icons/FacebookIcon";
import { YoutubeShortsIcon } from "../../icons/YoutubeShortsIcon";
import { LinkedinIcon } from "../../icons/LinkedinIcon";
import { MastercardIcon } from "../../icons/MastercardIcon";
import { VisaIcon } from "../../icons/VisaIcon";
import { PaypalIcon } from "../../icons/PaypalIcon";
import { VodafoneIcon } from "../../icons/VodafoneIcon";
import { ApplePayIcon } from "../../icons/ApplePayIcon";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="py-6 bg-[#F3F4F6] mt-20">
      <div className="w-[90%] mx-auto flex flex-col gap-12 md:flex-row">
        <div className="md:w-[33%] py-4 flex flex-col justify-center items-center md:block">
          <div className="w-[140px]">
            <img className="w-full" src={logo} alt="Brand Logo" />
          </div>
          <p className="text-[var(--dark_gray_color)] mt-4 mb-6 text-center md:text-start">
            Online Shop Express provides a fast, secure, and seamless online
            shopping experience.
          </p>
          <div>
            <span className="text-[var(--dark_gray_color)] font-bold">
              Follow us on
            </span>
            <div className="flex mt-2 gap-4 social-icons">
              <FacebookIcon className="size-6 cursor-pointer" />
              <YoutubeShortsIcon className="size-6 cursor-pointer" />
              <LinkedinIcon className="size-6 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="py-4 md:w-[26%] md:block flex flex-col justify-center items-center">
          <h2 className="capitalize text-[var(--main_color)] font-bold text-[20px]">
            quick links
          </h2>
          <ul className="text-center md:text-start">
            <Link to="">
              <li className="my-2 text-[var(--p_color) duration-300 text-[15px] hover:text-[var(--main_color)] hover:pl-1">
                Shipping &amp; Returns
              </li>
            </Link>
            <Link to="">
              <li className="my-2 capitalize text-[var(--p_color) duration-300 hover:text-[var(--main_color)] hover:pl-1">
                privacy policy
              </li>
            </Link>
            <Link to="">
              <li className="my-2 text-[var(--p_color) duration-300 hover:text-[var(--main_color)] hover:pl-1">
                Terms &amp; Conditions
              </li>
            </Link>
            <Link to="">
              <li className="my-2 capitalize text-[var(--p_color) duration-300 hover:text-[var(--main_color)] hover:pl-1">
                wishlist
              </li>
            </Link>
            <Link to="">
              <li className="my-2 capitalize text-[var(--p_color) duration-300 hover:text-[var(--main_color)] hover:pl-1">
                compare
              </li>
            </Link>
            <Link to="">
              <li className="my-2 capitalize text-[var(--p_color) duration-300 hover:text-[var(--main_color)] hover:pl-1">
                subscribe
              </li>
            </Link>
          </ul>
        </div>

        <form className="md:block flex flex-col justify-center items-center flex-1 py-4">
          <h2 className="capitalize text-[var(--main_color)] font-bold text-[20px]">
            news letter
          </h2>
          <p className="my-2 text-[var(--p_color) text-center md:text-start">
            Signup for latest news and insights from Online Shop Express
          </p>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
          <button
            type="submit"
            className="capitalize mt-4 w-full rounded-md bg-[var(--main_color)] py-2 font-semibold text-white transition hover:bg-[var(--active_color)] active:scale-[0.98] cursor-pointer"
          >
            subscribe
          </button>
          <div className="flex mt-4 items-center gap-4">
            <MastercardIcon className="size-10" />
            <VisaIcon className="size-10" />
            <PaypalIcon className="size-8" />
            <VodafoneIcon className="size-8" />
            <ApplePayIcon className="size-10" />
          </div>
        </form>
      </div>
    </footer>
  );
}
