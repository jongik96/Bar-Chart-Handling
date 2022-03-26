import axios from "axios";

const api =
  "https://api.odcloud.kr/api/15064119/v1/uddi:43646a6a-590a-4ab0-855d-ccad22c2c995?page=1&perPage=700&serviceKey=bvD1jhCEoKNFv%2FycSAuJgWpWf1PQt%2FNw5r5DxpDnpyyS3gl36iCLb9MhkZxfctiJdUxDeNBLNZX9NGO17%2BXgGA%3D%3D";

// async function fetchTestNumber() {
//   let response = await axios.get(api);
//   console.log(response.data);
//   return response.data;
// }

function fetchTestNumber() {
  return axios.get(api);
}

export { fetchTestNumber };
