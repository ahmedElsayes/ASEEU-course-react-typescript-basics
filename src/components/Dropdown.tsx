import { useEffect, useState } from "react";

interface DropdownOptionProps {
  label: string;
  value: string;
  selected?: boolean;
}

interface DropdownProps {
  label?: string;
  defaultValue?: DropdownOptionProps;
  options: DropdownOptionProps[];
  inputName: string;
  onSelection: (option: DropdownOptionProps) => void;
  ClassName?: string;
}

const Dropdown = ({
  label,
  defaultValue,
  options,
  inputName,
  onSelection,
  ClassName,
}: DropdownProps) => {
  const [value, setValue] = useState();
  const [modifiedOptions, setModifiedOptions] = useState(options);

  useEffect(() => {
    if (!!defaultValue) {
      console.log("here");
      setModifiedOptions(
        options.map((option) => {
          if (option.value === defaultValue.value) {
            return { ...option, selected: true };
          } else {
            return { ...option, selected: false };
          }
        })
      );
    }
  }, [defaultValue, options]);

  const handleChange = (event: any) => {
    const { value } = event.target;
    setValue(value);
    setModifiedOptions(
      options.map((option) => {
        if (option.value === value) {
          return { ...option, selected: true };
        }
        return option;
      })
    );
    const selectedOption: DropdownOptionProps = modifiedOptions.find(
      (option: DropdownOptionProps) => option.value === event.target.value
    )!;
    onSelection({ label: selectedOption.label, value: selectedOption.value });
  };

  return (
    <div>
      <label>
        {label}
        <select
          value={value}
          onChange={handleChange}
          name={inputName}
          id={inputName}
          className={ClassName}
        >
          {modifiedOptions.length !== 0 &&
            modifiedOptions.map((option: DropdownOptionProps) => (
              <option value={option.value} selected={option.selected}>
                {option.label}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
