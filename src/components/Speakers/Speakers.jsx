import React from "react";
import { Container, Row } from "react-bootstrap";

const Volunteers = ({ page }) => {
  const speakerData = [
    {
      firstName: "David",
      lastName: "Waza",
      designation: 'Ceo Binary'
    },
    {
      firstName: "Andra",
      lastName: "Karagama",
      designation: 'CTO Binary'

    },
    {
      firstName: "Thaywo",
      lastName: "Hassan",
      designation: 'Lead Developer'

    },
  ];

  return (
    <section className="sec-pad-top sec-pad-bottom">
      <Container>
        <Row className="gutter-y-30">
          <div className="container-fluid">
            {speakerData.map(({ firstName, lastName, designation }, index) => (
              <figure key={index}>
                <div className="media figure-img-two"></div>
                <figcaption>
                  <div className="container-details">
                    <div className="contact-details">
                      <p>{firstName}</p>
                      <p>{lastName}</p>
                    </div>
                    <div className="designation-details">
                      <p>{designation}</p>
                    </div>
                  </div>
                </figcaption>
                <a href="#"></a>
              </figure>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Volunteers;
