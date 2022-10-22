import { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFetch } from "hooks";
import { Container } from "layout";
import { Search, Table, Toggle } from "components";
import GlobalStyle from "globalstyles";
import "bootstrap/dist/css/bootstrap.min.css";

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const App = () => {
  const [search, setSearch] = useState(null);
  const [toggleButtonController, setToggleButtonController] = useState(false);

  const navigate = useNavigate();
  let query = useQuery().get("search");

  const { response, isLoading, error } = useFetch(
    query && !toggleButtonController
      ? `https://restcountries.com/v2/capital/${query}`
      : "https://restcountries.com/v2/all",
    query
  );

  /**
   * ***************************************************************************************-----------INFO
   * `https://restcountries.com/v2/capital/${query}` yerine
   * response.filter(i => search.includes(i.capital))
   * ile capital verilerini filtreleyerek alabiliriz
   * fakat apiyi araştırınca böyle bir filtre ile karşılaştım onu kullanmayı tercih ettim.
   */

  const allFilterData = response?.filter((x) => {
    const reg = new RegExp(query, "gi");
    return (
      x?.alpha2Code?.match(reg) ||
      x?.name?.match(reg) ||
      x?.region?.match(reg) ||
      x?.capital?.match(reg)
    );
  });

  const handlerPushSearchPage = () => {
    if (!toggleButtonController) {
      navigate({
        pathname: "capital",
        search: `?search=${search}`,
      });
    } else {
      navigate({
        pathname: "/all",
        search: `?search=${search}`,
      });
    }
  };

  useEffect(() => {
    if (!search) {
      navigate({
        pathname: "",
      });
    }
  }, [navigate, search]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1 className="my-5">Ülkeler Listesi</h1>
        <Toggle
          toggleButtonController={toggleButtonController}
          navigate={navigate}
          setToggleButtonController={setToggleButtonController}
        />
        <div className="mb-3 d-flex flex-column">
          <Search
            handlerPushSearchPage={handlerPushSearchPage}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <Table
          data={toggleButtonController && query ? allFilterData : response}
          isLoading={isLoading}
          error={error}
          query={query}
          dataLength={allFilterData?.length > 0 && response?.length > 0}
        />
      </Container>
    </>
  );
};

export default App;
