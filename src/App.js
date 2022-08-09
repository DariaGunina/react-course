import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { Footer } from "./components/Footer";

import styles from "./App.module.css";

const App = () => {
    const title = "Messenger";
    const subtitle = "Hello ReactJS Program";
    const text = "Have a nice day!"
    return (
        <div className={styles.container}>
            <Header
                title={title}
                subtitle={subtitle}
            />
            <Message text={text} />
            <Footer />
        </div>
    );
}

export default App;
