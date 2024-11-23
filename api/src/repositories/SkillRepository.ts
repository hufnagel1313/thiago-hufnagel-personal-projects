import { Skill } from "../models/Skill";

const skills: Skill[] = [
    { id: 1, name: 'JavaScript', level: 5 },
    { id: 2, name: 'JavaScript', level: 5 },
    { id: 3, name: 'TypeScript', level: 4 },
    { id: 4, name: 'Python', level: 3 },
    { id: 5, name: 'Java', level: 3 },
    { id: 6, name: 'C#', level: 3 },
    { id: 7, name: 'C++', level: 2 },
    { id: 8, name: 'C', level: 2 },
    { id: 9, name: 'Ruby', level: 2 },
    { id: 10, name: 'PHP', level: 2 },
    { id: 11, name: 'Swift', level: 2 },
    { id: 12, name: 'Kotlin', level: 2 },
    { id: 13, name: 'Go', level: 2 },
    { id: 14, name: 'Rust', level: 2 },
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

        const newSkill = { id: skills.length + 1, name: skill.name, level: skill.level };
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

const skillRepository = {
    getSkill,
    getSkills,
    deleteSkill,
    addSkill,
    updateSkill
};

export default skillRepository;

