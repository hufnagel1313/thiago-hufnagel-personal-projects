import { OccassionModel } from "../../../models/OccasionModel";
import "./OccasionSave.css";
import OccasionEditForm from "./OccasionSaveForm";

interface OccasionAddProps {
  onSaveOccasion: (occasion: OccassionModel) => void;
}

const OccasionSave: React.FC<OccasionAddProps> = (props) => {
  const onSaveOccasion = (occasion: OccassionModel) => {
    props.onSaveOccasion(occasion);
  };

  return (
    <div>
      <OccasionEditForm
        onSaveOccasion={onSaveOccasion}
      />
    </div>
  );
};

export default OccasionSave;
