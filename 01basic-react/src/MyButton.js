
export default function MyButton() {
    function handleClick() {
        alert("Did you just clicked me??");
    }
    return (

        <button type="button" onClick={handleClick}>
            click me baby!!
        </button>

    )
}