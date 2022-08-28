import { WelcomeImage, Container, Text } from "./styles";
import image from "../../assets/welcome.jpg";

export const Home = () => {
  return (
    <Container> 
      <Text>Welcome to the MESSENGER</Text>
      <WelcomeImage
        src={image}
        alt="image"
      />
    </Container> 
  )
};