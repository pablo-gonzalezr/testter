import React from "react";

const CountryList = ({ countryList = [] }) => {
  return (
    <>
      {countryList.map((data) => {
        if (data) {
          return (
            <div key={data.Title}>
              <h1>{data.Title}</h1>
              <img src={data.Poster} alt="" />
              <button
                onClick={() => {
                  console.log(data.imdbID);
                }}
              >
                Consola ID
              </button>
              <button
                className="btn btn-secondary"
                data-toggle="tooltip"
                data-placement="top"
                title={data.Title}
              >
                Tooltip on top
              </button>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default CountryList;
