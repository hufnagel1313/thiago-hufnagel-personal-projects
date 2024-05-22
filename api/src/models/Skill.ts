class Skill {
    id: number = 0;
    name: string;
    level: number;

    constructor(name: string, level: number) {
        this.name = name;
        this.level = level;
    }
}

export default Skill;