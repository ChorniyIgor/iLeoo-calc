import Network from "../../Network";
import { calcNewTotalPrice } from "./price";
export const SET_METHOD_OF_CALC_WORDS = "SET_METHOD_OF_CALC_WORDS ";
export const CHANGE_WORDS_COUNT_INPUT = "CHANGE_WORDS_COUNT_INPUT";
export const ADD_TYPED_TEXT = "ADD_TYPED_TEXT";
export const ADD_FILE = "ADD_FILE";
export const ADD_WORDS_COUNT_TO_FILE = "ADD_WORDS_COUNT_TO_FILE";
export const UPDATE_TOTAL_FILES_WORDS = "UPDATE_TOTAL_FILES_WORDS";
export const DELETE_FILE = "DELETE_FILE";

export function setMethodOfCalcWords(methodName) {
  return {
    type: SET_METHOD_OF_CALC_WORDS,
    methodName
  };
}

export function changeWordCountInput(wordsCount) {
  return dispatch => {
    const count = parseInt(wordsCount) || 0;
    dispatch({
      type: CHANGE_WORDS_COUNT_INPUT,
      wordsCount: count
    });
    dispatch(calcNewTotalPrice());
  };
}

export function addTypedText(inputText) {
  return dispatch => {
    function countWords(s) {
      if (s === "") return 0;
      s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
      s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
      s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
      return s.split(" ").length;
    }
    const text = {
      contents: inputText,
      wordsCount: countWords(inputText)
    };

    dispatch({
      type: ADD_TYPED_TEXT,
      text
    });
    dispatch(calcNewTotalPrice());
  };
}

export function updateTotalFilesWords() {
  return (dispatch, getState) => {
    const files = getState().wordsCounter.files;
    let totalFilesWordsCount = 0;
    for (const key in files) {
      const file = files[key];
      const fileWordsCount = isNaN(parseInt(file.wordsCount)) ? 0 : parseInt(file.wordsCount);
      totalFilesWordsCount += fileWordsCount;
    }
    dispatch({
      type: UPDATE_TOTAL_FILES_WORDS,
      totalFilesWordsCount
    });
    dispatch(calcNewTotalPrice());
  };
}

export function checkWordsCountInFile(file) {
  return async (dispatch, getState) => {
    const resp = await Network.sendFileToTextomate(file);

    const fileName = resp.countedFiles[0].fileName;
    let wordsCount = resp.countedFiles[0].wordsNumberNN;
    wordsCount = wordsCount < 20 ? "unknown" : wordsCount;
    dispatch({
      type: ADD_WORDS_COUNT_TO_FILE,
      fileInfo: {
        fileName,
        wordsCount
      }
    });
    dispatch(updateTotalFilesWords());
  };
}

export function addFiles(newFiles) {
  return (dispatch, getState) => {
    const files = getState().wordsCounter.files;

    newFiles.forEach(file => {
      if (!(file.path in files)) {
        dispatch({
          type: ADD_FILE,
          file
        });
        dispatch(checkWordsCountInFile(file));
      }
    });
  };
}

export function deleteFile(fileName) {
  return dispatch => {
    dispatch({
      type: DELETE_FILE,
      fileName
    });
    dispatch(updateTotalFilesWords());
  };
}
