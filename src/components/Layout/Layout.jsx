import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="">
          <Outlet> </Outlet>
        </div>
      </div>
    </>
  );
}
