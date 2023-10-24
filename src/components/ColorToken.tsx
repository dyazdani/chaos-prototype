
interface ColorTokenProps {
    picFilePath: string
}

const ColorToken = ({picFilePath}: ColorTokenProps) => {

    return (
        <div className={`color-token`}>
            <img className="color-img" src={picFilePath} />
        </div>
    )
}

export default ColorToken;