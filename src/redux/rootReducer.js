import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {appReducer} from "./appReducer";

//Совмещаем несколько редюсеров в один
export const rootReducer = combineReducers({
	posts: postsReducer,
	app: appReducer
});