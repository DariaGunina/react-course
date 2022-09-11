import { sendMessage, SEND_MESSAGE } from "../messages";
import { USERS } from "../../constants";


export const botMessage = (store) => (next) => (action) => {
  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author === USERS.USER
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessage(action.payload.roomId, {
          author: USERS.OPPONENT,
          message: "hello from middleware",
        })
      );
    }, 1500);
  }

  return next(action);
};