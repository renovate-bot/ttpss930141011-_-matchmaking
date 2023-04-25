import coord from "./coord";
import DistanceStrategy from "./distanceStrategy";
import habitStrategy from "./habitStrategy";
import individual from "./individual";
import MatchMakingSystem from "./matchMakingSystem";

const a = new individual(1,'male',20,'', new coord(1,1), 'reading,swimming')
const b = new individual(2,'female',22,'', new coord(1,2), 'reading,fishing')
const c = new individual(3,'male',30,'', new coord(50,2), 'riding,hiking')
const d = new individual(4,'female',50,'', new coord(2,2), 'riding,hiking')

const userList = [a,b,c,d]
const strategyA = new DistanceStrategy()
const strategyB = new habitStrategy()
const matchMakingSystemA = new MatchMakingSystem(userList, strategyA)

console.log(`用戶${a.getId()}的最佳配對是${matchMakingSystemA.match(a).getId()}`)
console.log(`用戶${b.getId()}的最佳配對是${matchMakingSystemA.match(b).getId()}`)
console.log(`用戶${c.getId()}的最佳配對是${matchMakingSystemA.match(c).getId()}`)
console.log(`用戶${d.getId()}的最佳配對是${matchMakingSystemA.match(d).getId()}`)