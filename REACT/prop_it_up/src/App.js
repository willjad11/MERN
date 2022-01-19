import PersonCard from './components/PersonCard'
import UserForm from './components/UserForm'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Red" />
      <PersonCard firstName="Maria" lastName="Smith" age={ 62 } hairColor="Gray" />
      <UserForm />
    </div>
  );
}

export default App;
