import express from "express";

import {
  getDetailsForASingleBody,
  getAllBodiesInTheUniverse,
} from "../modules/openSolar.js";

import { getDailyUniverseImage } from "../modules/apod.js";

import { getSpaceExProjectsLatestPhaseRequest } from "../modules/spaceEx.js";

const router = express.Router();

router.get("/get-daily-image/:date/:month/:year", async (req, res) => {
  try {
    const { date, month, year } = req.params;

    const data = await getDailyUniverseImage(date, month, year);
    console.log(data);
    res.status(200).json({
      status: "success",
      data: {
        getImage: data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "operation failed",
    });
  }
});

router.get("/all-planetary-bodies", async (req, res) => {
  try {
    const data = await getAllBodiesInTheUniverse();
    res.status(200).json({
      status: "success",
      results: data.bodies.length,
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "operation failed",
    });
  }
});
router.get("/planetary-bodies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getDetailsForASingleBody(id);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "operation failed",
    });
  }
});
router.get("/latest-space-mission-telemetry", async (req, res) => {
  try {
    const data = await getSpaceExProjectsLatestPhaseRequest();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "operation failed",
    });
  }
});

export default router;
