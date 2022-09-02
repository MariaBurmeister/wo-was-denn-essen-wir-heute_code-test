import './SelectFilter.scss';

import {
    ChangeEventHandler,
    FunctionComponent,
    useEffect,
    useState
  } from "react";
import { FilterGroup } from "./design-system";
  
  type Term = string;
  type Copy = string;
  
  export const MultiSelectFilter: FunctionComponent<{
    filterName: string;
    filterMap: Record<Term, Copy>;
    selectedValues: string[];
    onChange: ChangeEventHandler<HTMLInputElement>;
  }> = ({ filterName, filterMap, selectedValues, onChange }) => {
    const [selected, setSelected] = useState<string[]>([]);
    const filters = Object.entries(filterMap);
  
    useEffect(() => setSelected(selectedValues), [selectedValues]);
  
    return (
      <FilterGroup filterName={filterName}>
            {filters.map(([term, copy]) => (
            <div className="filter_option" key={term}>
                <input
                type="checkbox"
                id={term}
                name={filterName}
                value={term}
                checked={selected.includes(term)}
                onChange={onChange}
                />
                <label className={selected.includes(term) ? 'label_checked' : ''} htmlFor={term}>{copy}</label>
            </div>
            ))}
        </FilterGroup>
    );
  };
  