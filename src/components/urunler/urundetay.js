import React from "react";
import { useFetch } from "../../hooks";
import { AddToCart } from "../add-to-cart";
import { Header } from "../header";
import "./style.css";


export function UrunDetay() {
    // this is for fetching data
    const { data } = useFetch("http://localhost:4000/api/products");
    return (
        <>
            <Header/>
            <div className="container example-app">
                {data.map((category, index) => (
                    <div className="row" key={index}>
                        {/* filtering the selected product */}
                        {category.products.filter(item => item.id === 4).map((item, i) => (
                            <div className="col-sm-3" key={i}>
                                <div
                                    className="card"
                                    style={{
                                        width: "18rem",
                                    }}
                                >
                                    <img
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
                                <p>This is the most amazing of our products </p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}