import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* Other layout content can go here */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
