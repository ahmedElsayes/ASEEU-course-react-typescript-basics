import Dropdown from "../components/Dropdown";

const TestPage = () => {
  const defaultValue = { label: "label 2", value: "2" };

  const handleChange = (value: any) => {
    console.log("Test here ", value);
  };

  return (
    <Dropdown
      label="Test Dropdown"
      defaultValue={defaultValue}
      options={[
        { label: "label 1", value: "1" },
        { label: "label 2", value: "2" },
      ]}
      inputName="testDropdown"
      onSelection={handleChange}
      ClassName="testdropdownClass"
    />
  );
};

export default TestPage;
