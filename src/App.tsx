import React from "react";
import { Route, Routes } from "react-router-dom";
import NetoForm from "./components/NetoForm";
import NetoHeader from "./components/NetoHeader";
import NetoList from "./components/NetoList";
import NetoLogout from "./components/NetoLogout";
import NetoPlug from "./components/NetoPlug";
import NetoError from "./components/NetoError";
import NetoNews from "./components/NetoNews";
import NetoLoader from "./components/NetoLoader";
import { useStore } from "effector-react";
import { $inputLoad } from "./effector/form";

export default function App() {
  const inputLoading = useStore($inputLoad);
  console.log(inputLoading);
  

  // if (error) {
  //   return (<NetoError error={error}/>)
  // }

  return (
    <Routes>
      <Route index path="/" element={
        <>
          <NetoHeader>
            {inputLoading ? <NetoLoader styleName={"loader-auth"}/> : <NetoForm/>}
          </NetoHeader>
          <NetoPlug/>
        </>
      }/>
      <Route path="/news" element={
        <>
          <NetoHeader>
            <NetoLogout/>
          </NetoHeader>
          {/* <NetoList news={news}/> */}
        </>
      }/>
      <Route path="/news/:newsId" element={
        <>
          <NetoHeader>
            <NetoLogout/>
          </NetoHeader>
          {/* <NetoNews news={newsOne}/> */}
        </>
      }/>
    </Routes>
  );
}
