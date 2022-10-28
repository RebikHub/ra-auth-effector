import React, { memo, ReactElement, useEffect } from "react";
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
import { $formError, startInputFx, resetForm } from "./effector/form";
import { getNewsListFx } from "./effector/news";
import { $newsItem, getNewsIdFx } from "./effector/newsId";

function App(): ReactElement {
  const userLoad = useStore(startInputFx.pending);
  const newsLoad = useStore(getNewsListFx.pending);
  const newsItemLoad = useStore(getNewsIdFx.pending);
  const error = useStore($formError);
  const newsItem = useStore($newsItem);
  
  useEffect(() => localStorage.clear(), [])

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => resetForm(), 2 * 1000)
      return () => clearTimeout(timer)
    }
  }, [error])
  
  

  return (
    <Routes>
      <Route index path="/" element={
        <>
          <NetoHeader>
            {userLoad ? <NetoLoader styleName={"loader-auth"}/> : <NetoForm/>}
          </NetoHeader>
          {error ? <NetoError error={error.message}/> : <NetoPlug/>}
        </>
      }/>
      <Route path="news" element={
        <>
          <NetoHeader>
            {userLoad ? <NetoLoader styleName={"loader-auth"}/> : <NetoLogout/>}
          </NetoHeader>
          {newsLoad || userLoad ? <NetoLoader styleName={''}/> : <NetoList/>}
        </>
      }/>
      <Route path="news/:newsId" element={
        <>
          <NetoHeader>
            <NetoLogout/>
          </NetoHeader>
          {newsItemLoad ? <NetoLoader styleName={''}/> : <NetoNews news={newsItem}/>}
        </>
      }/>
    </Routes>
  );
}

export default memo(App)