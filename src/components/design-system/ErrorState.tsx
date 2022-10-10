import { FunctionComponent, ReactNode } from "react";
import { Illustration } from "./Illustration";

export const ErrorState: FunctionComponent<{message: string | ReactNode}> = ({message}) => <Illustration img="error" subtitle={message}/>;