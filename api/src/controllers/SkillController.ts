
import { Request, Response, NextFunction } from 'express';
import Skill from '../models/Skill';
import skillRepository from '../repositories/SkillRepository';

async function getSkill(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const skill = await skillRepository.getSkill(parseInt(id));
    if (skill)
        res.json(skill);
    else
        res.sendStatus(404);
}

async function getSkills(req: Request, res: Response, next: NextFunction) {
    const skills = await skillRepository.getSkills();
    res.json(skills);
}

async function postSkill(req: Request, res: Response, next: NextFunction) {
    const skill = req.body as Skill;
    const result = await skillRepository.addSkill(skill);
    if (result)
        res.status(201).json(result);
    else
        res.sendStatus(400);
}

async function patchSkill(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const skill = req.body as Skill;
    const result = await skillRepository.updateSkill(parseInt(id), skill);
    if (result)
        res.json(result);
    else
        res.sendStatus(404);
}

async function deleteSkill(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const success = await skillRepository.deleteSkill(parseInt(id));
    if (success)
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getSkill,
    getSkills,
    postSkill,
    patchSkill,
    deleteSkill
}
