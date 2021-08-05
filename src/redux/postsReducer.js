//Первоначальное состояние
import {CREATE_POST, FETCH_POSTS} from "./types";

const initialState = {
	posts: [],
	fetchedPosts: [],
};

//Pure functions
export const postsReducer = (state = initialState, action) => {
	switch (action.type){
		case CREATE_POST:
			// 1 Способ
			return {...state, posts: state.posts.concat([action.payload])};
			// 2 Способ
			// return {...state, posts: [...state.posts, action.payload]};
		case FETCH_POSTS:
			return {...state, fetchedPosts: action.payload};
		default: return state;
	}
};