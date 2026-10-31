import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTitle from "./PageTitle";

export default function Layout() {
  return (
    <>
      <PageTitle />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}