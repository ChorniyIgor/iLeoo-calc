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
    const data = new FormData();
    const fileName = doc.name;
    data.append("send_file", doc);
    try {
      const resp = await fetch("https://www.ileoo.de/test1/file.php", {
        method: "post",
        body: data
      });
      const respRes = await resp.json();
      return { respRes, fileName };
    } catch (e) {
      return { respRes: undefined, fileName };
    }
  }
}

export default new Network();
