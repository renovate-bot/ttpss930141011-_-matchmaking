import individual from "./individual";

export default interface Strategy {
  match(user: individual, userList: individual[]): individual;
}
