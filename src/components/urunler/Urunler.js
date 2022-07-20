import React from "react";
import { Header } from "../header";
import { Loading } from "../loading";
import { useFetch } from "../../hooks";
import { AddToCart } from "../add-to-cart";
import { useNavigate } from "react-router-dom";
import "./style.css";

export function Urunler() {
    // this is for fetching data
    const { data, loading } = useFetch("http://localhost:4000/api/products");
    // when we click on the product img this function takes us to the detail page
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div className="container example-app">
                <>
                    <Loading show={loading} />
                    {data.map((category, index) => (
                        <div className="row" key={index}>
                            <h4>{category.name}</h4>
                            {category.products.map((item, i) => (
                                <div className="col-sm-3" key={i}>
                                    <div
                                        className="card"
                                        style={{
                                            width: "18rem",
                                        }}
                                    >
                                        <img
                                            onClick={() => navigate(`/urunler/:userId`)}
                                            src={item.image_url}
                                            className="card-img-top product-image"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <div>
                                                <AddToCart item={item} />
                                                <span className="price">
                                                    {item.price.toFixed(2)} {"TL"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <hr />
                        </div>
                    ))}

                </>
            </div>
        </>
    )
}