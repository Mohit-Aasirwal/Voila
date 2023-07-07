"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import SearchButton from "./SearchButton";
import {
  Select,
  SelectItem,
  SearchSelect,
  SearchSelectItem,
} from "@tremor/react";
import { useRouter } from "next/navigation";

const SORT_BY_MAP = {
  r: "Default",
  rv: "By Review",
  p: "By Price (Low to High)",
  pd: "By Price (High to Low)",
};
const Header = () => {
  const [pages, setPages] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const router = useRouter();

  return (
    <header className="flex flex-col items-center md:flex-row md:items-start md:space-x-6 px-2 pt-10 pb-5 md:p-10 md:pb-5">
      <Link href="/">
        <Image
          width={100}
          height={100}
          src="/logo.jpg"
          className="object-contain mr-10"
          alt="logo"
        />
      </Link>
      <div className="w-full md:max-w-2xl">
        {/* form */}
        <form
          action={(FormData) => {
            const searchTerm = FormData.get("searchTerm");
            if (!FormData.get("searchTerm")) return;
            const params = new URLSearchParams();
            if (pages) params.set("pages", pages.toString());
            if (sortBy) params.set("sortBy", sortBy.toString());
            if (minPrice) params.set("minPrice", minPrice.toString());
            if (maxPrice) params.set("maxPrice", maxPrice.toString());
            router.push(`/search/${searchTerm}?${params.toString()}`);
          }}
        >
          <div className="flex items-center gap-2 w-full px-4">
            <div className="flex items-center shadow-xl space-x-2 bg-white rounded-full border-0 px-6 py-4 flex-1">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="searchTerm"
                placeholder="Search..."
                className="outline-none flex-1"
              />
            </div>
            {/* search button */}
            <SearchButton />
          </div>
          <div
            className="grid
          grid-cols-2 gap-2 p-4 md:grid-cols-4 max-w-lg md:max-w-none mx-auto items-center"
          >
            <SearchSelect
              onValueChange={(value) => setPages(value)}
              className="min-w-4"
              placeholder="# of pages"
            >
              {[...Array(100)].map((_, i) => (
                <SearchSelectItem key={i} value={(i + 1).toString()}>
                  {(i + 1).toString()} pages
                </SearchSelectItem>
              ))}
            </SearchSelect>
            <Select
              className="min-w-4"
              placeholder="Sort"
              onValueChange={(value) => setSortBy(value)}
            >
              {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </Select>
            <SearchSelect
              className="min-w-4"
              placeholder="Min Price..."
              onValueChange={(value) => setMinPrice(value)}
            >
              {["", "100", "250", "500", "750", "900", "1000"].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                  {i == 0 ? "No Minimum" : `$${_.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>
            <SearchSelect
              className="min-w-4"
              placeholder="Max Price..."
              onValueChange={(value) => setMaxPrice(value)}
            >
              {["", "100", "250", "500", "750", "900", "1000"].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                  {i == 0 ? "No Maximum" : `$${_.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </div>
        </form>
      </div>
      <div>
        {/* Avatar */}
        <Avatar
          name="Mohit Aasirwal"
          className="hidden lg:flex flex-1 justify-end"
          githubHandle="Mohit-Aasirwal"
          round
          size="50"
        />
      </div>
    </header>
  );
};

export default Header;
