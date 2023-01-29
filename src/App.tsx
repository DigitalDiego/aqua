import React from "react";
import {
  Navbar,
  Hero,
  WhatIsAqua,
  Popular,
  Customers,
  Questions,
  SignUp,
  Footer,
} from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsAqua />
      <Popular />
      <Customers />
      <Questions />
      <SignUp />
      <Footer />
    </>
  );
}
