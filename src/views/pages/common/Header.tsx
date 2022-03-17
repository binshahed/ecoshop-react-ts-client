import logo from "assets/image/logo.png";

const Header = () => {
  return (
    <div className="container mx-auto  ">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex">
          <input
            className=" w-full border-solid border-2 border-slate-400"
            type="text"
            name=""
            id=""
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
