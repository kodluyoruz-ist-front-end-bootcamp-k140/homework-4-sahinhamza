import React from "react"
import { useState } from "react"
import { Main1 } from "./homework1/main1"
import { Main2 } from "./components/main2/main2";

export default function App() {

  const [activeTab, setActiveTab] = useState("homework1");

  return (
    <>
      <div className='container d-flex justify-content-center'>
        <div className="btn-group tabs d-inline-flex flex-row p-2 " role="group">
          <button onClick={() => setActiveTab("homework1")} className={activeTab === "homework1" ? "btn btn-primary" : "btn btn-default"}>homework1</button>
          <button onClick={() => setActiveTab("homework2")} className={activeTab === "homework2" ? "btn btn-primary" : "btn btn-default"}>homework2</button>
        </div>
      </div>
      <br />
      {activeTab === "homework1" ? <Main1 /> : <Main2 />}
    </>
  )
}
