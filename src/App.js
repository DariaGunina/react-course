import { Header } from "./features/Header";
import { Footer } from "./features/Footer";
import { MessageList } from "./features/MessageList";

import styles from "./App.module.css";


const App = () => {
  const title = "Messenger";
  const subtitle = "Hello ReactJS Program";

  return (
    <div className={styles.container}>
      <Header
        title={title}
        subtitle={subtitle}
      />
      <MessageList />
      <Footer />
    </div>
  );
}

export default App;
