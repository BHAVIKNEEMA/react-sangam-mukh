import styles from "./product-item.module.css";

function ButtonComponent() {
  return (
    <div>
      <button className={styles.buttonStyle}>Click</button>
    </div>
  );
}
function ProductItem({ singleProductItem, key }) {
  return (
    <div
      style={{ padding: "20px", border: "2px solid red", marginBottom: "12px" }}
      key={key}
    >
      {/* Inline styling */}
      <p className={styles.productTitle}>{singleProductItem}</p>
      <ButtonComponent />
    </div>
  );
}

export default ProductItem;
