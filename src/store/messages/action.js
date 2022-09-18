import { 
  SEND_MESSAGE, 
  DELETE_MESSAGE, 
  GET_MESSAGES_START, 
  GET_MESSAGES_SUCCESS, 
  GET_MESSAGES_ERROR,
  SEND_MESSAGES_START,
  SEND_MESSAGES_ERROR
} from "./types";

export const sendMessage = (roomId, message) => {
  return { type: SEND_MESSAGE, payload: { roomId, message }, meta: { delay: 500 } };
};

export const deleteMessage = (roomId, messageId) => {
  return { type: DELETE_MESSAGE, payload: { roomId, messageId } };
};

export const getMessagesStart = () => ({ type: GET_MESSAGES_START });

export const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages,
});

export const getMessagesError = (error) => ({
  type: GET_MESSAGES_ERROR,
  payload: error,
});

export const sendMessagesStart = () => ({ type: SEND_MESSAGES_START });

export const sendMessagesError = (error) => ({
  type: SEND_MESSAGES_ERROR,
  payload: error,
});