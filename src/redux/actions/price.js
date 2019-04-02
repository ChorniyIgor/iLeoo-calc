export const CALC_NEW_PRICE_PER_WORD = "CALC_NEW_PRICE_PER_WORD";
export const CALC_NEW_TOTAL_PRICE = "CALC_NEW_TOTAL_PRICE";
export const CHANGE_DISCOUNT_STATUS = "CHANGE_DISCOUNT_STATUS";
export const CHANGE_FINAL_DATE = "CHANGE_FINAL_DATE";

export function calcNewTotalPrice() {
  return (dispatch, getState) => {
    const state = getState();
    const wordsCounter = state.wordsCounter;
    const pricePerWord = state.price.pricePerWord;
    const totalWordsCount =
      wordsCounter.wordsCountInput +
      wordsCounter.textInput.wordsCount +
      wordsCounter.filesWordsCountInput;
    const discount = state.price.discount;
    const discountValue = discount.active ? 1 - discount.value : 1;
    const newTotalPrice = ((totalWordsCount * pricePerWord) / 100) * discountValue;
    dispatch({
      type: CALC_NEW_TOTAL_PRICE,
      totalPrice: newTotalPrice
    });
    dispatch(changeFinalDate(totalWordsCount));
  };
}

export function calcNewPricePerWord() {
  return (dispatch, getState) => {
    const state = getState();
    const source = state.languages.source;
    const targetLanguagesItems = state.languages.targetLanguagesItems;
    const languagesInfo = state.price.languagesInfo;
    let newPricePerWord = 0;
    targetLanguagesItems.forEach(targetLang => {
      const sourcePrice = source in languagesInfo ? languagesInfo[source].price : 0;
      const targetPrice = targetLang in languagesInfo ? languagesInfo[targetLang].price : 0;
      if (sourcePrice !== 0 && targetPrice !== 0) {
        newPricePerWord += (sourcePrice + targetPrice) / 2;
      }
    });
    dispatch({
      type: CALC_NEW_PRICE_PER_WORD,
      newPricePerWord
    });
    dispatch(calcNewTotalPrice());
  };
}

export function changeDiscountStatus(isChecked) {
  return dispatch => {
    dispatch({
      type: CHANGE_DISCOUNT_STATUS,
      isChecked
    });
    dispatch(calcNewTotalPrice());
  };
}

export function changeFinalDate(totalWordsCount) {
  function getTotalDaysRequiredToCompleteTask(taskWordsCount) {
    let TotalDaysRequiredToCompleteTask = 0;

    if (taskWordsCount <= 2500) {
      TotalDaysRequiredToCompleteTask = 1;
    }
    if (taskWordsCount > 2500 && taskWordsCount <= 4000) {
      TotalDaysRequiredToCompleteTask = 2;
    }
    if (taskWordsCount > 4000 && taskWordsCount <= 5500) {
      TotalDaysRequiredToCompleteTask = 3;
    }
    if (taskWordsCount > 5500 && taskWordsCount <= 8000) {
      TotalDaysRequiredToCompleteTask = 4;
    }
    if (taskWordsCount > 8000 && taskWordsCount <= 10500) {
      TotalDaysRequiredToCompleteTask = 5;
    }
    if (taskWordsCount > 10500 && taskWordsCount <= 13000) {
      TotalDaysRequiredToCompleteTask = 6;
    }
    if (taskWordsCount > 13000 && taskWordsCount <= 15500) {
      TotalDaysRequiredToCompleteTask = 7;
    }
    if (taskWordsCount > 15500 && taskWordsCount <= 18000) {
      TotalDaysRequiredToCompleteTask = 8;
    }
    if (taskWordsCount > 18000 && taskWordsCount <= 20500) {
      TotalDaysRequiredToCompleteTask = 9;
    }
    if (taskWordsCount > 20500 && taskWordsCount <= 23000) {
      TotalDaysRequiredToCompleteTask = 10;
    }
    if (taskWordsCount > 23000 && taskWordsCount <= 25000) {
      TotalDaysRequiredToCompleteTask = 12;
    }
    if (taskWordsCount > 25000) {
      TotalDaysRequiredToCompleteTask = 14;
    }

    return TotalDaysRequiredToCompleteTask;
  }

  function getFinalDate(TotalDaysRequiredToCompleteTask) {
    var getMonthByNumb = [
      "Januar",
      "Februar",
      "Marz",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember"
    ];

    const currentDate = new Date();
    const currentDayNumber = currentDate.getDate();
    currentDate.setDate(currentDayNumber + TotalDaysRequiredToCompleteTask);

    return `${currentDate.getDate()}. ${
      getMonthByNumb[currentDate.getMonth()]
    } ${currentDate.getFullYear()}, ${currentDate.getHours() + 1}:00`;
  }

  const finalDate = getFinalDate(getTotalDaysRequiredToCompleteTask(totalWordsCount));

  return {
    type: CHANGE_FINAL_DATE,
    newFinalDate: finalDate
  };
}
