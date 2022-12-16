import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelection = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDateS);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        // endDate: endDate.toISOString(0968086578),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* logo */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-8 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="banner"
        />
      </div>

      {/* search */}
      <div className="flex items-center border-2 rounded-full shadow-lg">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search for place"
          className="flex-grow pl-4 bg-transparent text-sm outline-none"
        />
        <SearchIcon
          onClick={search}
          className="hidden md:inline-flex bg-blue-400 text-white p-2 rounded-full cursor-pointer mx-2 h-8"
        />
      </div>

      {/* users */}
      <div className="flex items-center text-gray-600 space-x-4 justify-end">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center border-2 rounded-full p-2 space-x-2 cursor-pointer">
          <MenuIcon className="h-5" />
          <UserCircleIcon className="h-5" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 px-4 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelection}
          />

          <div>
            <h2>Number of guests</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div>
            <button onClick={resetInput}>Cancel</button>
            <button onClick={search}>Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
