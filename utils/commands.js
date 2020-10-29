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

  getBitcoinPrice = async () => {
    const response = await Axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice/INR.json"
    );
    const data = await response.data;
    return data;
  };

  getRandomFact = async () => {
    const response = await Axios.get(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );

    const data = await response.data;
    return data;
  };
}

module.exports = new Features();
