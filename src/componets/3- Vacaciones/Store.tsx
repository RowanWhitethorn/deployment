import storeItems from "../../data/items.json";
import { VCard } from "./VCards";

export function Store() {
  return (
    <>
      <div className="vacation-cards-row">
        {storeItems.map((item) => (
          <div className="vacation-cards-column" key={item.id}>
            <VCard {...item} />{" "}
          </div>
        ))}
      </div>
    </>
  );
}
