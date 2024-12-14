import React from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function Card({ contact }) {
  console.log(contact);

  return (
    <MDBCol md="6" className="mb-4">
      <MDBRow style={{ margin: '10px', backgroundColor: '#fefefe' }} className="shadow-border d-flex align-items-center justify-content-center p-3">

        {/* Profile Column */}
        <MDBCol className="md-4 d-flex flex-column">
          <MDBCard className="mb-4 d-flex">
            <MDBCardBody className="text-center">

              {/* Avatar */}
              <MDBIcon
                icon="user-alt"
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '150px',
                  height: '150px',
                  fontSize: '75px',
                  border: '2px solid lightgray',
                  margin: 'auto', // Centers the icon in both directions
                }}
              />

              {/* Personal Information */}
              <p className="mb-1 fs-3">{contact.name} </p>
              <p className='text-muted fs-4'>({contact.username})</p>
              <p className="text-muted mb-4 fs-4">   <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer">
                <MDBIcon fas icon="globe" /> {contact.website}
              </a></p>

              {/* Button */}
              <div className="d-flex justify-content-center mb-2">
                <MDBBtn
                  size="md"
                  color="primary"
                  href={`mailto:${contact.email}`}
                >
                  Send Email
                </MDBBtn>
                <MDBBtn
                  size="md"
                  color="success"
                  href={`tel:${contact.phone}`} outline className="ms-1"
                >
                  Phone
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Information Column */}
        <MDBCol className='md-8 d-flex flex-column'>
          <MDBCard className="mb-4 flex-grow-1">
            <MDBCardBody>

              {/* Company Details */}
              <MDBTypography tag="h6">Address</MDBTypography>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Street</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{contact.address.suite}, {contact.address.street}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>City</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{contact.address.city}, {contact.address.zipcode}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Location</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{contact.address.geo.lat}, {contact.address.geo.lng}</MDBCardText>
                </MDBCol>
              </MDBRow>

              <hr />
              {/* Company Details */}
              <MDBTypography tag="h6">Company Information</MDBTypography>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{contact.company.name}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Catchphrase</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{contact.company.catchPhrase}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Business</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{contact.company.bs}</MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBCol>
  );
}