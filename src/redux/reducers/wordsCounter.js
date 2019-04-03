import {
  SET_METHOD_OF_CALC_WORDS,
  ADD_FILE,
  ADD_TYPED_TEXT,
  CHANGE_WORDS_COUNT_INPUT,
  DELETE_FILE,
  ADD_WORDS_COUNT_TO_FILE,
  UPDATE_TOTAL_FILES_WORDS
} from "../actions/wordsCounter";

const initialState = {
  method: "download_files",
  wordsCountInput: 0,
  textInput: {
    contents: "",
    wordsCount: 0
  },
  filesWordsCountInput: 0,
  files: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WORDS_COUNT_INPUT:
      return {
        ...state,
        wordsCountInput: action.wordsCount
      };
    case ADD_TYPED_TEXT:
      return {
        ...state,
        textInput: action.text
      };
    case ADD_FILE: {
      const files = state.files;
      files[action.file.path] = { file: action.file, wordsCount: false };
      return {
        ...state,
        files: { ...files }
      };
    }
    case ADD_WORDS_COUNT_TO_FILE: {
      const fileInfo = action.fileInfo;
      const files = state.files;
      files[fileInfo.fileName].wordsCount = fileInfo.wordsCount;
      return {
        ...state,
        files: { ...files }
      };
    }
    case UPDATE_TOTAL_FILES_WORDS: {
      return {
        ...state,
        filesWordsCountInput: action.totalFilesWordsCount
      };
    }
    case DELETE_FILE: {
      const files = state.files;
      delete files[action.fileName];
      return {
        ...state,
        files: { ...files }
      };
    }
    case SET_METHOD_OF_CALC_WORDS:
      return {
        ...state,
        method: action.methodName
      };
    default:
      return { ...state };
  }
};
