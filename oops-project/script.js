// Trainer assign gym plan

class WorkoutPlan {
    constructor(name, level, duration) {
        this.name = name;
        this.level = level;
        this.duration = duration;
    }

    get details() {
        return `${this.name} Plan - Level: ${this.level}, Duration: ${this.duration} weeks`;
    }
}

class GymUser {
    constructor(name) {
        this.name = name;
        this.assignedPlan = null;
    }

    get planInfo() {
        return this.assignedPlan
            ? `Plan for ${this.name}: ${this.assignedPlan.details}`
            : `${this.name} has no workout plan yet.`;
    }
}

class Trainer extends GymUser {
    assignPlan(user, plan) {
        user.assignedPlan = plan; // ✅ fixed
        console.log(`✅ Trainer ${this.name} assigned "${plan.name}" to ${user.name}`);
    }
}

// Demo
const user1 = new GymUser('Om');
const trainer1 = new Trainer('Sylvester Stallone');
const plan1 = new WorkoutPlan('Muscle Gain', 'Advanced', 6);

console.log(user1.planInfo);        // 🔹 Before assigning
trainer1.assignPlan(user1, plan1);  // 🔹 Assign plan
console.log(user1.planInfo);        // 🔹 After assigning
