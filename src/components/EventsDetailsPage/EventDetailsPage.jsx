import eventDetailsPage from "@/data/EventDetailsPage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

const { image, date, text3, texts, title, titleTwo } = eventDetailsPage;

const EventDetailsPage = () => {
  return (
    <section className='sec-pad-top sec-pad-bottom events-details'>
      <Container>
        <div className='events-details__image'>
          <Image src={image} alt='' />

          <div className='events-card__date'>{date}</div>
        </div>
        <Row className='gutter-y-60'>
          <Col lg={8}>
            <div className='events-details__content'>
              <h3 className='events-card__title'>{title}</h3>
              {texts.map((text, i) => (
                <p key={i}>{text}</p>
              ))}

              <h4>{titleTwo}</h4>
              <p>{text3}</p>
              <Link href='contact' className='thm-btn events-details__btn'>
                <span>Register your seat</span>
              </Link>
            </div>
          </Col>
          <Col lg={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EventDetailsPage;
