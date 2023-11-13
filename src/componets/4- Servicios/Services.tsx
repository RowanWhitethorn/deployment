import { SCard } from "./SCards";
import storeServices from "../../data/items.json";

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
