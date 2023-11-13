import React, { useState } from "react";
import { formatCurrency } from "../../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  about: string;
};

export function VCard({ id, name, price, imgUrl, about }: StoreItemProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  const handleCloseImage = () => {
    setIsImageOpen(false);
  };

  return (
    <>
      <span className="article">
        <figure>
          <img src={imgUrl} alt={name} onClick={handleImageClick} />
        </figure>
        <div className="article-body">
          <div className="title-price-div">
            <div className="card-title">{name}</div>
            <div className="vacation-card-price">{formatCurrency(price)}</div>
          </div>
          <div className="card-about">{about}</div>
        </div>
      </span>
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
