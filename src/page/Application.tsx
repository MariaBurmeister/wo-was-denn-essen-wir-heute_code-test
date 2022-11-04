import { FunctionComponent, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainHeader, PageLoader } from "../components/design-system";

export const Application: FunctionComponent = () => {
  return (
    <>
      <MainHeader />
      <Suspense fallback={<PageLoader/>}>
        <Outlet />
      </Suspense>
    {/* <Footer/> */}
    </>
  );
}