import { CiBellOn, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex-1 bg-red-400  w-screen max-w-sm  mx-auto justify-between items-center">
      <h1 className="text-blue-600 mx-auto">Mega Mall</h1>
      <div className="flex ml-0">
        <CiBellOn />
        <CiShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
