import React from "react";
import PageLoading from "../../components/PageLoading";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Overlay from "../../components/Overlay";
import Footer from "../../components/Footer";
import LoginModal from "../../components/LoginModal";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <PageLoading />
      <Header />
      <Navbar />
      <Overlay />

      <Outlet />

      <Footer />
      <LoginModal />
    </>
  );
};

export default MainLayout;
