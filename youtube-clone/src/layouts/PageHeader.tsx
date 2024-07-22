import logo from "../assets/youtude1.png";
import { ArrowLeft, Bell, Menu, Mic, Search, Video, User } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`flex gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-7" />
        </a>
        <h1 className="mb-5">IN</h1>
      </div>
      <form
        className={` gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch &&(
        <Button onClick={()=>setShowFullWidthSearch(false)}
         size="icon"
          className="flex-shrink-0"
           type="button">
          <ArrowLeft />
        </Button>
)}
        <div className="flex flex-grow max-w-[600px]">
          <input
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-2 px-4 text-lg w-full focus:border-blue-500 outline-none "
            type="Search"
            placeholder="Search"
          />

          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-1-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button
          size="icon"
          className="flex-shrink-0"
          type="button"
          variant="ghost"
        >
          <Mic />
        </Button>
      </form>
      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Video />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}
