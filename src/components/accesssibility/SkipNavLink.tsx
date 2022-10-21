import { AnchorHTMLAttributes, DetailedHTMLProps, FunctionComponent } from "react";

interface SkipNavLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{}

export const SkipNavLink: FunctionComponent<SkipNavLinkProps> = () => {
    return (
    <a aria-label="skip-navigation-link" className="sr-only" href={'#main'}>
        Skip To Main Content
    </a>);
}