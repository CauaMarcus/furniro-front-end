import HeaderButtons from "./HeaderButtons";
const Header = () => {
  return (
    <header className="py-4 bg-white flex justify-between">
      <div className="w-full flex justify-between">
        <HeaderButtons />
      </div>
    </header>
  );
};
export default Header;
