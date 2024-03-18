// import css from './SearchBox.module.css';
// 
// import { useId } from 'react';
// 
// 
// 
// export default function SearchBox({ value, onChange }) {
  // const nameFieldId = useId();
  // return (
    // <div className={css.wraper}>
      {/* <label */}
        // className={css.label}
        // htmlFor={nameFieldId}
        // aria-labelledby="searchLabel"
      // >
        {/* Find contacts by name */}
      {/* </label> */}
      {/* <input */}
        // className={css.field}
        // type="text"
        // name="name"
        // id={nameFieldId}
        // value={value}
        // onChange={e => onChange(e.target.value)}
      // />
    {/* </div> */}
  // );
// }
import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const searchId = useId();

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <div className={css.wraper}>
      <label
      className={css.label}
       htmlFor={searchId}>
        Find contacts by name
        </label>
      <input
        className={css.field}
        type="text"
        name="search"
        value={search}
        id={searchId}
        onChange={handleChange}
      />
    </div>
  );
}