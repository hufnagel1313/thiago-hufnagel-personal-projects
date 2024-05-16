import { useState } from "react";
import { OccassionModel } from "../../../models/OccasionModel";
import Card from "../../layout/Card";
import "./OccasionItem.css";

interface OccasionItemProps {
  occasion: OccassionModel;
}

const OccasionItem: React.FC<OccasionItemProps> = (props) => {
  const [occasion, setOccasion] = useState<OccassionModel>(props.occasion);

  const clickHandler = () => {
    const occ = { ...occasion };
    occ.location = 'test13';
    occ.name = 'test123';
    setOccasion(occ);
  };

  return (
    <div>
      <Card>
        <div className="occasion-item">
          {occasion.date.toISOString()}
        </div>
        <div className="occasion-item__description">
          <h2>{occasion.name}</h2>
          <h3>{occasion.location}</h3>
        </div>
        <div>
          <button onClick={clickHandler}>Click me</button>
        </div>
      </Card>
    </div>
  );
};

export default OccasionItem;
