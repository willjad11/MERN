import TabFunction from './components/TabFunction'

function App() {
  const array=["Tab 1 content", "Tab 2 content", "Tab 3 content"]

  return (
    <div className="App">
      <TabFunction array={array}/>
    </div>
  );
}

export default App;
