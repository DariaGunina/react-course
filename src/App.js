import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./features/Header";
import { Footer } from "./features/Footer";
import { HomePage,  ProfilePage, ChatPage} from "./pages";

import { Container } from "./styles";

const App = () => {
  const title = "Messenger";
  const subtitle = "Hello ReactJS Program";

  return (
    <Container>
      <BrowserRouter>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
