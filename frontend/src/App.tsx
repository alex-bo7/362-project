import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Account from "./pages/Account";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);

  function HandleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={
            <LoginPage
              isLoggedIn={isLoggedIn}
              handleLogin={HandleLogin}
              setUserId={setUserId}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignupPage
              isLoggedIn={isLoggedIn}
              handleLogin={HandleLogin}
              setUserId={setUserId}
            />
          }
        />
        <Route
          path="/account"
          element={<Account isLoggedIn={isLoggedIn} userId={userId} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
