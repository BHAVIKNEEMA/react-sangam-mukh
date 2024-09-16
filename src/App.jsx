import './App.css'
import ClassBasedComponent from './components/class-based-components'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import ProductItem from './components/products/components/product-item';

const dummyProductData = ['Product 1','Product 2','Product 3'];

function App() {
  return (
    <div>
      <h1>React JS Concepts 2024</h1>
      <ClassBasedComponent />
      {/* <FunctionalComponent /> */}
      {/* <ProductList listOfProducts={dummyProductData} name="Bhavik" city="Indore"/> */}
    </div>
  )
}

export default App
