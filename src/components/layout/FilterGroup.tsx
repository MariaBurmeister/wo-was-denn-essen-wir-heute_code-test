import { FunctionComponent, ReactNode } from "react";
import './FilterGroup.scss';

export const FilterGroup: FunctionComponent<{filterName: string; children: ReactNode}> = ({filterName, children}) => (
    <fieldset>
        <legend>{filterName}</legend>
        <section className="filter_group_content">
            {children}
        </section>
    </fieldset>
    );
