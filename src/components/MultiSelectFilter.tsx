import {
    ChangeEventHandler,
    FunctionComponent,
    useEffect,
    useState
  } from "react";
  
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
      <fieldset>
        <legend>{filterName}</legend>
  
        {filters.map(([term, copy]) => (
          <div key={term}>
            <input
              type="checkbox"
              id={term}
              name={filterName}
              value={term}
              checked={selected.includes(term)}
              onChange={onChange}
            />
            <label htmlFor={term}>{copy}</label>
          </div>
        ))}
      </fieldset>
    );
  };
  