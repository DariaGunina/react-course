import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./features/Header";
import { Footer } from "./features/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { PublicRoute, PrivateRoute } from "./features/route/route";
import { auth } from "./api/firebase";
import { 
  HomePage,  
  ProfilePage, 
  ChatPage, 
  GistsPage, 
  LoginPage, 
  SignUpPage
} from "./pages";

import { Container } from "./styles";

const App = () => {
  const title = "Messenger";
  const subtitle = "Hello ReactJS Program";

  const [session, setSession] = useState(null);

  const isAuth = session?.email;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  return (
    <Container>
      <BrowserRouter>
        <Header
          title={title}
          subtitle={subtitle}
          email={session?.email}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute isAuth={isAuth}>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/chat/*"
            element={
              <PrivateRoute isAuth={isAuth}>
                <ChatPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/gists"
            element={
              <PrivateRoute isAuth={isAuth}>
                <GistsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute isAuth={isAuth}>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute isAuth={isAuth}>
                <SignUpPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
