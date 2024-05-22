"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SkillController_1 = __importDefault(require("../controllers/SkillController"));
const router = express_1.default.Router();
router.get('/:id', SkillController_1.default.getSkill);
router.get('/', SkillController_1.default.getSkills);
router.post('/', SkillController_1.default.postSkill);
router.patch('/:id', SkillController_1.default.patchSkill);
router.delete('/:id', SkillController_1.default.deleteSkill);
exports.default = router;
