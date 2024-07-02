import { useProfil } from "../../contexts/ProfilContext";
import ProfilForm from "./ProfilForm/ProfilForm";

const Profil = () => {
  const { name } = useProfil();

  return (
    <div>
      <p>{name}</p>
      <ProfilForm />
    </div>
  );
};

export default Profil;
