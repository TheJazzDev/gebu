import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
// import ThemeToggle from '~/components/Theme';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between py-2 border-b max-w-[1440px] mx-auto">
      <div className="flex gap-2">
        <SlLocationPin />
        <p className="text-[10px]">
          Store Location: Lincoin - 344 Illinois, Chicago, USA
        </p>
      </div>
      <div className="flex items-center gap-4">
        {/* <ThemeToggle /> */}
        <Select>
          <SelectTrigger className="select-no-bg">
            <SelectValue placeholder="Eng" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Eng">Eng</SelectItem>
            <SelectItem value="Fre">Fre</SelectItem>
            <SelectItem value="Yor">Yor</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="select-no-bg">
            <SelectValue placeholder="USD" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="NGN">NGN</SelectItem>
            <SelectItem value="GBP">GBP</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-[10px]">Sign in / Sign up</p>
      </div>
    </div>
  );
};

export default TopBar;
