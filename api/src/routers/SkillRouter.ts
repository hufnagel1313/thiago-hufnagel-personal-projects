import express from 'express';
import skillController from '../controllers/SkillController';

const router = express.Router();

router.get('/:id', skillController.getSkill);

router.get('/', skillController.getSkills);

router.post('/', skillController.postSkill);

router.patch('/:id', skillController.patchSkill);

router.delete('/:id', skillController.deleteSkill);

export default router;