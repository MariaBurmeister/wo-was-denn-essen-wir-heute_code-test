import {
    ChangeEventHandler,
    FunctionComponent,
    useEffect,
    useState
  } from "react";
import { InputGroup, InputButton } from "./design-system";
  
  type Term = string;
  type Copy = string;
  
  export const MultiSelectFilter: FunctionComponent<{
    filterName: string;
    filterMap: Record<Term, Copy>;
    selectedValues: string[];
    onChange: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    sortCondition?: ([termA, copyA]: [Term, Copy], [termB, copyB]: [Term, Copy]) => number;
  }> = ({ filterName, filterMap, selectedValues, onChange, disabled, sortCondition }) => {
    const [selected, setSelected] = useState<string[]>([]);
    const filters = sortCondition ? Object.entries(filterMap).sort(sortCondition) : Object.entries(filterMap);

    useEffect(() => setSelected(selectedValues), [selectedValues]);
  
    return (
      <InputGroup groupName={filterName} disabled={disabled}>
            {filters.map(([term, copy]) => (
              <InputButton
                key={filterName + term}
                type="checkbox"
                name={filterName}
                value={term}
                checked={selected.includes(term)}
                onChange={onChange}
              >{copy}</InputButton>
            ))}
        </InputGroup>
    );
  };
  