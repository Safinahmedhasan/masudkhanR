import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

const Main = () => {
  const navigation = useNavigation();

  const load = navigation.state === "loading";

  return (
    <div>
      <Navbar />
      {load ? <p>Loading...</p> : <Outlet />}
    </div>
  );
};

export default Main;
