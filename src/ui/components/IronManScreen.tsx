import { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import GiphyModel from "../../domain/models/GiphyModel";
import GiphyRepository from "../../domain/repository/GiphyRepository";
import { Link } from "react-router-dom";

const IronManScreen = () => {
  const repository = new GiphyRepository();
  const [data, setData] = useState<GiphyModel[] | null>([]);

  useEffect(() => {
    repository.searchGiphy("iron man").then((data) => setData(data));
  }, []);

  return (
    <div className="pt-3 d-flex flex-column">
      <h2 className="title mb-4">Iron man giphy</h2>
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

export default IronManScreen;
