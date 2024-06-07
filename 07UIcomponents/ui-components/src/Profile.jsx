import './App.css'
export default function Profile({ imgPath, person }) {


    return (
        <div style={person.theme}>

            <h1>{person.n_name}</h1>
            <img className='photo' src={imgPath}
                alt="Katherine Johnson" />

            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
}