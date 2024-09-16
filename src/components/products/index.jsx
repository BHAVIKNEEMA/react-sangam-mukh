import ProductItem from "./components/product-item";
import "./style.css";

//function ProductList(props){ //A

function ProductList({ name, city, listOfProducts }) {
  // console.log(props); //A
  // const {name,city} = props; //A
  const flag = true;

//   function renderTextBlock(getFlag) {
//     return getFlag ? (
//       <h4>
//         Name : {name}, City : {city}
//       </h4>
//     ) : (
//       <h4>Hello World</h4>
//     );
//   }

  const renderTextBlock = flag ? (
    <h4>
      Name : {name}, City : {city}
    </h4>
  ) : (
    <h4>Hello World</h4>
  );

  return (
    <div>
      <h3 className="title">ECommerce Project</h3>
      {/* <ProductItem /> */}
      {/* {renderTextBlock(flag)} */}
      {renderTextBlock}
      <ul>
        {listOfProducts.map((item, index) => (
          // <li key={index}>{item}</li>
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
