import { Check } from "lucide-react";
import "./toast.css";
export default function Toast({ msg, variant, open }) {
  return open ? (
    <div
      className={`flex gap-1 justify-center items-center border w-fit px-8 rounded-md 
        fixed top-5 left-5 z-[2] p-4 ${variant === "success" ? "success-toast" : "danger-toast"}`}
    >
      <Check />
      <span className="font-bold">{msg}</span>
    </div>
  ) : (
    <></>
  );
}
