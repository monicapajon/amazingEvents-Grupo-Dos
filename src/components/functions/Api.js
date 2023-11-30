import axios from "axios";

const getData = async (url, setData) => {
  try {
    const response = await axios.get(url);
    console.log(response.data)
    setData(response.data);
  } catch (error) {
    setData([]);
  }
};

export default getData;
