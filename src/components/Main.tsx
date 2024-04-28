import { CarouselMain } from "./Caraousel";
import Navbar from "./Navbar";
import Search from "./Search";

const Main = () => {
  return (
    <div className="bg-[#fff] w-screen px-8  my-2 mx-auto max-w-sm flex flex-col items-center">
      <Navbar />
      <Search />
      <CarouselMain />
      <div>categories</div>
      <div>
        <h2>featured</h2>
        <div className="flex">
          <h3 className="h-6 bg-pink-400">Product</h3>
          <h3 className="h-6 bg-pink-400">Product</h3>
        </div>
      </div>
      <div>add</div>
    </div>
  );
};

export default Main;
