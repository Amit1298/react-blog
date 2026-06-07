import { useState } from "react";

function Checkbox() {
  const [skillSet, setSkillSet] = useState([]);

  const handleSkill = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkillSet([...skillSet, event.target.value]);
    } else {
      setSkillSet(skillSet.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <div>
      <h2>Checkbox Component</h2>
      <input type="checkbox" id="JS" value="JS" onChange={handleSkill} />
      <label htmlFor="JS">JavaScript</label>
      <br />
      <br />
      <input type="checkbox" id="React" value="React" onChange={handleSkill} />
      <label htmlFor="React">React</label>
      <br />
      <br />
      <input type="checkbox" id="PHP" value="PHP" onChange={handleSkill} />
      <label htmlFor="PHP">PHP</label>
      <br />
      <br />
      <input type="checkbox" id="Java" value="Java" onChange={handleSkill} />
      <label htmlFor="Java">Java</label>
      <br />
      <br />
      <p>Selected Skills: {skillSet.join(", ")}</p>
    </div>
  );
}

export default Checkbox;
