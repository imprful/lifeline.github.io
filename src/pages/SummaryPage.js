
import "./css/SummaryPage.css";
import logo from "./images/logo.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/Products.css";
import picon from "../images/picon.jpg"
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


export default function SummaryPage() {

  const [products, setProducts]= useState([]);

  const {id}=useParams();

  useEffect(()=>{
    //console.log("Page loaded- stores");
    loadProducts();
}, []);

const loadProducts=async ()=>{
  const result=await axios.get("http://localhost:7777/products"); //link from postman get method
  setProducts(result.data);
};

  return (
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
            <MDBTable responsive>
            <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                  Product Info
                  </th>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>                  
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Action</th>
                </tr>
              </MDBTableHead>
              
              <MDBTableBody>
              {products.map((product, index) => (
<tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={logo}
                        fluid
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="Book"
                      />
                      <div className="flex-column ms-4">
                      
                      <p className="mb-2">Fresh</p>
                        <p className="mb-2">1KG-{product.productName}</p>
                        <p className="mb-2">Holding Product Id-{product.productId}</p>
                        
                      </div>
                    </div>
                  </th>
                  {/* id */}
                  <td className="align-middle" scope="row">
                  <p className="mb-0" key={index} style={{ fontWeight: "500" }}>
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
                    <div class="d-flex flex-row align-items-center">
                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput
                        min={0}
                        type="number"
                        size="sm"
                        style={{ width: "50px" }}
                        defaultValue={1}
                        max={product.quantity}
                      ></MDBInput>

                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </td>

                  {/* action */}
                  <td className="align-middle">
                      <div class="product-action">
                      <Link type="button-atc" style={{ margin: "5px" }} className="btn btn-danger" to={"/home"} >
                    Remove From Cart
                  </Link>
                  </div>
                  </td>
                </tr>

                ))}
                </MDBTableBody>
            </MDBTable>
          </MDBCol>
          <MDBCard
            className="shadow-2-strong mb-5 mb-lg-0"
            style={{ borderRadius: "16px" }}
          >
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
                  <form>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          checked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon
                            fab
                            icon="cc-mastercard fa-2x text-dark pe-2"
                          />
                          Credit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          checked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                          Debit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          checked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-paypal fa-2x text-dark pe-2" />
                          PayPal
                        </p>
                      </div>
                    </div>
                  </form>
                </MDBCol>
                <MDBCol md="6" lg="4" xl="6">
                  <MDBRow>
                    <MDBCol size="12" xl="6">
                    <b>Name on card</b>
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label=""
                        placeholder="Praful Vairagade"
                        size="lg"
                      ></MDBInput>
                      <b>Expiration</b>
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label=""
                        placeholder="MM/YY"
                        size="lg"
                        maxLength={7}
                        minLength={7}
                      />
                    </MDBCol>

                    <MDBCol size="12" xl="6">
                    <b>Card Number</b>
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label=""
                        placeholder="1111 2222 3333 4444"
                        size="lg"
                        minlength="19"
                        maxlength="19"
                      />
                      <b>Cvv</b>
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label=""
                        placeholder="&#9679;&#9679;&#9679;"
                        size="lg"
                        minlength="3"
                        maxlength="3"
                        type="password"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol lg="4" xl="3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2">₹2</p>
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0">₹2</p>
                  </div>

                  <hr className="my-4" />

                  <div
                    className="d-flex justify-content-between mb-4"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-2">Total (tax included)</p>
                    <p className="mb-2">₹4</p>
                  </div>

                  <MDBBtn block size="lg">
                    <div className="d-flex justify-content-between">
                      <span>Checkout</span>
                      <span>₹4</span>
                    </div>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}