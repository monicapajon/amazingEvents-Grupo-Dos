import Header from "./components/utilities/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/utilities/Welcome/Welcome";
import Layout from "./components/utilities/layout/Layout";
import Filters from "./components/utilities/filters/Filters";
import filterDate from "./components/functions/FilterDate";
import Details from "./components/utilities/details/Details";
import Stats from "./components/stats/Stats";
import Contac from "./components/contact/Contac";
import Footer from "./components/utilities/Footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                Comp1={
                  <Welcome
                    cn="home"
                    text="Connecting People Through Unforgettable Experiences."
                  />
                }
                Comp2={<Filters />}
              />
            }
          />
          <Route
            path="/upcoming"
            element={
              <Layout
                Comp1={<Welcome cn="upcoming" />}
                Comp2={<Filters xporFecha={filterDate} indic={false} />}
              />
            }
          />
          <Route
            path="/past"
            element={
              <Layout
                Comp1={
                  <Welcome
                    cn="past"
                    text={"A TRAVEL FOR THE PAST, A TRAVEL OF OUR HISTORY"}
                  />
                }
                Comp2={<Filters xporFecha={filterDate} indic={true} />}
              />
            }
          />
          <Route path="detail">
            <Route path=":id" element={<Details />} />
          </Route>{" "}
          <Route path="stats" element={<Stats />} />
          <Route path="contact" element={<Contac />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/my-cart" element={<Layout Comp1={<Cart />} />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
