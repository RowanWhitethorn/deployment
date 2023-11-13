import React, { useState } from "react";
import { formatTextService } from "../../utilities/formatTextService";

type StoreItemProps = {
  id: number;
  name: string;
  imgUrl: string;
  about: string;
};

export function SCard({ id, name, imgUrl, about }: StoreItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  const handleCloseImage = () => {
    setIsImageOpen(false);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={`article ${isExpanded ? "expanded" : ""}`}>
        <figure>
          <img src={imgUrl} alt={name} onClick={handleImageClick} />
        </figure>
        <div className="article-body">
          <div className="title-price-div">
            <span className="card-title">{name}</span>
          </div>
          <div className={`card-about ${isExpanded ? "expanded" : ""}`}>
            {formatTextService(about)}
          </div>

          <a className="read-more" onClick={toggleExpand}>
            {isExpanded ? "Ver menos" : "Ver más"}
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            )}
          </a>
        </div>
      </div>
      {isImageOpen && (
        <div className="image-overlay" onClick={handleCloseImage}>
          <div className="image-modal">
            <img src={imgUrl} alt={name} />
          </div>
        </div>
      )}
    </>
  );
}
