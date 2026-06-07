import { useState } from "react";

function RadioButton() {
  const [selectedGender, setSelectedGender] = useState("female");

  const handleGenderChange = (event) => {
    console.log(event.target.value);
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      <h2>Radio Button Component</h2>
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        checked={selectedGender === "male"}
        onChange={handleGenderChange}
      />
      <label htmlFor="male">Male</label>
      <br />
      <br />
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        checked={selectedGender === "female"}
        onChange={handleGenderChange}
      />
      <label htmlFor="female">Female</label>
      <br />
      <br />
      <input
        type="radio"
        id="other"
        name="gender"
        value="other"
        checked={selectedGender === "other"}
        onChange={handleGenderChange}
      />
      <label htmlFor="other">Other</label>
      <br />
      <br />
      <p>Selected Gender: {selectedGender}</p>
    </div>
  );
}

export default RadioButton;
