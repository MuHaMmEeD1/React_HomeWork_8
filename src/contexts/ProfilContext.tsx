import { createContext, useContext, useState } from "react";

type ProfilType = {
  name: string;
  setName: (value: string) => void;
};

const Profil = createContext({} as ProfilType);

export const useProfil = () => {
  return useContext(Profil);
};

interface Props {
  children: React.ReactNode;
}

const ProfilRrovider: React.FC<Props> = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <Profil.Provider value={{ name, setName }}>{children}</Profil.Provider>
  );
};

export default ProfilRrovider;
