

export default function CountClick({ count, onClick }) {

    return (
        <>
            <button type='button' onClick={onClick}>
                You clicked me {count} times.
            </button>
        </>
    )
}