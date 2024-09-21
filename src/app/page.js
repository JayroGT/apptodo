"use client"
import { useRouter } from "next/navigation";
export default function Home() {

  const router = useRouter();
  const start = () => {
    router.push('/todos');
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-full">
      <h1 className="text-[48px] pb-8 font-sans font-bold text-blue-950">Welcome</h1>
      <h3 className="text-[24px] pb-4 font-sans font-normal text-blue-950">Press "Get Started" to begin</h3>
      <div
        className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]"
      >
        <button
          onClick={start}
          className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200"
        >
          <div
            className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-2"
          >
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-white">Get Started</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
