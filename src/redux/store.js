import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import rootReducer from "./rootReducer";

const initStor = () => createStore(rootReducer);

export const wrapper = createWrapper(initStor);
