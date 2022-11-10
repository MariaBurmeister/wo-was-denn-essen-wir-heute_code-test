import { FunctionComponent } from "react";
import './Page.scss';
import { Page } from "./Page";
import { BarLoader } from "../BarLoader";

export const PageLoader: FunctionComponent = () => <Page title="Loading..."><BarLoader/></Page>;
