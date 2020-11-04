
import './App.css';

import Home from './components/home';
import ContactUs from './components/home';
import Services from './components/home';
import AboutUs from './components/home';
import SignUp from './components/home';
import FreeService from './components/patients/FreeService'

import Doctors from './components/doctors';
import Patients from './components/patients';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DoctorsPortal from './components/doctors/DoctorsPortal';
import PatientsPortal from './components/patients/PatientsPortal';
import Chat from './Chat';
//import Switch from 'react-bootstrap/esm/Switch';


function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contactUs" exact component={ContactUs} />
          <Route path="/services" exact component={Services} />
          <Route path="/aboutUs" exact component={AboutUs} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/doctors" exact component={Doctors} />
          <Route path="/doctorsPortal" exact component={DoctorsPortal} />
          <Route path="/patients" exact component={Patients} />
          <Route path="/patientsPortal" exact component={PatientsPortal} />
          <Route path="/freeService" exact component={FreeService} />
          <Route path="/chat" exact component={Chat} />
        </Switch>
      </Router>





    </div>
  );
}

export default App;
