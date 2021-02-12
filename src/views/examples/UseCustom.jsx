import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import useCounter from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const UseRef = (props) => {
  const [count, inc, dec] = useCounter(10);
  const url = "https://servicodados.ibge.gov.br/api/v1/localidades/regioes";
  const response = useFetch(url);

  const showRegions = (regions) => {
    return regions.map((r) => (
      <li key={r.id}>
        #{r.id} - {r.nome} ({r.sigla})
      </li>
    ));
  };

  return (
    <div className="UseCustom">
      <PageTitle title="Your Hook" subtitle="Creating your own hook" />
      <SectionTitle title="Exercise 01"></SectionTitle>
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => inc()}>
            +1
          </button>
          <button className="btn" onClick={() => dec()}>
            -1
          </button>
        </div>
      </div>
      <SectionTitle title="Exercise 02"></SectionTitle>
      <div className="center">
        <ul>{!response.loading ? showRegions(response.data) : false}</ul>
      </div>
    </div>
  );
};

export default UseRef;
