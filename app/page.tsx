import { Navbar } from "@/components/navbar";
import {
  MoveRight,
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Lock,
  SearchIcon,
  Settings2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-100 text-black p-24 pb-8">
      <Navbar />
      <section className="flex flex-col gap-6 items-center justify-center">
        <h2 className="text-5xl text-black">Popular Pro Stock Vector</h2>
        <p className="max-w-sm text-bgDark text-center">
          High quality Vectors with worry-free licensing for personal and
          commercial use.
        </p>
        <div className="flex items-center justify-center bg-white text-black px-4 rounded-lg">
          <button className="flex items-center gap-2 border border-black rounded p-2">
            Vectors <ChevronDown className="w-4 h-4" />
          </button>
          <input
            placeholder="Search for Vectors..."
            className="bg-transparent outline-none border-none p-5 pr-16"
          />
          <SearchIcon className="w-6 h-6" />
        </div>
      </section>
      <section className="w-full flex items-center justify-between mt-20 px-20">
        <div className="flex items-center gap-8 justify-center text-lg">
          <div className="relative">
            Latest{" "}
            <div className="bg-red w-2 h-2 rounded-full absolute -right-2 top-0" />
          </div>

          <p>Popular</p>
          <p>|</p>

          <p className="text-red">Premium</p>
          <p className="text-blue">Free</p>
        </div>
        <div className="text-black flex items-center justify-center gap-4">
          <Settings2 />
          <Bookmark />
        </div>
      </section>
      <section className="mt-10 flex items-center justify-between px-20 gap-10">
        <div className="bg-white rounded-xl p-5 shadow-2xl">
          <div className="bg-bg rounded-lg px-10 relative">
            <img src="/images/astro.png" className="w-60 h-58" />
          </div>

          <h1 className="text-center first-letter:text-4xl first-letter:text-black font-light text-bgDark mt-4">
            Anime Illustration
          </h1>

          <div className="mt-4 flex gap-3 items-center justify-center w-full">
            <p className="font-bold text-xl underline">Download</p>
            <Download />
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-2xl">
          <div className="bg-bg rounded-lg px-10 relative">
            <img src="/images/doggy.png" className="w-48 h-48" />
          </div>

          <h1 className="text-center first-letter:text-4xl first-letter:text-black font-light text-bgDark mt-4">
            Doggy Illustration
          </h1>

          <div className="mt-4 flex gap-3 items-center justify-center w-full">
            <p className="font-bold text-xl underline">Download</p>
            <Download />
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-2xl">
          <div className="bg-bg rounded-lg px-10 relative">
            <img src="/images/guitar.png" className="w-48 h-48" />
          </div>

          <h1 className="text-center first-letter:text-4xl first-letter:text-black font-light text-bgDark mt-4">
            Guitar Illustration
          </h1>

          <div className="mt-4 flex gap-3 items-center justify-center w-full">
            <p className="font-bold text-xl underline">Download</p>
            <Download />
          </div>
        </div>
      </section>
      <section className="mt-20 px-20 flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <p className="underline font-semibold">
            Discover All
            <br />
            Collections
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 font-medium bg-white border-2 border-transparent rounded-md hover:border-black">
          Next Page <MoveRight width={16} />
        </button>

        <div className="flex items-center text-slate-500">
          Page
          <div className="w-[24px] h-[24px] bg-slate-200 flex items-center justify-center rounded-md ml-[20px] mr-[5px]">
            <ChevronLeft width={18} className="text-slate-400" />
          </div>
          <div className="w-[24px] h-[24px] bg-white border-[1px] border-slate-200 text-black flex items-center justify-center rounded-md">
            1
          </div>
          <div className="w-[24px] h-[24px] bg-slate-200 flex items-center justify-center rounded-md mr-[20px] ml-[5px]">
            <ChevronRight width={18} />
          </div>
          of 120
        </div>
      </section>
    </main>
  );
}
