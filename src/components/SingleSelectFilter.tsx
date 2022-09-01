import {
    ChangeEventHandler,
    FunctionComponent,
    useEffect,
    useState
  } from "react";
  
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
      <fieldset>
        <legend>{filterName}</legend>
  
        {filters.map(([term, copy]) => (
          <div key={term}>
            <input
              type="radio"
              id={term}
              name={filterName}
              value={term}
              checked={selected === term}
              onChange={onChange}
            />
            <label htmlFor={term}>{copy}</label>
          </div>
        ))}
      </fieldset>
    );
  };
  