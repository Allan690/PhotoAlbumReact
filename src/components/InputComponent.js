import React from "react";
import "../assets/css/InputComponent.css";
import { usePhotoActions } from "../context";

const SearchComponent = () => {
  const { fetchPhotos } = usePhotoActions();
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
      fetchPhotos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="search">
      <input
        className="input-component"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Enter the album ID"
      />
      <button className="submit" onClick={() => fetchPhotos(parseInt(inputValue))}>
        Load Photos
      </button>
    </div>
  );
};

export default SearchComponent;
