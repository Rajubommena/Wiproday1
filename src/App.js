import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import './App.css';
import Welcome from './Welcome';
import Counter from './ReactFiles/Counter';
import Message from './ReactFiles/Message'; 
import Products from './ReactFiles/Products';
import ProductTable from './ReactFiles/ProductTable';
import GroceryList from './ReactFiles/GroceryList';
import Car from "./ReactFiles/Car";
import Phone from "./ReactFiles/Phone";
import SweetsList from './ReactFiles/SweetsList';
import Electronics from './ReactFiles/Electronics';
import CanteenMenu from './ReactFiles/CanteenMenu';
import JuiceList from "./ReactFiles/JuiceList";
import Restaurant from "./ReactFiles/Restaurant";
import TempleList from "./ReactFiles/TempleList"; 
import TailorShop from "./ReactFiles/TailorShop";


import Fruits from "./ReactFiles/Fruits";
import TelevisionManager from "./ReactFiles/TelevisionManager";
import MarriageForm from "./ReactFiles/MarriageForm";
import AccessoriesForm from "./ReactFiles/AccessoriesForm";
import BakingForm from "./ReactFiles/BakingForm";
import FlightBookingControlled from "./ReactFiles/FlightBookingControlled";
import FlightBookingUncontrolled from "./ReactFiles/FlightBookingUncontrolled";
import MovieForm from './ReactFiles/MovieForm';
import FurnitureItems from "./ReactRender/FurnitureItems";
import RestaurantRegistration from './ReactRender/RestaurantRegistration';
import ElectronicsApp from "./ReactRender/ElectronicsApp";
import RelationPro from "./ReactRender/RelationPro";
import HockeyForm from './ReactRender/HockeyForm';
import TailoringInventory from "./ReactRender/TailoringInventory";
import PlayerManager1 from './ReactRender/PlayerManager1';
import { PowerCutProvider } from "./ReactRender/PowerCutContext";
import SendAnnouncement from "./ReactRender/SendAnnouncement";
import AnnouncementList from "./ReactRender/AnnouncementList";


import Navbar from './ReactRender/Navbar';
import Home from './ReactRender//Home';
import AddTaxpayer from './ReactRender/AddTaxpayer';
import TaxpayerList from './ReactRender/TaxpayerList';
import CalculateTax from './ReactRender/CalculateTax';
import TaxRates from './ReactRender/TaxRates';
import Contact from './ReactRender/Contact';
import About from './ReactRender/About';
import FAQ from './ReactRender/FAQ';
import NotFound from './ReactRender/NotFound';





function App() {
  const groceries = ["Rice", "Wheat", "Sugar", "Milk", "Oil"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Wipro1 React App 🚀</h1>
        <p>This is my first React project created using Create React App.</p>

        <Welcome name="Raju" />
        <Counter/> 
        <Message text="This is an Arrow Functional Component " />
        <Products 
        pid="101" pname="Laptop" pcost="50000"  
        wid111="W1"  wname111="Hyderabad Warehouse"   wlocation111="Hyderabad"/>

        <button className="btn btn-success m-2">Click Me</button>
        <button className="btn btn-danger m-2">Delete</button>
        
        <ProductTable/>

        
        <GroceryList items={groceries} />

        <h1>Sweet Shop</h1>
        <SweetsList/>
  
      <Electronics />
    
    
      <CanteenMenu />
      <h1>Car Showcase</h1>
      <Car brand="Toyota" model="Fortuner" color="Black" year="2022" />
    
      <Phone />
      <h1> College Canteen – Juice Section</h1>
      <JuiceList />

      return <Restaurant />

      <TempleList /> 
      <TailorShop /> 

      <Fruits/>
      <TelevisionManager/>
      <MarriageForm/>
      <AccessoriesForm/>
      <BakingForm/>
      <FlightBookingControlled />
      <FlightBookingUncontrolled/>
      <MovieForm/>
       <FurnitureItems />
      <RestaurantRegistration/>
      <ElectronicsApp/>
      <RelationPro/>
      <HockeyForm/>
      <TailoringInventory/>
      <PlayerManager1/>
      
       <PowerCutProvider>
      <div className="container mt-4">
        <h2 className="mb-4">Electricity Power Cut Announcement System</h2>
        {/* Form to send new announcements */}
        <SendAnnouncement />
        {/* List to show announcements */}
        <AnnouncementList />
      </div>
    </PowerCutProvider>


    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-taxpayer" element={<AddTaxpayer />} />
        <Route path="/taxpayer-list" element={<TaxpayerList />} />
        <Route path="/calculate-tax" element={<CalculateTax />} />
        <Route path="/tax-rates" element={<TaxRates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
     

        
     </header>
    </div>
  );
}

export default App;
