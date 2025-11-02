"use client";
import React, { useState, useEffect } from "react";
import "./Events.css";

const images = [
  { id: 1, src: "/images/gallery1.jpg", title: "Event 1", eventDate: "2025-12-10" },
  { id: 2, src: "/images/gallery2.jpg", title: "Event 2", eventDate: "2025-10-04" },
  { id: 3, src: "/images/gallery3.jpg", title: "Event 3", eventDate: "2024-05-21" },
  { id: 4, src: "/images/gallery10.jpg", title: "Event 4", eventDate: "2023-08-12" },
  { id: 5, src: "/images/gallery5.jpg", title: "Event 5", eventDate: "2024-11-18" },
  { id: 6, src: "/images/gallery6.jpg", title: "Event 6", eventDate: "2024-07-20" },
  { id: 7, src: "/images/gallery8.jpg", title: "Event 7", eventDate: "2023-09-10" },
  { id: 9, src: "/images/gallery9.jpg", title: "Event 8", eventDate: "2024-03-05" },
  { id: 10, src: "/images/gallery11.jpg", title: "Event 9", eventDate: "2025-01-15" },
  { id: 11, src: "/images/gallery14.jpg", title: "Event 10", eventDate: "2023-11-01" },
  { id: 12, src: "/images/gallery15.jpg", title: "Event 11", eventDate: "2024-12-25" },
  { id: 13, src: "/images/gallery17.jpg", title: "Event 12", eventDate: "2023-02-19" },
  { id: 14, src: "/images/gallery18.jpg", title: "Event 13", eventDate: "2024-06-30" },
  { id: 15, src: "/images/gallery19.jpg", title: "Event 14", eventDate: "2025-05-10" },
  { id: 16, src: "/images/gallery20.jpg", title: "Event 15", eventDate: "2023-01-25" },
  { id: 17, src: "/images/gallery21.jpg", title: "Event 16", eventDate: "2024-09-09" },
  { id: 18, src: "/images/gallery22.jpg", title: "Event 17", eventDate: "2025-02-08" },
  { id: 19, src: "/images/gallery23.jpg", title: "Event 18", eventDate: "2023-05-17" },
  { id: 20, src: "/images/gallery24.jpg", title: "Event 19", eventDate: "2025-03-01" },
  { id: 21, src: "/images/gallery25.jpg", title: "Event 20", eventDate: "2024-01-14" },
  { id: 22, src: "/images/t2.jpg", title: "Event 21", eventDate: "2025-09-14" },
];

const ImageGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    document.body.classList.add("gallery-body");
    return () => {
      document.body.classList.remove("gallery-body");
    };
  }, []);

  const openModal = (imageSrc) => setSelectedImage(imageSrc);
  const closeModal = () => setSelectedImage(null);

  const today = new Date();

  const upcomingEvents = images.filter(
    (img) => new Date(img.eventDate) >= today
  );
  const pastEvents = images.filter((img) => new Date(img.eventDate) < today);

  // ✅ Countdown Target: Batch 1 (Nov 9, 2025)
  const eventStartDate = new Date("2025-11-09T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = eventStartDate - now;

      if (distance <= 0) {
        setCountdown("Event has started!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="gallery-page">
      <main className="main-content">

        {/* ✅ COUNTDOWN SECTION */}
        <div className="countdown-box">
          <h2>Countdown to Batch 1</h2>
          <p className="countdown-timer">{countdown}</p>
        </div>

        {/* ✅ UPCOMING EVENTS SECTION */}
        <section className="events-section">
          <h2 className="section-title">Upcoming Events</h2>

          {upcomingEvents.length ? (
            <div className="upcoming-list">
              {upcomingEvents.map((image) => (
                <div key={image.id} className="event-card">
                  <div className="event-image-wrapper">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="event-image"
                    />
                  </div>

                  <div className="event-details">
                    <h3 className="event-title">
                      Advancing Local Government Leadership: Global Best
                      Practices, Digital Transformations & Exclusive
                      Opportunities
                    </h3>

                    <div className="event-date-group">
                      <p className="event-date">
                        📅 <strong>Batch 1:</strong> November 9 – 15, 2025
                      </p>
                      <p className="event-date">
                        📅 <strong>Batch 2:</strong> November 16 – 22, 2025
                      </p>
                      <p className="event-date">
                        📍 <strong>Location:</strong> London, UK
                      </p>
                    </div>

                    <p className="event-desc">
                      Join us for an exciting moment filled with activities,
                      networking, and memorable experiences.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-images">No upcoming events.</p>
          )}
        </section>

        {/* ✅ PAST EVENTS SECTION */}
        <section className="events-section">
          <h2 className="section-title">Past Events</h2>

          {pastEvents.length ? (
            <div className="gallery-grid">
              {pastEvents.map((image) => (
                <div
                  key={image.id}
                  className="gallery-item"
                  onClick={() => openModal(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="gallery-image"
                  />
                  <div className="image-overlay">
                    <p className="image-caption">{image.title}</p>
                    <p className="image-date">{image.eventDate}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-images">No past events.</p>
          )}
        </section>
      </main>

      {/* ✅ MODAL */}
      {selectedImage && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryPage;
