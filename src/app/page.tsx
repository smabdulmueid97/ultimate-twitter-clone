import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative ">
        <LeftSidebar />
        <MainComponent />
        <section className="w-full sticky top-0 mt-4 flex flex-col items-stretch h-screen px-6">
          <div>
            <div className="relative w-full h-full group">
              <input
                id="searchBox"
                type="text"
                placeholder="Search Twitter"
                className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 px-8"
              />
              <label
                htmlFor="searchBox"
                className="absolute top-0 left-0 h-full flex item-center justify-center p-4 text-gray-500"
              >
                <BsSearch className="w-5 h-5" />
              </label>

            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 p-4 my-4">
            <h3 className="font-bold text-2xl my-4">Whats'happening</h3>
            <div>
              {Array.from({length:5}).map((_,i)=>(
                  <div key={i}>
                    <div className="font-bold text-lg">#trending ${i+1}</div>
                    <div className="text-xs text-neutral-400">35.4k</div>
                  </div>
              ))}
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
