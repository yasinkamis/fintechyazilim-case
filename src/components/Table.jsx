import React from "react";
import styled from "styled-components";

const Table = ({ data, isLoading, error, dataLength, query }) => {
  const tableHead = ["KOD", "ÜLKE", "BAŞKENT", "KITA", "BAYRAK"];
  return (
    <>
      {(error || !dataLength) && query ? (
        <h1 className="text-danger">
          {error?.response?.status === 404
            ? "Sonuç Bulunamadı"
            : error?.message || "Sonuç Bulunamadı"}
        </h1>
      ) : isLoading ? (
        <div className="w-100 d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              {tableHead.map((item) => (
                <th scope="col" key={item}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.alpha2Code}>
                <th scope="row">{item.alpha2Code}</th>
                <td>{item.name}</td>
                <td>{item.capital}</td>
                <td>{item.region}</td>
                <td>
                  <FlagIcon src={item.flag} alt="FlagIcon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;

const FlagIcon = styled.img`
  max-width: 50px;
`;
