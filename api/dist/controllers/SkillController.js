"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SkillRepository_1 = __importDefault(require("../repositories/SkillRepository"));
function getSkill(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const skill = yield SkillRepository_1.default.getSkill(parseInt(id));
        if (skill)
            res.json(skill);
        else
            res.sendStatus(404);
    });
}
function getSkills(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const skills = yield SkillRepository_1.default.getSkills();
        res.json(skills);
    });
}
function postSkill(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const skill = req.body;
        const result = yield SkillRepository_1.default.addSkill(skill);
        if (result)
            res.status(201).json(result);
        else
            res.sendStatus(400);
    });
}
function patchSkill(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const skill = req.body;
        const result = yield SkillRepository_1.default.updateSkill(parseInt(id), skill);
        if (result)
            res.json(result);
        else
            res.sendStatus(404);
    });
}
function deleteSkill(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const success = yield SkillRepository_1.default.deleteSkill(parseInt(id));
        if (success)
            res.sendStatus(204);
        else
            res.sendStatus(404);
    });
}
exports.default = {
    getSkill,
    getSkills,
    postSkill,
    patchSkill,
    deleteSkill
};
