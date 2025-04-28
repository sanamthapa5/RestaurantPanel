import React from "react";
import AdForm from "./AdForm";
// import AdForm from './components/AdForm'; wrong
import "./NewAdvertisement.css";

function NewAdvertisement() {
  return (
    <div className="NewAdvertisemenApp">
      {/* <header className="NewAdvertisementHeader">
        <h1>Create Advertisement</h1>
      </header> */}
      <div className="NewAdvertisementHeader">
        <h1>Create Advertisement</h1>
      </div>
      <main className="NewAdvertisementMain">
        <AdForm />
      </main>
    </div>
  );
}

export default NewAdvertisement;
