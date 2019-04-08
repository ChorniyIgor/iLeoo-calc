import Network from "../../Network";
import { calcNewTotalPrice } from "./price";
export const SET_METHOD_OF_CALC_WORDS = "SET_METHOD_OF_CALC_WORDS ";
export const CHANGE_WORDS_COUNT_INPUT = "CHANGE_WORDS_COUNT_INPUT";
export const ADD_TYPED_TEXT = "ADD_TYPED_TEXT";
export const ADD_FILE = "ADD_FILE";
export const ADD_WORDS_COUNT_TO_FILE = "ADD_WORDS_COUNT_TO_FILE";
export const UPDATE_TOTAL_FILES_WORDS = "UPDATE_TOTAL_FILES_WORDS";
export const DELETE_FILE = "DELETE_FILE";
export const CAHNGE_FILE_COUNTING_ERROR_VALUE = "CAHNGE_FILE_COUNTING_ERROR_VALUE";

export function getTotalWordsCount({ wordsCounter }) {
  const wordsCountInput = wordsCounter.wordsCountInput;
  const wordsCountTextInput = wordsCounter.textInput.wordsCount;
  const wordsCountFiles = wordsCounter.filesWordsCountInput;
  const isFilesCountingError = wordsCounter.isFilesCountingError;
  const loadedFileCount = Object.keys(wordsCounter.files).length;

  let totalWordsCount = 0;
  //Документи загрузились і усі слова успішно підраховані
  if (loadedFileCount > 0 && !isFilesCountingError) {
    totalWordsCount = wordsCountTextInput + wordsCountFiles;
  }
  //Під час підрахунку слів виникла помилка
  else if (loadedFileCount > 0 && isFilesCountingError) {
    totalWordsCount = wordsCountInput + wordsCountTextInput;
  }
  //Документи взагалі не прикріплювали ввели просто текст
  else if (loadedFileCount === 0 && wordsCountTextInput > 0) {
    totalWordsCount = wordsCountTextInput;
  }
  //Ввели лише кількість слів
  else if (loadedFileCount === 0 && wordsCountTextInput === 0 && wordsCountInput > 0) {
    totalWordsCount = wordsCountInput;
  } else {
    totalWordsCount = 0;
  }

  return totalWordsCount;
}

export function setMethodOfCalcWords(methodName) {
  return dispatch => {
    dispatch({
      type: SET_METHOD_OF_CALC_WORDS,
      methodName
    });
    dispatch(calcNewTotalPrice());
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
  return async dispatch => {
    const { respRes: resp, fileName } = await Network.sendFileToTextomate(file);

    let wordsCount;
    if (resp !== undefined) {
      wordsCount = resp.countedFiles[0].wordsNumberNN;
      wordsCount = wordsCount < 20 ? "unknown" : wordsCount;
    } else wordsCount = "unknown";
    dispatch({
      type: ADD_WORDS_COUNT_TO_FILE,
      fileInfo: {
        fileName,
        wordsCount
      }
    });
    dispatch(checkFilesForCountingError());
    dispatch(updateTotalFilesWords());
  };
}

export function checkFilesForCountingError() {
  return (dispatch, getState) => {
    const files = getState().wordsCounter.files;
    const isErrorInState = getState().wordsCounter.isFilesCountingError;

    let actualIsError = false;
    for (const fileName in files) {
      const file = files[fileName];
      if (file.wordsCount === "unknown") {
        actualIsError = true;
      }
    }

    if (isErrorInState !== actualIsError) {
      dispatch({
        type: CAHNGE_FILE_COUNTING_ERROR_VALUE,
        newValue: actualIsError
      });
    }
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
    dispatch(checkFilesForCountingError());
    dispatch(updateTotalFilesWords());
  };
}
