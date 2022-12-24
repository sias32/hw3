import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <div className='img'></div>
      <p className='title'>Повелители DOOM</p>
      <Stars count={4} />
    </div>
  );
}

export default App;
