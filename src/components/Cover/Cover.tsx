import logo from "../../assets/logo.svg";

export default function Cover() {
  return (
<div className="w-full h-150 md:h-200 bg-[#22303e] flex items-center justify-center rounded-2xl shadow-xl">
  <img
    src={logo}
    alt="Valora"
    className="w-56 md:w-96"
    // opacity-80 hover:scale-105 transition
  />
</div>
  );
}