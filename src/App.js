import { useState, useEffect } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import Card from "./Card"
import './App.css';


function App() {
  const [contacts, setContacts] = useState([]);

  // fetch user details
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div className="App">
      <MDBContainer className='container-res' fluid >
        {/* Header */}
        <MDBRow>
          <MDBCol>
            <MDBTypography tag="h1" className="text-center font-weight-bold mb-4 header-background">
              Contact
            </MDBTypography>
          </MDBCol>
        </MDBRow>
        {/* User cards */}
        <MDBRow >
          {contacts.map((contact) => (
            <Card contact={contact} />
          ))}
        </MDBRow>
      </MDBContainer>
    </div >

  );
}

export default App;
