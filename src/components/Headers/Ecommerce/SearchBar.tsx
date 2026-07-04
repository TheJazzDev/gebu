import React from 'react';
import { SlHandbag } from 'react-icons/sl';
import { GoHeart } from 'react-icons/go';
import { RxDividerVertical } from 'react-icons/rx';

import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { SearchIcon } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between py-4 max-w-[1440px] mx-auto">
      <h2>Gebu</h2>
      <div className="flex w-full max-w-sm items-center">
        <div className="relative w-full">
          <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-8 rounded-none rounded-l-sm border-r-0"
          />
        </div>
        <Button
          type="button"
          variant="default"
          className="text-slate-100 text-xs rounded-none rounded-r-sm"
        >
          Search
        </Button>
      </div>
      <div className="flex items-start">
        <GoHeart size={18} />
        <RxDividerVertical className="text-gray-200 h-[22px] w-auto -mt-0.5" />
        <div className="flex gap-2 items-start">
          <SlHandbag />
          <div>
            <p className="text-[8px] -mt-0.5">Shoping cart:</p>
            <p className="text-[8px] font-semibold">$57.02</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
