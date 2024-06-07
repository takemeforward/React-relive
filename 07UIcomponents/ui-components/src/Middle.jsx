import Item from "./Item"
export default function Middle() {
    return (
        <>
            <h1> Details of package items</h1>
            <ul>
                <Item name={"Samosha"} isPacked={true} />
                <Item name={"Gulabjamun"} isPacked={false} />
                <Item name={"Pista Badam"} isPacked={false} />
                <Item name={"Kaju katli"} isPacked={true} />
            </ul>

        </>
    )
}