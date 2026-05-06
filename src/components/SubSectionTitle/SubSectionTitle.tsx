import { Plus } from "lucide-react";

interface Props {
  title: string;
  className?: string;
}

export default function SubSectionTitle({ title, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <Plus size={18} className="text-[#22303e] rotate-0 group-hover:rotate-90 transition" />
      <h3 className="text-lg md:text-xl font-semibold text-[#22303e]">
        {title}
      </h3>
    </div>
  );
}