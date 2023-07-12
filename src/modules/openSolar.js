import axios from "axios";
const api_url = "https://api.le-systeme-solaire.net/rest/bodies";

export async function getAllBodiesInTheUniverse() {
  try {
    const response = await axios.get(api_url);
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}
// Id represents names of planets,stars and other cosmic bodies
export async function getDetailsForASingleBody(id) {
  try {
    const response = await axios.get(`${api_url}/${id}`);
    const data = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
}
