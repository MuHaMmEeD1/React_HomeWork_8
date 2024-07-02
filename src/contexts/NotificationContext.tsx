import React, { createContext, useContext, useState } from "react";

type NotificationType = {
  messeg: string | null;
  sendMesseg: (value: string | null) => void;
};

const notificationContext = createContext({} as NotificationType);

export const useNotification = () => {
  return useContext(notificationContext);
};

interface Props {
  children: React.ReactNode;
}

const NotificationProvider: React.FC<Props> = ({ children }) => {
  const [messeg, setMesseg] = useState<string | null>(null);

  const sendMesseg = (value: string | null) => {
    setMesseg(value);
    setTimeout(() => {
      sendMesseg(null);
    }, 2000);
  };

  return (
    <notificationContext.Provider value={{ messeg, sendMesseg }}>
      {children}
    </notificationContext.Provider>
  );
};

export default NotificationProvider;
