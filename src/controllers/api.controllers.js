import { getDailyUniverseImage } from "../modules/apod.js";
import {
  getAllBodiesInTheUniverse,
  getDetailsForASingleBody,
} from "../modules/openSolar.js";
import {
  getSpaceExProjectsLatestPhaseRequest,
  ,
} from "../modules/spaceEx.js";

const getDailyUniverseImageController = async (req,res) => {
    const data = await getDailyUniverseImage()
};
const getAllBodiesInTheUniverseController = () => {};
const getDetailsForASingleBodyController = () => {};
const getLatesSpaceProjectsController = () => {};
const getDetailsForASingleBodyController = () => {};
