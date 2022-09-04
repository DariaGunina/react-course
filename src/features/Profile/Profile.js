import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../../store/profile";
import image from "../../assets/avatar2.jpg";
import { ProfileForm } from "../ProfileForm";

import { Container, Text, Avatar, Button} from "./styles";

export const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <Container>
      <Avatar src={image} alt="avatar" />
      {profile.isVisibleProfile && (
        <>
          <Text>FirstName: {profile.firstName}</Text>
          <Text>LastName:  {profile.lastName}</Text>
          <Text>Phone: {profile.phone}</Text>
        </>
      )}
      <Button onClick={() => dispatch(toggleVisibleProfile())}>Toggle</Button>
      <ProfileForm {...profile} />
    </Container>
  )
};