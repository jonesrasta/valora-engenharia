import logo from "../../assets/logo.svg";

export default function Cover() {
  return (
<div className="w-full h-screen bg-[#22303e] flex items-center justify-center shadow-xl overflow-hidden">
  <img
    src={logo}
    alt="Valora"
    className="w-68 h-auto md:w-100 md:-mt-16"
    // opacity-80 hover:scale-105 transition
  />
</div>
  );
}