import axios from "axios";

// API URL
const url = `https://api.nasa.gov/planetary/apod`;

export async function getDailyUniverseImage(date, month, year) {
  try {
    const response = await axios.get(url, {
      params: {
        api_key: "DEMO_KEY",
        date: `${year}-${month}-${date}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
}
