import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateKeyword } from "../../../store/user/actions";

export const TopBarSearch = () => {
  const dispatch = useDispatch();

  const [keywordInput, setKeywordInput] = useState("");

  return (
    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div className="input-group">
        <input
          type="text"
          className="form-control bg-light border-0 small"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          name="keyword"
          onChange={(e) => {
            setKeywordInput(e.target.value);
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => dispatch(updateKeyword(keywordInput))}
          >
            <i className="fas fa-search fa-sm" />
          </button>
        </div>
      </div>
    </form>
  );
};
