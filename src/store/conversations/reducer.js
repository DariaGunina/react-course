import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";
import { chatList } from "../../mock";
import { nanoid } from "nanoid";

const initialState = {
  conversations: chatList,
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, {
          title: action.payload,
          subtitle: "Data",
          time: new Date().toLocaleTimeString().slice(0,-3),
          id: nanoid(),
        }],
      };

    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.title !== action.payload
        ),
      };

    default:
      return state;
  }
};