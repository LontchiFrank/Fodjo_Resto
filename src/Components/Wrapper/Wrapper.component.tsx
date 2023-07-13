import React, { FunctionComponent, PropsWithChildren } from "react";
import Navbar from "../DashboardNavbar/Navbar.component";

interface Props {
  children?: React.ReactNode | React.ReactElement[];
}

const Wrapper: FunctionComponent<PropsWithChildren> = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Wrapper;
