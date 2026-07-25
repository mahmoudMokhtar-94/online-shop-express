import { useState } from "react";
import { useDispatch } from "react-redux";
import { Eye, EyeOff, KeyRound, CircleX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { login } from "../slices/authSlice";
import { useSelector } from "react-redux";
import PageTransition from "../components/utility-components/PageTransition";
import { resetLoginStatus } from "../slices/authSlice";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let loginRequestStatus = useSelector((state) => state.authCredentials.status);

  async function handleLoginClick(e) {
    e.preventDefault();
    const result = await dispatch(login(loginCredentials));
    if (login.fulfilled.match(result)) {
      navigate("/");
    }
  }

  function handleTryAgainClick() {
    dispatch(resetLoginStatus());
  }
  if (loginRequestStatus === "rejected") {
    return (
      <PageTransition>
        <div className="cart-list w-[70%] md:w-[60%] mx-auto border-[var(--border_color)] border-1 p-8 my-15 rounded-md shadow-md">
          <h2 className="cart-list-heading text-[var(--main_color)] capitalize text-[28px] font-bold pb-3 border-b border-[var(--border_color)] mb-8">
            Failed to login
          </h2>
          <CircleX className="text-[#dc3545] size-20 mx-auto mb-4" />
          <p className="capitalize text-[17px] text-[var(--color_heading)] tracking-wider">
            Looks like you have entered wrong username or password
          </p>

          <button
            onClick={handleTryAgainClick}
            className="place-order-btn duration-300 bg-[var(--main_color)] text-white w-full capitalize mt-6 font-bold text-[20px] p-2 hover:bg-transparent border-2 border-[var(--main_color)] hover:text-[var(--main_color)] cursor-pointer"
          >
            try again
          </button>
        </div>
      </PageTransition>
    );
  }
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto size-16 rounded-full bg-[var(--main_color)] flex items-center justify-center">
              <KeyRound className="text-white" />
            </div>

            <h1 className="mt-5 text-3xl font-bold text-gray-800">
              Welcome Back
            </h1>

            <p className="mt-2 text-gray-500">Sign in to your account</p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleLoginClick}>
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                value={loginCredentials.username}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    username: e.target.value,
                  })
                }
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  value={loginCredentials.password}
                  onChange={(e) =>
                    setLoginCredentials({
                      ...loginCredentials,
                      password: e.target.value,
                    })
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="capitalize w-full rounded-xl bg-[var(--main_color)] py-3 font-semibold text-white transition hover:bg-[var(--active_color)] active:scale-[0.98] cursor-pointer"
            >
              login
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Secure login for authorized users only.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
