"use client";
import React, { useState, useEffect } from "react";
import "./Events.css";

const images = [
  { id: 1, src: "/images/gallery1.jpg" },
  { id: 2, src: "/images/gallery2.jpg" },
  { id: 3, src: "/images/gallery3.jpg" },
  { id: 4, src: "/images/gallery10.jpg" },
  { id: 5, src: "/images/gallery5.jpg" },
  { id: 6, src: "/images/gallery6.jpg" },
  { id: 7, src: "/images/gallery8.jpg" },
  { id: 9, src: "/images/gallery9.jpg" },
  { id: 10, src: "/images/gallery11.jpg" },
  { id: 11, src: "/images/gallery14.jpg" },
  { id: 12, src: "/images/gallery15.jpg" },
  { id: 13, src: "/images/gallery17.jpg" },
  { id: 14, src: "/images/gallery18.jpg" },
  { id: 15, src: "/images/gallery19.jpg" },
  { id: 16, src: "/images/gallery20.jpg" },
  { id: 17, src: "/images/gallery21.jpg" },
  { id: 18, src: "/images/gallery22.jpg" },
  { id: 19, src: "/images/gallery23.jpg" },
  { id: 20, src: "/images/gallery24.jpg" },
  { id: 21, src: "/images/gallery25.jpg" },
  { id: 22, src: "/images/t2.jpg" },
];

const ImageGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.classList.add("gallery-body");
    return () => {
      document.body.classList.remove("gallery-body");
    };
  }, []);

  const openModal = (imageSrc) => setSelectedImage(imageSrc);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="gallery-page">
      <main className="main-content">
        {images.length ? (
          <div className="gallery-grid">
            {images.map((image) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => openModal(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                />
                <div className="image-overlay">
                  <p className="image-caption">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-images">No images to display in the gallery.</p>
        )}
      </main>

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
