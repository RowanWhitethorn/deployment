import { Col, Row } from "react-bootstrap";
import { SCard } from "./4- Servicios/SCards";
import storeServices from "../data/services.json";

export function Services() {
  return (
    <>
      <div className="vacation-cards-row">
        {storeServices.map((services) => (
          <div className="vacation-cards-column" key={services.id}>
            <SCard {...services} />{" "}
          </div>
        ))}
      </div>
    </>
  );
}


