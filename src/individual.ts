import coord from "./coord";

export default class individual {
  id!: number;
  gender!: string;
  age!: number;
  coord!: coord;
  habits!: string;
  intro: string = "";

  constructor(
    id: number,
    gender: string,
    age: number,
    intro: string,
    coord: coord,
    habits: string
  ) {
    this.setId(id);
    this.setGender(gender);
    this.setAge(age);
    this.setIntro(intro);
    this.setCoord(coord);
    this.setHabits(habits);
  }

  setId(id: number) {
    this.id = id;
  }
  setGender(gender: string) {
    this.gender = gender;
  }
  setAge(age: number) {
    this.age = age;
  }
  setIntro(intro: string) {
    this.intro = intro;
  }
  setCoord(coord: coord) {
    this.coord = coord;
  }
  setHabits(habits: string) {
    this.habits = habits;
  }

  getId() {
    return this.id;
  }
  getGender() {
    return this.gender;
  }
  getAge() {
    return this.age;
  }
  getIntro() {
    return this.intro;
  }
  getCoord() {
    return this.coord;
  }
  getHabits() {
    return this.habits;
  }
}
