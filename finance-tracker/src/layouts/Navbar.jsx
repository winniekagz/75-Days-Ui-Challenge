import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { COLORS } from "../types";

export default function Navbar() {
  const paths = [
    { name: "Home", link: "/" },
    { name: "About us", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Price", link: "#price" },
    { name: "Blog", link: "#blog" },
  ];

  return (
    <div className="flex justify-between gap-2 py-6 px-8">
      <div>
        <Typography fontSize={40} fontWeight={'700'} color={COLORS.GREEN} label={'FINANCE TRACKER'} />
      </div>
      <div className="flex gap-5 items-end">
        {paths.map((path, index) => (
          <div key={index}>
            <NavLink
              to={path.link}
              className="text-green hover:text-blue"
              activeClassName="text-blue"
              exact
            >
              <Typography
              fontSize={20}
                color={COLORS.GREEN}
                hoverColor={COLORS.BLUE}
                label={path.name}
              />
            </NavLink>
          </div>
        ))}
      </div>
      <Button label={"Go to Dashboard"} />
    </div>
  );
}
