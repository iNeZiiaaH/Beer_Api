"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const beerController_1 = require("../controllers/beerController");
const router = express_1.default.Router();
router.post('/beers', beerController_1.createBeer);
router.get('/beers', beerController_1.getAllBeers);
router.get('/beers/:id', beerController_1.getBeerById);
router.put('/beers/:id', beerController_1.updateBeer);
router.delete('/beers/:id', beerController_1.deleteBeer);
exports.default = router;
