import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/userTypedSelector";
import OccasionItem from "./OccasionItem/OccasionItem";
import OccasionSave from "./OccasionAdd/OccasionSave";

const OccasionsList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchOccasions } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.occasions);

  console.log("data", data);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchOccasions(term);
  };

  return (
    <div>
      <h1>Occasions Form</h1>
      <OccasionSave onSaveOccasion={() => {}}></OccasionSave>
      <h1>Occasions List</h1>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((occ) => <OccasionItem key={occ.id} occasion={occ} />)}
    </div>
  );
};

export default OccasionsList;
