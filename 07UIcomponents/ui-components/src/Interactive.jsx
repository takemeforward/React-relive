export default function Interactive() {
    return (
        <Toolbar onPlayMovie={() => alert("Playing movie")} onUploadImage={() => alert("Uploading Imamge!")} />
    )
}

function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div>
            <Button onClick={onPlayMovie} > Play Movie </Button>
            <Button onClick={onUploadImage} >Upload Image</Button>
        </div>
    )
}

function Button({ onClick, children }) {
    return (
        <div>
            <button onClick={onClick}>{children}</button>

        </div>
    )
}