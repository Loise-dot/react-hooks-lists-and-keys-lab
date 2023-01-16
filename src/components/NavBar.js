import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const NavLink = links.map((link) => {
    return (
      <a key={link} href={"#" + link}>
        {link}
      </a>
    );
  });

  return <nav>{NavLink}</nav>;
}

export default NavBar;
