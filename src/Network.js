class Network {
  sendOrderToTelegram(msg) {
    const token = "759683725:AAFf-_RqMtmLPV1bnW8_m02jfJ8MylVI1NI";
    const chat_id = "-351480231";
    const formData = new FormData();
    formData.append("chat_id", chat_id);
    formData.append("parse_mode", "html");
    formData.append("text", msg);
    console.log(msg);
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "post",
      body: formData
    });
  }

  sendFileToTelegram(file) {
    const token = "759683725:AAFf-_RqMtmLPV1bnW8_m02jfJ8MylVI1NI";
    const chat_id = "-351480231";
    const formData = new FormData();
    formData.append("chat_id", chat_id);
    formData.append("document", file);

    fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
      method: "post",
      body: formData
    });
  }

  async sendFileToTextomate(doc) {
    var data = new FormData();
    data.append("send_file", doc);
    try {
      const resp = await fetch("https://www.ileoo.de/test1/file.php", {
        method: "post",
        body: data
      });
      const respRes = await resp.json();
      return respRes;
    } catch (e) {
      console.log(e, "Error!!!");
    }
  }
}

export default new Network();
