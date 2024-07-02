import { useNotification } from "../../../contexts/NotificationContext";

const NotificationMesseg = () => {
  const { messeg } = useNotification();

  return messeg != null ? (
    <p
      style={{
        position: "absolute",
        top: 10,
        background: "green",
        color: "white",
        padding: 10,
        fontSize: 30,
        left: "70%",
      }}
    >
      {messeg}
    </p>
  ) : (
    <></>
  );
};

export default NotificationMesseg;
