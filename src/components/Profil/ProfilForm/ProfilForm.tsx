import { ChangeEvent, FormEvent, useState } from "react";
import { useProfil } from "../../../contexts/ProfilContext";

const ProfilForm = () => {
  const [inputName, setInputName] = useState("");
  const { setName } = useProfil();

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(inputName);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={inputName} onChange={onChangeName} />
      <button>Submit</button>
    </form>
  );
};

export default ProfilForm;
