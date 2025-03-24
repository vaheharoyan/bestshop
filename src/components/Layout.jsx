import React from "react";
import Navbar from "./Navbar";

function Layout({ children, cart }) {
  return (
    <>
      <Navbar cart={cart} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
