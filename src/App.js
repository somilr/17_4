import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Containers/Home";
import { Switch} from "react-router-dom";
import About from "./Containers/About/About";
import Contact from "./Containers/Contact/Contact";
import Departments from "./Containers/Departments/Departments";
import Auth from "./Containers/Auth/Auth";
import Medicine from "./Containers/Medicine/Medicine";
// import  Drawer  from "./Containers/Drawer/Drawer"
// import Appointment from "./Containers/Appointment/Appointment";
import Doctors from "./Containers/Doctors/Doctors";
import PublicRoute from "./Route/PublicRoute";
import PrivateRoute from "./Route/PrivateRoute";
import BookAppointment from "./Containers/Appointment/BookAppointment";
import ListAppintment from "./Containers/Appointment/ListAppintment";



function App() {
  return (
    <>
      <Header />
      <Switch>
        <PublicRoute exact path={'/'} component={Home}/>
        <PublicRoute path={'/Departments'} component={Departments}/>
        <PublicRoute path={'/About'} component={About}/>
        <PublicRoute path={'/Contact'} component={Contact}/>
        <PublicRoute restricted={true} path={'/Auth'} component={Auth}/>
        <PublicRoute path={'/Doctors'} component={Doctors}/>   
        <PublicRoute path={'/BookAppointment'} component={BookAppointment} />
        <PublicRoute path={'/ListAppintment'} component={ListAppintment} />
        <PrivateRoute path={'/Medicine'} component={Medicine}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
