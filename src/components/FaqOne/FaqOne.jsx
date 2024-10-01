"use client";
import faqOneData from "@/data/FaqOneData";
import Image from "next/image";
import React, { Fragment } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const FaqOne = () => {
  const { bg, title, text, tagLine, accordionData, image } = faqOneData;
  return (
    <section className='faq-one'>
      <div
        className='faq-one__bg'
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>

      <Container>
        <Row className='gutter-y-60'>
          <Col lg={6}>
            <div className='faq-one__content'>
              <div className='sec-title text-start'>
                <p className='sec-title__tagline'>{tagLine}</p>

                <h2 className='sec-title__title'>
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </h2>
              </div>

              <div className='faq-one__content__text'>{text}</div>

              {/* <div
                                className="accordion faq-one__accordion"
                                id="faq-one__accordion-1"
                            >
                                {
                                    accordionData.map(accordion => <div key={accordion.id} className="accordion-item faq-one__accordion__item">
                                        <h2
                                            className="accordion-header faq-one__accordion__header"
                                            id={`faq-one__accordion-1__heading-${accordion.id}`}
                                        >
                                            <button
                                                className="accordion-button faq-one__accordion__button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#faq-one__accordion-1__collapse-${accordion.id}`}
                                                aria-expanded="true"
                                                aria-controls={`#faq-one__accordion-1__collapse-${accordion.id}`}
                                            >
                                                {accordion.header}
                                                <span className="faq-one__accordion__icon"></span>

                                            </button>
                                        </h2>
                                        <div
                                            id={`#faq-one__accordion-1__collapse-${accordion.id}`}
                                            className="accordion-collapse collapse show faq-one__accordion__collapse"
                                            aria-labelledby={`faq-one__accordion-1__heading-${accordion.id}`}
                                            data-bs-parent="#faq-one__accordion-1"
                                        >
                                            <div className="accordion-body faq-one__accordion__body">
                                                {accordion.content}
                                            </div>
                                        </div>
                                    </div>)
                                }

                            </div> */}
              <Accordion className='faq-one__accordion' defaultActiveKey='0'>
                {accordionData.map((accordion, index) => (
                  <Accordion.Item
                    className='faq-one__accordion__item'
                    key={accordion.id}
                    eventKey={index.toString()}
                  >
                    <Accordion.Header
                      id={`faq-one__accordion-1__heading-${accordion.id}`}
                    >
                      {accordion.header}
                      <span className='faq-one__accordion__icon'></span>
                    </Accordion.Header>
                    <Accordion.Body className='faq-one__accordion__body'>
                      {" "}
                      {accordion.content}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>

          <Col lg={6}>
            <div className='faq-one__image'>
              <Image src={image} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqOne;
