"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiController_1 = require("../controllers/apiController");
class ApiRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post("/jison/", apiController_1.apiController.ejecutar);
        // this.router.post("/", apiController.funcion2);
        // this.router.get("/:nombre", apiController.funcion3);
        // this.router.get("/saludo/:nombre", apiController.funcion4);
    }
}
const apiRoutes = new ApiRoutes();
exports.default = apiRoutes.router;
