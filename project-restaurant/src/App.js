import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { actFetchFoodRequest } from "./actions/actions";
import { BookingContainer } from "./components/BookingContainer";
import { FoodContainer } from "./components/FoodContainer";
import { FooterContainer } from "./components/FooterContainer";
import { HeaderContainer } from "./components/HeaderContainer";
import { LocationContainer } from "./components/LocationContainer";
import { MobileAppContainer } from "./components/MobileAppContainer";
import { ShoppingCart } from "./components/ShoppingCart";
import "./main.scss"

function App() {
  const numberCart = useSelector(state => state.cartFood.numberCart);
  const listFood = useSelector(state => state.cartFood.listFood);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchFoodRequest());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
              <HeaderContainer numberCart={numberCart}/>
              {/* <LocationContainer/> */}
              <BookingContainer/>
              <FoodContainer listFood={listFood}/>
              <MobileAppContainer/>
              <FooterContainer/>
          </>
        }/>
        <Route path="/cart" element={<ShoppingCart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
