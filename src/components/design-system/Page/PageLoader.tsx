import { FunctionComponent, ReactNode } from "react";
import './Page.scss';
import { Page } from "./Page";

export const PageLoader: FunctionComponent = () => <Page title="Loading..."><p>Loading...</p></Page>;
