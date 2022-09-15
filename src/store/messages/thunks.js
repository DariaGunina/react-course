import {
  sendMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
  sendMessagesError,
  sendMessagesStart
} from "./action";
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

export const getMessages = () => async (dispatch, _, api) => {
  const messages = {};

  try {
    dispatch(getMessagesStart());

    const snapshot = await api.getMessagesApi();

    snapshot.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });

    dispatch(getMessagesSuccess(messages));
  } catch (e) {
    dispatch(getMessagesError(e));
  }
};

export const sendMessageFb = (message, roomId) => async (dispatch, _, api) => {
  try {
    dispatch(sendMessagesStart());
    const newMessage = await api.createMessageApi(message, roomId);
    dispatch(sendMessageWithBot(roomId, newMessage));
  } catch (e) {
    dispatch(sendMessagesError(e));
  }
};