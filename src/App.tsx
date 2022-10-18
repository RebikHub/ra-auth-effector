import React, { useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes, useNavigate } from "react-router-dom";
import NetoForm from "./components/NetoForm";
import NetoHeader from "./components/NetoHeader";
import NetoList from "./components/NetoList";
import NetoLogout from "./components/NetoLogout";
import NetoPlug from "./components/NetoPlug";
import NetoError from "./components/NetoError";
import NetoNews from "./components/NetoNews";
import useFetchAuthorization from "./custom_hook/useFetchAuthorization";

export default function App() {
  const token = JSON.parse(localStorage.getItem('token') || '')
  const [user, news, error, newsOne] = useFetchAuthorization(input, output, token, newsId)
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null && error === null) {
      navigate('/')
    }
  }, [user, error]);

  console.log('user: ', user)
  console.log('error: ', error);

  return (
    <RouterProvider router={createBrowserRouter(createRoutesFromElements(
      <Routes>
        <Route path="/" element={
          <>
            <NetoHeader>
              <NetoForm/>
            </NetoHeader>
            <NetoPlug/>
          </>
        }/>
        <Route path="/news" element={(user !== null && error === null) ? (
            <>
              <NetoHeader>
                <NetoLogout
                  user={user}/>
              </NetoHeader>
              <NetoList news={news}/>
            </>
            ) : <NetoError error={error}/>
          }/>
        <Route path="/news/:newsId" element={(user !== null && error === null) ? (
            <>
              <NetoHeader>
                <NetoLogout
                  user={user}/>
              </NetoHeader>
              <NetoNews news={newsOne}/>
            </>
            ) : <NetoError error={error}/>
        }/>
      </Routes>
      ))}/>
  );
}
