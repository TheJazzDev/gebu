import { SlLocationPin } from 'react-icons/sl';
import { ThemeToggle } from '~/components';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

export default function Home() {
  return (
    <div className="">
      <div>
        <SlLocationPin />
        <p className="text-[10px]">
          Store Location: Lincoin - 344 Illinois, Chicago, USA
        </p>
      </div>
      <div>
        <Select>
          <SelectTrigger className="border-0 bg-transparent">
            <SelectValue placeholder="USD" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="NGN">NGN</SelectItem>
            <SelectItem value="GBP">GBP</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ThemeToggle />
    </div>
  );
}
