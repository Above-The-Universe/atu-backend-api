import axios from "axios";

export async function getSpaceExProjectsLatestPhaseRequest(project, mission) {
  try {
    const response = await axios.get(
      `https://r4ygm.github.io/SpaceXTelemetry-Api/launch/latest.json`
    );
    const data = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
}
