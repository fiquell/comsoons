import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="relative">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
