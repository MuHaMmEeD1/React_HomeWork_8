import { ChangeEvent, FormEvent, useState } from "react";
import { useNotification } from "../../../contexts/NotificationContext";

const NotificationForm = () => {
  const [messegInput, setMessegInput] = useState("");
  const { sendMesseg } = useNotification();

  const onChangeMesseg = (e: ChangeEvent<HTMLInputElement>) => {
    setMessegInput(e.target.value);
  };

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMesseg(messegInput);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="NotificationMesseg"
        value={messegInput}
        onChange={onChangeMesseg}
      />
      <button>Notification</button>
    </form>
  );
};

export default NotificationForm;
