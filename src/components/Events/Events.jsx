import eventTwoData from "@/data/EventTwoData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Events = () => {
  const { carouselData } = eventTwoData;
  return (
    <section className='sec-pad-top sec-pad-bottom'>
      <Container>
        <Row className='gutter-y-30'>
          {carouselData.map((data) => (
            <Col key={data.id} md={12} lg={4}>
              <div className='events-card'>
                <div className='events-card__image'>
                  <Image src={data.image} alt='' />
                  <Image
                    src={data.image}
                    className='events-card__image--hover'
                    alt=''
                  />
                </div>

                <div className='events-card__content'>
                  <div className='events-card__date'>{data.date}</div>

                  <ul className='events-card__meta list-unstyled'>
                    {data.lists.map((list) => (
                      <li key={list.id}>
                        <i>
                          <FontAwesomeIcon icon={list.icon} />
                        </i>
                        <Link href='#'>{list.cont}</Link>
                      </li>
                    ))}
                  </ul>

                  <h3 className='events-card__title'>
                    <Link href={data.link}>{data.title}</Link>
                  </h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Events;
