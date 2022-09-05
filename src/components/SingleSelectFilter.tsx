import {
    ChangeEventHandler,
    FunctionComponent,
    useEffect,
    useState
  } from "react";
import { FilterGroup, InputButton } from "./design-system";
  
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
          <InputButton
            type="radio"
              id={filterName + copy}
              name={filterName}
              value={term}
              checked={selected === filterMap[term]}
              onChange={onChange}
          >{copy}</InputButton>
        ))}
        </FilterGroup>
    );
  };
  