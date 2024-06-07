import { getImageUrl } from "./Utils";
import { peoples } from "./Data";
import './App.css'
export default function List() {
    const listItems = peoples.map((people) => {
        return (
            <li key={people.id} className="list">
                <img className="photo" src={getImageUrl(people)} alt={people.name} />
                <p>
                    <b>{people.name}:</b> <br />
                    {' ' + people.profession + ' '}
                    known for {people.accomplishment}
                </p>
            </li>
        )
    })
    return (
        <article>
            <h1>Scientists</h1>
            <ul>
                {listItems}
            </ul>
        </article>
    )
}