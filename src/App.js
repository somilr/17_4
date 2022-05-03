import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Containers/Home";
import { Route , Switch} from "react-router-dom";
import About from "./Containers/About/About";
import Doctors from "./Containers/Doctors/Doctors";
import Contact from "./Containers/Contact/Contact";
import Departments from "./Containers/Departments/Departments";
import Auth from "./Containers/Auth/Auth";
import Medicine from "./Containers/Medicine/Medicine";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/Doctors'} component={Doctors}/>
        <Route path={'/Departments'} component={Departments}/>
        <Route path={'/About'} component={About}/>
        <Route path={'/Contact'} component={Contact}/>
        <Route path={'/Auth'} component={Auth}/>
        <Route path={'/Medicine'} component={Medicine}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
