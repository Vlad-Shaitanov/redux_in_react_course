import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

//Слова, которые надо игнорировать
const forbidden = ["lol", "php", "spam"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((word) =>
          action.payload.title.includes(word)
        );

        if (found.length) {
          // console.log(`found: ${found}`);
          return dispatch(showAlert("Недопустимое слово"));
        }
      }
      return next(action);
    };
  };
}
