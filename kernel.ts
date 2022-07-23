import "reflect-metadata"
import { Container, interfaces } from "inversify"
import { BayernMunich, ChampionsLeague, RealMadrid } from "./classes"
import { TYPES } from "./types"

const kernel = new Container()

kernel.bind<RealMadrid>(TYPES.REAL_MADRID).to(RealMadrid).inSingletonScope()
kernel.bind<BayernMunich>(TYPES.BAYERN_MUNICH).toDynamicValue((context: interfaces.Context) => {
  return new BayernMunich("Some Optional Text")
})
kernel.bind<ChampionsLeague>(TYPES.CHAMPIONS_LEAGUE).to(ChampionsLeague).inSingletonScope()

console.log(TYPES)

const championsLeague = kernel.get<ChampionsLeague>(TYPES.CHAMPIONS_LEAGUE)