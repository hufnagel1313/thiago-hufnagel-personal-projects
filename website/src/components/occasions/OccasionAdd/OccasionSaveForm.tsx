import "./OccasionSaveForm.css";
import { OccassionModel } from "../../../models/OccasionModel";
import { useState } from "react";

interface OccasionEditFormProps {
  occasion?: OccassionModel;
  onSaveOccasion: (occasion: OccassionModel) => void;
}

const OccasionSaveForm: React.FC<OccasionEditFormProps> = (props) => {
  const initialState = props.occasion ? props.occasion : ({date: new Date()} as OccassionModel);
  const [occasion, setOccasion] = useState<OccassionModel>(initialState);

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOccasion((prevState) => ({
      ...prevState,
      name: event.target.value
    }));
  };

  const locationChangeHandler = (event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const occ = { ...occasion, location: event.target.value };
    setOccasion(occ);
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    console.log(event.target.valueAsDate);

    setOccasion((prevState) => ({
      ...prevState,
      date: new Date(event.target.value)
    }));
    console.log(occasion);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(occasion);
    props.onSaveOccasion(occasion);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={occasion.name}
        />
      </div>
      <div className="form-control">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          onChange={locationChangeHandler}
          value={occasion.location}
        />
      </div>
      <div className="form-control">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          date-format="yyyy-MM-dd"
          onChange={dateChangeHandler}
          value={occasion.date?.toISOString().split("T")[0].toString()}
        />
      </div>
      <div className="form-actions">
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default OccasionSaveForm;
