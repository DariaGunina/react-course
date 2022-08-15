import { Header } from "./features/Header";
import { Footer } from "./features/Footer";
import { Layout } from "./features/Layout";

import { Container } from "./styles";

const App = () => {
  const title = "Messenger";
  const subtitle = "Hello ReactJS Program";

  return (
    <Container>
      <Header
        title={title}
        subtitle={subtitle}
      />
      <Layout />
      <Footer />
    </Container>
  );
}

export default App;
