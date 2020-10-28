/* Custom Commands Module */

const { default: Axios } = require("axios");

class Features {
  getCodeRepository = () => {
    return "https://github.com/VivekAlhat/Telegram-Bot";
  };

  getRandomActivity = async () => {
    const response = await Axios.get("http://www.boredapi.com/api/activity/");
    const data = await response.data;
    return data;
  };
}

module.exports = new Features();
