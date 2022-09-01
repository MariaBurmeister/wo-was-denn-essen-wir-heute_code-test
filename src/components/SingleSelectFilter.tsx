import './SelectFilter.scss';
import {
    ChangeEventHandler,
    FunctionComponent,
    useEffect,
    useState
  } from "react";
import { FilterGroup } from "./layout";
  
  type Term = string;
  type Copy = string;
  
  export const SingleSelectFilter: FunctionComponent<{
    filterName: string;
    filterMap: Record<Term, Copy>;
    selectedValue: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  }> = ({ filterName, filterMap, selectedValue, onChange }) => {
    const [selected, setSelected] = useState<string>("egal");
    const filters = Object.entries(filterMap);
  
    useEffect(() => setSelected(selectedValue), [selectedValue]);
  
    return (
     <FilterGroup filterName={filterName}>
        {filters.map(([term, copy]) => (
          <div className="filter_option" key={term}>
            <input
              type="radio"
              id={term}
              name={filterName}
              value={term}
              checked={selected === term}
              onChange={onChange}
            />
            <label className={selected === term ? 'label_checked' : ''} htmlFor={term}>{copy}</label>
          </div>
        ))}
        </FilterGroup>
    );
  };
  