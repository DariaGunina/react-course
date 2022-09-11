import { sendMessage } from "./action";
import { USERS } from "../../constants";

export const sendMessageWithBot = (roomId, message) => (dispatch) => {
  dispatch(sendMessage(roomId, message));

  if (message.author === USERS.USER) {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, { message: "hello from thunk" , author: USERS.OPPONENT })
      );
    }, 500);
  }
};