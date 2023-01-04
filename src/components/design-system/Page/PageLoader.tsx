import { FunctionComponent } from "react";
import './Page.scss';
import { Page } from "./Page";
import { BarLoader } from "../BarLoader";

export const PageLoader: FunctionComponent<{pageTitle?: string}> = ({pageTitle = 'Loading...'}) => <Page title={pageTitle}><BarLoader loadingText="Page content is loading"/></Page>;
