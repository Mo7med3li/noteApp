import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container py-10">
        <div className="pb-10 pt-20">
          <Outlet> </Outlet>
        </div>
      </div>
    </>
  );
}
