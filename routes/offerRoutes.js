import express from "express";
import {
  getOfferById,
  getOffers,
  CreateOffer,
  DeleteOffer,
  createComment,
} from "../controllers/offerController.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getOffers);  //"/offers/"
router.route("/:id") //"/offers/ceva id"
  .get(getOfferById)
  .delete(protect, DeleteOffer)
  .put(protect, createComment);
router.route("/create").post(CreateOffer);

export default router;
