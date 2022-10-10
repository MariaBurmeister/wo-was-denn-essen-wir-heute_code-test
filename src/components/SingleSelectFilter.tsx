import {
    ChangeEventHandler,
    FunctionComponent,
    useEffect,
    useState
  } from "react";
import { InputGroup, InputButton } from "./design-system";
  
  type Term = string;
  type Copy = string;
  
  export const SingleSelectFilter: FunctionComponent<{
    filterName: string;
    filterMap: Record<Term, Copy>;
    selectedValue: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    sortCondition?: ([termA, copyA]: [Term, Copy], [termB, copyB]: [Term, Copy]) => number;
  }> = ({ filterName, filterMap, selectedValue, onChange, disabled, sortCondition }) => {
    const [selected, setSelected] = useState<string>("Egal");
    const filters = sortCondition ? Object.entries(filterMap).sort(sortCondition) : Object.entries(filterMap);

    useEffect(() => setSelected(filterMap[selectedValue]), [selectedValue]);

    return (
      <InputGroup groupName={filterName} disabled={disabled}>
        {filters.map(([term, copy]) => (
          <InputButton
            key={filterName + term}
            type="radio"
            name={filterName}
            value={term}
            checked={selected === filterMap[term]}
            onChange={onChange}
          >{copy}</InputButton>
        ))}
        </InputGroup>
    );
  };
  