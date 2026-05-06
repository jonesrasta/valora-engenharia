import logo from "../../assets/logo.svg";

export default function Cover() {
  return (
<div className="w-full h-full bg-[#22303e] flex items-center justify-center shadow-xl overflow-hidden">
  <img
    src={logo}
    alt="Valora"
    className="w-56 md:w-96"
    // opacity-80 hover:scale-105 transition
  />
</div>
  );
}