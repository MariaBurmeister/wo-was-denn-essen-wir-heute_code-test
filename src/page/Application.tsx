import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { MainHeader } from "../components/design-system";

export const Application: FunctionComponent = () => {
  return (
    <>
      <MainHeader />
      <Outlet/>
    {/* <Footer/> */}

    </>
  );
}