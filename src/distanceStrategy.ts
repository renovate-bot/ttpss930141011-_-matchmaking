import Strategy from "./strategy";
import individual from "./individual";

export default class DistanceStrategy implements Strategy {
  // 尋找userList中除了自己與user距離最近的individual
  match(user: individual, userList: individual[]): individual {
    const userListFilter = userList.filter(
      (individual) => individual.getId() !== user.getId()
    );
    let minDistance = Infinity;
    let minDistanceUser = userListFilter[0];
    for (let i in userListFilter) {
      let distance = Math.sqrt(
        Math.pow(user.getCoord().getX() - userListFilter[i].getCoord().getX(), 2) +
          Math.pow(user.getCoord().getY() - userListFilter[i].getCoord().getY(), 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        minDistanceUser = userListFilter[i];
      }
    }
    return minDistanceUser;
  }
}
