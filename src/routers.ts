import { createBrowserRouter } from "react-router-dom";
import NetoHeader from "./components/NetoHeader";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NetoHeader/>,
      //   <NetoForm
      //     login={login}
      //     password={password}
      //     handleInputLogin={handleInputLogin}
      //     handleInputPassword={handleInputPassword}
      //     handleClickIn={handleClickIn} />
      // <NetoPlug/>

  }
])