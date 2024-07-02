import "./App.css";
import NotificationProvider from "./contexts/NotificationContext";
import Notification from "./components/Notification/Notification";
import ProfilRrovider from "./contexts/ProfilContext";
import Profil from "./components/Profil/Profil";

function App() {
  // tsak 1
  // return (
  //   <NotificationProvider>
  //     <Notification />
  //   </NotificationProvider>
  // );

  // task 2
  return (
    <ProfilRrovider>
      <Profil />
    </ProfilRrovider>
  );
}

export default App;
