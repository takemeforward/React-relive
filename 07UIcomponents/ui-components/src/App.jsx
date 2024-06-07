import Profile from './Profile'

function App() {
  const person = {
    n_name: "Vishal Jha",
    theme: {
      backgroundColor: 'while',
      color: 'magenta'
    }
  }
  const path = "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <h1>This is profile pictures of users.</h1>
      <Profile imgPath={path} person={person} />
      <Profile imgPath={path} person={person} />
      <Profile imgPath={path} person={person} />
    </>
  )
}

export default App
