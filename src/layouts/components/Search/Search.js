import { useState, useEffect } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import AccountItem from "~/components/AccountItem";
import { wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";

import * as seacrhService from "~/apiService/searchService";

import { SearchIcon } from "~/components/Icons";
import classNames from "classnames/bind";
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSerachResult] = useState([]);
  const [showResult, setShowResult] = useState(true);


  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    
    if (!debouncedValue.trim()) {
      setSerachResult([]);
      return;
    }



    const fetchApi = async () => {
      const result = await seacrhService.search(debouncedValue);
      setSerachResult(result);

    };
    fetchApi();
  }, [debouncedValue]);

  const handleHideResult = () => {
    setShowResult(false);
  };
 
  const handleChange = (e) => {
    const searchValue = e.target.value;
    
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && !!searchResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>
              {Array.isArray(searchResult) &&
                searchResult.map((result) => (
                  <AccountItem key={result.id} data={result} />
                ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <form className={cx("search-input")}>
            <input
              value={searchValue}
              type="search"
              placeholder="Tìm kiếm tài khoản và video"
              spellCheck={false}
              onChange={handleChange}
              onFocus={() => setShowResult(true)}
            />
            <span className={cx("spanspliter")}></span>
            <button type="submit" className={cx("button-search")}>
              <SearchIcon />
            </button>
          </form>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
