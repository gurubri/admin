import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CustomerView from "./customer/CustomerListView";
import Home from "./Dashboard";
import Login from "./login";
import PrivateRoute from "./HOC/PrivateRoute";
import Services from "./services";
import Admin from "./admins";
import Orders from "./orders";
import Addorder from "./addorder";
import Progress from "./updateProgress";
import NotFoundView from "./NotFoundView";
import Profile from "./profile";
import Logout from "./logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <DashboardLayout>
            <Route path="/" component={Login} exact />
            <PrivateRoute path="/dashboard" component={Home} exact />
            <PrivateRoute path="/logout" component={Logout} exact />
            <PrivateRoute path="/account" component={Profile} exact />
            <PrivateRoute path="/customers" component={CustomerView} />
            <PrivateRoute path="/admins" component={Admin} />
            <PrivateRoute path="/orders" component={Orders} exact />
            <PrivateRoute path="/orders/:id" component={Addorder} />
            <PrivateRoute path="/updateProgress/:id" component={Progress} />
            <PrivateRoute path="/services" component={Services} />
            {/* <Route path="/404" component={NotFoundView} /> */}
            {/* <Redirect to="/404" from="*" /> */}
          </DashboardLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
