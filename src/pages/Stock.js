import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, NavLink } from "react-router-dom";
import "./css/Products.css";
import picon from "../images/picon.jpg";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
export default function () {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    //console.log("Page loaded- stores");
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:7777/products"); //link from postman get method
    setProducts(result.data);
  };

  let navigate = useNavigate();
  const [product, setproduct] = useState({
    productName: "",
    price: "",
    quantity: "",
  });

  const { productName, price, quantity } = product;

  const onInputChange = (e) => {
    setproduct({ ...product, [e.target.productName]: e.target.value });
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault(); //not show data in address bar
  //   await axios.post("http://localhost:7777/product", product);
  //   navigate("/product") //go data to home due to "/"
  // };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:7777/product/${id}`);
    loadProducts();
  };

  return (
    <div>
      <NavLink
        type="button"
        className="btn btn-success"
        to={`/`}
        style={{ margin: "3px" }}
      >
        Back to Home
      </NavLink>
      {/* <NavLink type="button" className="btn btn-success" to={`/addproduct`} style={{ margin: "3px" }}>
          Add Stock
        </NavLink> */}

      <div class="card">
        <div class="card-header">Welcome to Lifeline Grocery Store!</div>
        <div class="card-body">
          <div class="card">
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <h2>Stock</h2>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="py-4">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col" hidden>Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {/* {products.map((product, index) => (

              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td></tr>
                ))} */}
                {/* ADDING PRODUCTS FROM DB  */}
                {products.map((product, index) => (
                  <tr>
                    
                    {/* id */}
                    <td className="align-middle" scope="row">
                      <p
                        className="mb-0"
                        key={index}
                        style={{ fontWeight: "500" }}
                      >
                        {/* {index+1} */}
                        {product.productId}
                      </p>
                    </td>
                    {/* productName */}
                    <td className="align-middle">
                      <p className="mb-0" style={{ fontWeight: "500" }}>
                        {product.productName}
                      </p>
                    </td>
                    {/* price */}
                    <td className="align-middle">
                      <p className="mb-0" style={{ fontWeight: "500" }}>
                        ₹{product.price}
                      </p>
                    </td>
                    {/* quantity */}
                    <td className="align-middle">
                      
                        <p className="mb-0" style={{ fontWeight: "500" }}>
                        {product.quantity}
                        </p>
                      
                    </td>

                    {/* action */}
                    <td className="align-middle">
                      <div
                        class="product-action"
                        onChange={(e) => onInputChange(e)}
                      >
                        <NavLink
                          type="button"
                          className="btn btn-success"
                          to={`/addproduct`}
                          style={{ margin: "3px" }}
                          hidden
                        >
                          Add
                        </NavLink>
                        <NavLink
                          type="button"
                          className="btn btn-success"
                          to={`/addproduct`}
                          style={{ margin: "3px" }}
                          hidden
                        >
                          Edit
                        </NavLink>
                        <Link
                          type="button"
                          className="btn btn-outline-danger mx-2"
                          onClick={() => deleteProduct(product.id)}
                          style={{ margin: "3px" }}
                          hidden
                        >
                          Delete
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </div>

        <div class="card-footer text-muted">
          Email: lifeline.customersupport@gmail.com
        </div>
      </div>
    </div>
  );
}
