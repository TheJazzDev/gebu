import React from 'react';
import Header from '../Headers';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
