import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import EditProduct from "./components/editProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddCar from "./components/addCar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/editProduct/:id">
            <EditProduct />
          </Route>
          <Route exact path="/add">
            <AddCar />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;