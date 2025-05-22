
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ScrollToTop } from './ScrollToTop';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden pt-20"> {/* Added pt-20 to ensure content doesn't overlap with navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
