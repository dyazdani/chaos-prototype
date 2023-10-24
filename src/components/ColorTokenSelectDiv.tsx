import ColorToken from "./ColorToken";
import red from "../assets/red_character.png"
import green from "../assets/green_character.png"
import yellow from "../assets/yellow_character.png"
import purple from "../assets/purple_character.png"

interface ColorTokenSelectDivProps {
    playersReady: object[]
    numberOfPlayers: number
}

const ColorTokenSelectDiv = ({playersReady, numberOfPlayers}: ColorTokenSelectDivProps) => {
    return (
        <div className={`color-token-select ${playersReady.length !== numberOfPlayers ? "" : "hidden"}`} >
            <ColorToken picFilePath={red} />
            <ColorToken picFilePath={yellow} />
            <ColorToken picFilePath={green} />
            <ColorToken picFilePath={purple} />
        </div>
    )
    
}

export default ColorTokenSelectDiv;