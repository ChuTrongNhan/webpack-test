import * as React from "react";
import {connect} from 'react-redux';
import { addProduct } from "../stores/actions";

const Home = (props: any) => {
  const [newProduct, setNewProduct] = React.useState<string>('');

  const addProduct = () => {
    setNewProduct("");
    props.addProduct(newProduct);
  }

  const inputHandler = (e: any) => {
    setNewProduct(e.target.value);
  }

  return (
    <div className="header-red">
      <h1>Home</h1>
      <h2>Add product</h2>
      <input type="text" value={newProduct} onChange={inputHandler} />
      <div style={{
        padding: 10,
        border: 1,
        borderColor: 'green',
        width: "max-content",
        borderStyle: 'solid',
        cursor: "pointer"
      }} onClick={addProduct}>
        ADD
      </div>
      <div>
        Your product list: 
        {props.productList.map((product: string) => (
          <div key={product}>
            {product}
          </div>
        ) )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    productList: state.products,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addProduct: (newProduct: string) => dispatch(addProduct(newProduct))
  } 

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
