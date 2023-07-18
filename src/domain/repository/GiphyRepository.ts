import { http } from "../config";
import GiphyModel from "../models/GiphyModel";
import GiphyUseCases from "../use_cases/GiphyUseCases";

class GiphyRepository implements GiphyUseCases {
  async searchGiphy(query: string): Promise<GiphyModel[] | null> {
    try {
      const req = await http.get("gifs/search", {
        params: {
          q: query,
        },
      });

      return req.data.data as GiphyModel[];
    } catch (e) {
      console.log("Error while fetching data", e);

      return null;
    }
  }
}

export default GiphyRepository;
