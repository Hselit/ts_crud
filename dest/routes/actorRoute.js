"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actorController_1 = require("../controllers/actorController");
const router = (0, express_1.Router)();
router.get('/', actorController_1.getActors);
exports.default = router;
