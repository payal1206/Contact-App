import { checkPropTypes } from "prop-types";
import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
