import Strategy from "./strategy";
import individual from "./individual";

export default class habitStrategy implements Strategy {
  // 尋找userList中除了自己與user習慣最相近的individual，需要把habit split成array
  match(user: individual, userList: individual[]): individual {
    const userListFilter = userList.filter(
      (individual) => individual.getId() !== user.getId()
    );
    let userHabits = user.getHabits().split(",");
    let maxMatch = 0;
    let maxMatchUser = userListFilter[0];
    for (let i in userListFilter) {
      let match = 0;
      let habits = userListFilter[i].getHabits().split(",");
      for (let j in userHabits) {
        if (habits.includes(userHabits[j])) {
          match++;
        }
      }
      if (match > maxMatch) {
        maxMatch = match;
        maxMatchUser = userListFilter[i];
      }
    }
    return maxMatchUser;
  }
}
