import "reflect-metadata"
import { inject, injectable, unmanaged } from "inversify"
import { TYPES } from "./types"

@injectable()
export class BayernMunich {
  private optionalText?: string
  constructor(@unmanaged() optionalText?: string) {
    console.log("BayernMunich Constructor Called")
    console.log(optionalText)
    this.optionalText = optionalText
  }
  printOptionalText = () => {
    console.log(this.optionalText)
  }
}

@injectable()
export class RealMadrid {
  constructor() {
    console.log("Real Madrid constructor called")
  }
}

@injectable()
export class ChampionsLeague {
  constructor(
    @inject(TYPES.BAYERN_MUNICH) private bayernMunich: BayernMunich,
    @inject(TYPES.REAL_MADRID) private realMadrid: RealMadrid
  ) {
    console.log("UCL Constructor Called")
    console.log(this.bayernMunich.printOptionalText())
  }
}
