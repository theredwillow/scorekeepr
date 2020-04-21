type Team = string
export type Player = {
  name: string
  number: number
}

type FieldPosition = number | 'DH'

export type LineupEntry = {
  player: Player
  position: FieldPosition
  inning: number
}

export type Lineup = LineupEntry[][]

type InitialLineupEntry = Pick<LineupEntry, 'player' | 'position'>

export type PutOut = { type: 'putout'; result: number[]; display: string }
export type FlyOut = { type: 'flyout'; result: number; display: string }
export type Hit = { type: 'hit'; result: 1 | 2 | 3 | 4; display: string }
export type PitcherResultString = 'K' | 'K-looking' | 'BB' | 'HBP'
export type PitcherResult = {
  type: 'pitcher-result'
  result: PitcherResultString
  display: string
}
export type AtBatResult = PutOut | FlyOut | Hit | PitcherResult

export type AtBat = {
  balls: number
  strikes: number
  pitchCount: number
  isOut: boolean
  result: AtBatResult | undefined
}

export type CurrentAtBat = {
  team: 'home' | 'visiting'
  lineupSpot: number
  inning: number
}

export type Gameplay = {
  home: AtBat[][]
  visiting: AtBat[][]
  currentAtBat: CurrentAtBat | undefined
}

export type InitialGame = Partial<Game> & {
  homeLineup?: InitialLineupEntry[]
  visitingLineup?: InitialLineupEntry[]
}

export type Game = {
  homeTeam: Team
  visitingTeam: Team
  date: string
  location: string
  startTime: string
}
