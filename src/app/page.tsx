import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";


const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navagating/header */}
        <LeftSidebar />
        <MainComponent/>

        <section>
          
        </section>
      </div>
    </div>
  );
};

export default Home;
