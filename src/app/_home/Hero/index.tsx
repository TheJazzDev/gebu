import React from 'react';
import { Button } from '~/components/ui/button';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { IconType } from 'react-icons';
import {
  RiRefund2Line,
  RiSecurePaymentFill,
  RiCustomerService2Line,
} from 'react-icons/ri';

type Item = {
  label: string;
  desc: string;
  Icon: IconType;
};

const items: Item[] = [
  {
    label: 'Free Shipping',
    desc: 'Free shipping on all your order',
    Icon: LiaShippingFastSolid,
  },
  {
    label: 'Customer Suppoer 24/7',
    desc: 'Instant access to Support',
    Icon: RiCustomerService2Line,
  },
  {
    label: '100% Secure Payment',
    desc: 'We ensure your money is save',
    Icon: RiSecurePaymentFill,
  },
  {
    label: 'Money-Bank Gurrantee',
    desc: '30 Days Money-Bank Gurrantee',
    Icon: RiRefund2Line,
  },
];

const Hero = () => {
  return (
    <div className="mt-4 max-w-[1440px] mx-auto h-[calc(100vh-300px)]">
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="col-span-2 row-span-2 text-slate-100 bg-gradient-to-r from-green-800 to-green-400 px-8 rounded-md space-y-4">
          <h1 className="text-4xl font-bold max-w-sm">
            Fresh & Healthy Organic Food
          </h1>
          <blockquote className="px-2 border-s-2 border-green-500">
            <p className="text-sm">
              Sale up to{' '}
              <span className="text-xs font-medium bg-orange-400 py-0.5 px-1 rounded-xs">
                30% OFF
              </span>
            </p>
            <p className="text-[8.5px] mt-1">
              Free shipping on all your order.
            </p>
          </blockquote>
          <Button
            variant="secondary"
            className="text-primary text-xs w-32 rounded-2xl"
          >
            Shop now
            <IoIosArrowRoundForward />
          </Button>
        </div>
        <div className="rounded-md p-6 bg-purple-50">
          <p className="text-[10px] font-medium">SUMMER SALE</p>
          <p className="font-semibold tracking-wider">75% OFF</p>
          <p className="text-[8px] mt-1">Only Fruit & Vegetable</p>
          <Button
            variant="link"
            size="icon"
            className="text-primary block text-xs w-fit"
          >
            Shop now <IoIosArrowRoundForward className="inline-block" />
          </Button>
        </div>
        <div className="rounded-md bg-green-900 grid place-content-center text-center">
          <p className="text-[10px] font-medium text-slate-100">BEST DEAL</p>
          <p className="text-slate-100 text-lg font-semibold max-w-[180px] leading-5 mt-1 mb-2">
            Special Products Deal of the MOnth
          </p>
          <Button
            variant="link"
            size="icon"
            className="text-primary block text-xs mx-auto w-fit"
          >
            Shop now <IoIosArrowRoundForward className="inline-block" />
          </Button>
        </div>
      </div>
      <div className="flex py-4 px-6 justify-between bg-white shadow-lg mt-4 border border-slate-100 rounded-md">
        {items.map((item: Item) => (
          <div key={item.label} className="flex gap-2 items-center">
            <item.Icon size={23} className="text-primary" />
            <div>
              <p className="text-xs font-semibold mb-1">{item.label}</p>
              <p className="text-[8px] text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
