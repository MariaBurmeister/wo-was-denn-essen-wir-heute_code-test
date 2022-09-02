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
  
  export const SingleSelectFilter: FunctionComponent<{
    filterName: string;
    filterMap: Record<Term, Copy>;
    selectedValue: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  }> = ({ filterName, filterMap, selectedValue, onChange }) => {
    const [selected, setSelected] = useState<string>("Egal");
    const filters = Object.entries(filterMap);
  
    useEffect(() => setSelected(filterMap[selectedValue]), [selectedValue]);

    return (
     <FilterGroup filterName={filterName}>
        {filters.map(([term, copy]) => (
          <div className="filter_option" key={filterName + copy}>
            <input
              type="radio"
              id={filterName + copy}
              name={filterName}
              value={term}
              checked={selected === filterMap[term]}
              onChange={onChange}
            />
            <label className={selected === filterMap[term] ? 'label_checked' : ''} htmlFor={filterName + copy}>{copy}</label>
          </div>
        ))}
        </FilterGroup>
    );
  };
  