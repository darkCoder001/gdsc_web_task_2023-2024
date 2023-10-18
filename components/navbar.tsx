import { ChevronDown, Plus } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 flex justify-between items-center w-full h-[80px] px-24">
      <div className="flex items-center gap-8">
        <div className="bg-yellow-300 w-10 h-10 rounded-md flex items-end justify-end pr-1 text-lg font-semibold">
          MR
        </div>
        <p className="text-slate-500 font-medium hover:text-black hover:cursor-pointer">
          Vectors
        </p>
        <p className="text-slate-500 font-medium hover:text-black hover:cursor-pointer">
          Photos
        </p>
        <p className="text-slate-500 font-medium hover:text-black hover:cursor-pointer">
          PSD
        </p>
        <p className="text-slate-500 font-medium hover:text-black hover:cursor-pointer">
          Video
        </p>
        <p className="flex font-medium items-center hover:cursor-pointer">
          More <ChevronDown size={"18"} fill="black" />
        </p>
      </div>

      <div className="flex items-center">
        <button className="flex items-center gap-1 text-slate-500 font-medium border-2 border-slate-400 rounded-md px-5 py-2 mr-7 group hover:text-black hover:border-black">
          <Plus
            className="text-slate-500 group-hover:text-black"
            width={"12"}
            strokeWidth={3}
          />
          Submit
        </button>

        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg drop-shadow-lg mr-3 hover:cursor-pointer">
          <img src="/images/facebook-image.png" className="w-6 h-6" />
        </div>

        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg drop-shadow-lg hover:cursor-pointer">
          <img src="/images/gmail-image.png" className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};
