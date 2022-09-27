import { FunctionComponent, ReactNode } from "react";
import { Illustration } from ".";

export const EmptyState: FunctionComponent<{message: string | ReactNode}> = ({message}) => <Illustration img="empty-state" subtitle={message}/>;