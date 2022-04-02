import './App.css';
import ProductListEditable from './Components/ProductListEditable';
import Title from './Components/Title';

function App() {
  return (
    <div className="App">
      <Title></Title>
      <hr className='separator'></hr>
      <ProductListEditable></ProductListEditable>
    </div>
  );
}

export default App;
