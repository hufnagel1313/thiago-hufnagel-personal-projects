import Skill from "../models/Skill";

const skills: Skill[] = [
    new Skill('JavaScript', 5),
    new Skill('TypeScript', 4),
    new Skill('Python', 3),
    new Skill('Java', 3),
    new Skill('C#', 3),
    new Skill('C++', 2),
    new Skill('C', 2),
    new Skill('Ruby', 2),
    new Skill('PHP', 2),
    new Skill('Swift', 2),
    new Skill('Kotlin', 2),
    new Skill('Go', 2),
];

async function getSkill(id: number): Promise<Skill | undefined> {
    return new Promise((resolve, reject) => {
        return resolve(skills.find(c => c.id === id));
    });
}

async function getSkills(): Promise<Skill[]> {
    return new Promise((resolve, reject) => {
        return resolve(skills);
    });
}

async function addSkill(skill: Skill): Promise<Skill> {
    return new Promise((resolve, reject) => {
        if (!skill.name || !skill.level)
            return reject(new Error(`Invalid skill.`));

        const newSkill = new Skill(skill.name, skill.level);
        skills.push(newSkill);

        return resolve(newSkill);
    })
}

async function updateSkill(id: number, newSkill: Skill): Promise<Skill | undefined> {
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
    })
}

async function deleteSkill(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const index = skills.findIndex(c => c.id === id);
        if (index >= 0) {
            skills.splice(index, 1);
            return resolve(true);
        }

        return resolve(false);
    })
}

export default {
    getSkill,
    getSkills,
    deleteSkill,
    addSkill,
    updateSkill
}

