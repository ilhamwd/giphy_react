import { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import GiphyModel from "../../domain/models/GiphyModel";
import GiphyRepository from "../../domain/repository/GiphyRepository";
import { Link } from "react-router-dom";

const SearchScreen = () => {
  const repository = new GiphyRepository();
  const searchTimeoutRef = useRef<NodeJS.Timeout | undefined>();
  const [data, setData] = useState<GiphyModel[] | null>([]);

  useEffect(() => {
    repository.searchGiphy("today").then((data) => setData(data));
  }, []);

  const handleTypeSearch = (val: string) => {
    clearTimeout(searchTimeoutRef.current);

    searchTimeoutRef.current = setTimeout(() => handleSearch(val), 1000);
  };

  const handleSearch = async (val: string) => {
    setData([]);

    const data = await repository.searchGiphy(val);

    setData(data);
  };

  return (
    <div className="pt-3 d-flex flex-column">
      <h2 className="title mb-4">Search your giphy</h2>
      <Form.Control
        as="input"
        onChange={(e) => handleTypeSearch(e.target.value)}
      />
      <div className="mt-4 row gy-4">
        {data?.map((e, i) => {
          return (
            <div className="col-sm-3" key={i}>
              <Link to={e.url} target="_blank">
                <img
                  className="giphy-img"
                  src={e.images.original.url}
                  alt={e.title}
                  title={e.title}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchScreen;
