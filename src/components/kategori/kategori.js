import React from "react"
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import { AddToCart } from "../add-to-cart";
import { Loading } from "../loading";
import { Header } from "../header"
import "./style.css";


export function Kategori() {
    // this is for fetching data
    const { data, loading } = useFetch("http://localhost:4000/api/products");
    //this is for filtering menu
    const [searchParams, setSearchParams] = useSearchParams({filter: "Soğuk İçecekler"})
    
    return (
        <>
            <Header />
            <div className='container d-flex justify-content-center p-3'>
                <button  className="btn btn-link" onClick={() => setSearchParams({filter: "Soğuk İçecekler"})}>Soğuk İçecekler</button   >
                <button  className="btn btn-link" onClick={() => setSearchParams({filter: "Waffle"})}>Waffle</button  >
                <button  className="btn btn-link" onClick={() => setSearchParams({filter: "Pizza"})}>Pizza</button   >
                <button  className="btn btn-link" onClick={() => setSearchParams({filter: "Kahveler"})}>Kahveler</button   >
            </div>
            <div className="container example-app">
                <>
                    <Loading show={loading} />
                    {/* filtering the selected manu */}
                    {data.filter(item => item.name === `${searchParams.get("filter")}`).map((category, index) => (
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