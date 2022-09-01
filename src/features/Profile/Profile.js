import { Container, Text, Avatar} from "./styles";
import image from "../../assets/avatar2.jpg";

export const Profile = () => {
  return (
    <Container>
      <Avatar src={image} alt="avatar" />
      <Text>Name: Daria</Text>
      <Text>Phone: +78965647757</Text>
    </Container>
  )
};