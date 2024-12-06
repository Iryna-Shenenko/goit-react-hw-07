import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";


const SearchBox = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };


  return (
    <div className={s.div}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;