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
const Skill_1 = __importDefault(require("../models/Skill"));
const skills = [
    new Skill_1.default('JavaScript', 5),
    new Skill_1.default('TypeScript', 4),
    new Skill_1.default('Python', 3),
    new Skill_1.default('Java', 3),
    new Skill_1.default('C#', 3),
    new Skill_1.default('C++', 2),
    new Skill_1.default('C', 2),
    new Skill_1.default('Ruby', 2),
    new Skill_1.default('PHP', 2),
    new Skill_1.default('Swift', 2),
    new Skill_1.default('Kotlin', 2),
    new Skill_1.default('Go', 2),
];
function getSkill(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            return resolve(skills.find(c => c.id === id));
        });
    });
}
function getSkills() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            return resolve(skills);
        });
    });
}
function addSkill(skill) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (!skill.name || !skill.level)
                return reject(new Error(`Invalid skill.`));
            const newSkill = new Skill_1.default(skill.name, skill.level);
            skills.push(newSkill);
            return resolve(newSkill);
        });
    });
}
function updateSkill(id, newSkill) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const index = skills.findIndex(c => c.id === id);
            if (index >= 0) {
                if (newSkill.name && skills[index].name !== newSkill.name)
                    skills[index].name = newSkill.name;
                if (newSkill.level && skills[index].level !== newSkill.level)
                    skills[index].level = newSkill.level;
                return resolve(skills[index]);
            }
            return resolve(undefined);
        });
    });
}
function deleteSkill(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const index = skills.findIndex(c => c.id === id);
            if (index >= 0) {
                skills.splice(index, 1);
                return resolve(true);
            }
            return resolve(false);
        });
    });
}
exports.default = {
    getSkill,
    getSkills,
    deleteSkill,
    addSkill,
    updateSkill
};
