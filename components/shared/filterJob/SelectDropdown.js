import React, { useEffect, useRef } from 'react';
import {FiSearch} from 'react-icons/fi';

const SelectDropdown = ({handleSearch, setSearch, name, showDropdown, setShowDropdown, selectData, setSelectData, dataArray}) => {

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropdown(false);
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef} className="filter-select">
      <button type="button" className="select-btn" onClick={() => setShowDropdown(!showDropdown)}>
        <span className="btn-main">{selectData}</span>
      </button>
      {showDropdown && (
        <div className="btn-dropdown">
          <span>{name}</span>
          <label>
            <input type="text" placeholder='Search' onChange={handleSearch} />
            <FiSearch className='icon'/>
          </label>
          <ul>
            {dataArray.map((value, index) => (
              <li key={index}>
                <p onClick={() => {
                    setSelectData(value);
                    setSearch("")
                    setShowDropdown(!selectData);
                  }}>
                  {value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )} 
      
    </div>
  )
}

export default SelectDropdown