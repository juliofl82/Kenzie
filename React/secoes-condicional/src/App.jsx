import { useState } from 'react';
import {LoginSection} from "./components/LoginSection/index.jsx";
import {RestrictedSection} from "./components/RestrictedSection/index.jsx";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  console.log("Is login:", isLogin);

  return (
    <>
      {isLogin ? <RestrictedSection setIsLogin={setIsLogin} /> : <LoginSection setIsLogin={setIsLogin} />}
    </>
  )
}

export default App
