import individual from "./individual";
import Strategy from "./strategy";

export default class MatchMakingSystem {
  constructor(public userList: individual[], public strategy: Strategy) {
    this.setUserList(userList);
    this.setStrategy(strategy);
  }
  setUserList(userList: individual[]) {
    this.userList = userList;
  }
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  getUserList() {
    return this.userList;
  }
  getStrategy() {
    return this.strategy;
  }
  match(user: individual): individual {
    return this.strategy.match(user, this.userList);
  }
}
