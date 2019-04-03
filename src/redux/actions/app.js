import Network from "../../Network";
export const SHOW_ORDER_FORM_SCREEN = "SHOW_ORDER_FORM_SCREEN";
export const SHOW_CALCULATOR_SCREEN = "SHOW_CALCULATOR_SCREEN";
export const SEND_ORDER_MESSAGE = "SEND_ORDER_MESSAGE";

export function showOrderFormScreen() {
  return {
    type: SHOW_ORDER_FORM_SCREEN
  };
}

export function showCalculatorScreen() {
  return {
    type: SHOW_CALCULATOR_SCREEN
  };
}

export function sendOrderMessage() {
  return (dispatch, getState) => {
    const state = getState();
    const userInfo = state.userInfo;
    const languages = state.languages;
    const wordsCounter = state.wordsCounter;
    const price = state.price;
    const orderNumb = new Date().getTime();
    const msg = `Нове замовлення із <a href="https://www.ileoo.de/">iLeoo.de</a>
    № замовлення: ${orderNumb}
    Ім'я замовника: ${userInfo.name} ${userInfo.lastName} 
    Контакт: ${userInfo.email} 
    Повідомлення від клієнта: ${userInfo.message} 

    Переклад з: ${languages.source}
    Переклад на: 
    ${languages.targetLanguagesItems.map(item => {
      return `${item} `;
    })}
    Текст надрукований користувачем:
      ${wordsCounter.textInput.contents}
    Файли які прикріпив користувач:
      ${Object.keys(wordsCounter.files).map(item => {
        return `${item} `;
      })}

    Користувач ${price.discount.active ? `активував` : `не активовував`} знижку
    Вартість розрахована на сайті: ${price.totalPrice} €  (${price.pricePerWord / 100} €/Wort€)
    `;

    Network.sendOrderToTelegram(msg);
    Object.keys(wordsCounter.files).forEach(name => {
      const fileItem = wordsCounter.files[name];
      Network.sendFileToTelegram(fileItem.file);
    });
  };
}
