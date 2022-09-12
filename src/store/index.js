import { 
  createStore, 
  combineReducers, 
  applyMiddleware, 
  compose 
} from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { counterReducer } from "./counter";
import { profileReducer } from "./profile";
import { gistsReducer } from "./gists";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { logger, timeScheduler, botMessage } from "./middlewares";
import { getPublicApi, searchGistsByNameApi } from "../api/gists";

const api = { getPublicApi, searchGistsByNameApi };

const persistConfig = {
  key: "key",
  storage,
  whitelist: ["profile"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ 
    counter: counterReducer, 
    profile: profileReducer, 
    conversations: conversationsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
  })
);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      logger, 
      timeScheduler, 
      botMessage, 
      thunk.withExtraArgument(api)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);