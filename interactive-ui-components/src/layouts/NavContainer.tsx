import { useRef } from "react";
import { useInView } from "motion/react";
import { navbarData } from "../data/gym/NavigationData";
import Navbar from "./Navbar";

export default function NavContainer() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div>
      <Navbar data={navbarData} />;
    </div>
  );
}
