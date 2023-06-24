import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a3994207f5b24d568ce628307ac82560",
  },
});
