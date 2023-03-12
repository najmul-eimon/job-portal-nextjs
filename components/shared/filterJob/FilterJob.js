import { useState } from 'react';
import SelectDropdown from './SelectDropdown';
import SingleCategoryTitle from './SingleCategoryTitle';
import suitcaseIcon from '@/public/images/svg/suitcase-grey.svg';
import mapIcon from '@/public/images/svg/map-trifold.svg';
import pencilIcon from '@/public/images/svg/pencil-line.svg';
import Image from 'next/image';

const FilterJob = () => {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('ui, ux, user interface, graphics');
  const [showIndustry, setShowIndustry] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [industry, setIndustry] = useState("Android");
  const [location, setLocation] = useState("California, USA");
  let industries = ["Android", "Accounting", "UX/UI Designer", "Fintech", "Front-end", "Back-end", "IOS", "Sound"];
  let locations = ["California, USA", "Alabama, USA", "Alaska", "Colorado", "Florida", "Georgia", "Indiana", "Louisiana"]

  let inputText = search.trim().toLocaleLowerCase();
  if(inputText.length > 0){
    industries = industries.filter(val => val.toLocaleLowerCase().match(inputText));
    locations = locations.filter(val => val.toLocaleLowerCase().match(inputText));
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  } 

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="filter-job">
      <div className="row">

        {/* industry */}
        <div className="col-md-6 col-lg-2">
          <div className="single-category">
            <SingleCategoryTitle icon={suitcaseIcon} label="Industry" arrow={true}/>
            <SelectDropdown handleSearch={handleSearch} name="Industry" setSearch={setSearch} showDropdown={showIndustry} setShowDropdown={setShowIndustry} selectData={industry} setSelectData={setIndustry} dataArray={industries}/>
          </div>
        </div>

        {/* Location */}
        <div className="col-md-6 col-lg-2">
          <div className="single-category">
            <SingleCategoryTitle icon={mapIcon} label="Location" arrow={true}/>
            <SelectDropdown handleSearch={handleSearch} name="Location" setSearch={setSearch} showDropdown={showLocation} setShowDropdown={setShowLocation} selectData={location} setSelectData={setLocation} dataArray={locations}/>
          </div>
        </div>

        {/* keywords */}
        <div className="col-md-6 col-lg-5">
          <div className="single-category keywords">
            <SingleCategoryTitle icon={pencilIcon} label={"Your Keyword..."} arrow={false}/>
            <input type="text" placeholder="ui, ux, user interface, graphics" value={input} onChange={handleInput}/>
          </div>
        </div>

        {/* search button */}
        <div className="col-md-6 col-lg-3">
          <div className="search-btn-main">
            <button type="button" className="animate-btn animate-btn-fill search-btn">
              <Image src='images/svg/search.svg' className='search-icon' alt="Icon" width={21} height={21} />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterJob;