import type { RuneClient } from "rune-games-sdk/multiplayer"

export interface PlayersObject {
    [Player: string]: { 
      color: string
  }
}

export interface GameState {
  allPlayerIds: string[]
  allPlayers: PlayersObject
  turnOrder: string[]
  playersReady: object[]
  colorsChosen: string[]
  hasGameStarted: boolean

}

type GameActions = {
  nextTurn: () => void
  assignColor: (chosenColor: string) => void
}

declare global {
  const Rune: RuneClient<GameState, GameActions>
}

Rune.initLogic({
  minPlayers: 2,
  maxPlayers: 4,
  setup: (allPlayerIds: string[]): GameState => {
    return ({
    allPlayerIds,
    // Determine random turn order with mapped array
    turnOrder: allPlayerIds
      .map((value: string) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value),
    // An object with player objects
    allPlayers: allPlayerIds
      .reduce((acc, curr) => ({
      ...acc, [curr]: {
        color: ""}
    }), {}),
    playersReady: [],
    hasGameStarted: false,
    colorsChosen: [],
  })},
  actions: {
    assignColor: (chosenColor, {game, playerId}) => {
      if (game.allPlayers[playerId].color) {
        throw Rune.invalidAction();
      }
      game.allPlayers[playerId].color = chosenColor;
      game.colorsChosen.push(chosenColor);
      game.playersReady.push({[chosenColor]: playerId})
    },
    
    nextTurn: (_, {game} ) => {
      // Use turnOrder array to establish next player's turn
      const slicedTurnOrder = game.turnOrder.slice(1);
      game.turnOrder = [...slicedTurnOrder, game.turnOrder[0]];
    },
  },
})
