import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppConfig } from "store/app/app.reducer";
import { StateNetwork } from "store/index.reducer";
import style from "./style";

const Table = ({
  columns,
  data,
  dataItems,
  titleBar,
  description,
  columnsCount,
  columnsCountMobile,
  loading,
  hasNextPage,
  currentPage,
  handleLoadMore,
  classes
}:any) => {
  const [showMoreItems, setShowMore] = useState<boolean | any>(false);
  const { isMobile } = useSelector<StateNetwork, AppConfig>(
    (state) => state.appConfig
  );
  const [NextPage, setNextPage] = useState<number>(currentPage);
  const [LoadingShowMore, setLoadingShowMore] = useState<boolean>(false);
  const handleShowMore = (e,i) => {
    e.stopPropagation();
    if (showMoreItems === i) {
      setShowMore(null);
    } else {
      setShowMore(i);
    }
  };

  let ShowmoreSlice = isMobile
    ? columnsCountMobile || 1
    : columnsCount || 7;

  const handleScroll = (e) => {
    if (hasNextPage) {
      const isBottom =
        e.target.scrollHeight - e.target.scrollTop - 20 <=
        e.target.clientHeight;

      if (isBottom && !loading && hasNextPage && !LoadingShowMore) {
        setLoadingShowMore(true);
        handleLoadMore(NextPage + 1);
        setNextPage(NextPage + 1);
        setLoadingShowMore(false);
      }
    }
  };
  const [ActiveRing, setActiveRing] = useState<number>(0);
  const handleChangeRing = (i) => {
    setActiveRing(i);
    handleLoadMore(currentPage, i);
  };
  return (
    <div className={classes.root}>
      {titleBar && (
        <div
          className={classes.titleBar}
        >
          <div className={classes.title}>{titleBar}</div>
        </div>
      )}
      {description && (
        <div
          className={classes.descriptionBar}
        >
          <div className={classes.descriptions}>
            {description?.map((item, i) => (
              <span
                className={
                  ActiveRing === i ? classes.activeringtext : classes.ringtext
                }
                onClick={() => handleChangeRing(i)}
                key={i}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
      <div onScroll={(e) => handleScroll(e)} className={classes.wrapper}>
        <ul className={classes.header}>
          {columns?.length > ShowmoreSlice && (
            <li className={classes.showmoreItem}>
              <div
                className={classes.showmoreColumn}
              ></div>
            </li>
          )}
          {columns?.slice(0, ShowmoreSlice).map((item, i) => (
            <li
              key={i}
              className={classes.headerItem}
            >
              {item.title}
            </li>
          ))}
        </ul>

        {data?.length === 0 || !data ? (
          <div className={classes.emptyTable}>
            <i className={"icon icon-document"}></i>
            <span>داده ای برای نمایش وجود ندارد </span>
            <small>این یک متن تستی میباشد که باید جایگزین شود</small>
          </div>
        ) : (
          data?.map((value, i) => (
            <div
              style={{ cursor: value?.link ? "pointer" : "alias" }}
              className={classes.extraColumns}
              key={i}
            >
              <ul className={classes.listItems}>
                {columns?.length > ShowmoreSlice && (
                  <li
                    style={{
                      background: showMoreItems === value.id ? "#F1F8EC" : "",
                    }}
                    className={classes.showmoreItem}
                  >
                    <div
                      onClick={(e) => handleShowMore(e,value.id)}
                      className={classes.showmore}
                    >
                      {showMoreItems === value.id ? (
                        <span>-</span>
                      ) : (
                        <span>+</span>
                      )}
                    </div>
                  </li>
                )}
                {dataItems?.slice(0, ShowmoreSlice).map((item, index) => (
                  <li
                    style={{
                      background: showMoreItems === value.id ? "#F1F8EC" : "",
                    }}
                    key={index}
                    className={classes.items}
                  >
                    <div className={classes.itemprecent}>
                      <span
                        style={{ width: value[item.precent] ? 60 : "auto" }}
                        className={classes.value}
                      >
                        {value[item.data]}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              {showMoreItems === value.id && (
                <ul className={classes.moreLinks}>
                  {columns
                    ?.slice(ShowmoreSlice, columns?.length)
                    .map((item, index) => (
                      <li key={index} className={classes.moreLinksItem}>
                        <span className={classes.name}>{item.title} : </span>
                        <span className={classes.value}>
                          {data[0][dataItems[item?.id]?.data]}
                        </span>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          ))
        )}
        {loading && (
          <div className={classes.spinner}>
            loading
          </div>
        )}
      </div>
    </div>
  );
};
export default style(Table);
