import React from "react";
import { Routes, Route } from "react-router-dom"
import { ErrorBoundary } from "../error-boundary";
import { Header } from "../header";
import { Products } from "../products";
import { ShoppingCart } from "../shopping-cart"
import { Urunler } from "../urunler/Urunler";
import { Kategori } from "../kategori/kategori";
import { UrunDetay } from "../urunler/urundetay";
import { Sepetim } from "../sepetim/Sepetim";
import "../../example-app.css"


export function Main2() {
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <>
                        <Header />
                        <div className="container example-app">
                            <Products />
                        </div>
                        <ErrorBoundary>
                            <ShoppingCart />
                        </ErrorBoundary>
                    </>
                }>
                </Route>

                <Route path='kategori' element={<Kategori />}></Route>
                <Route path='urunler' element={<Urunler />}></Route>
                <Route path="urunler/:urunId" element={<UrunDetay />}></Route>
                <Route path='sepetim' element={<Sepetim />}></Route>

            </Routes>

        </>
    )
}