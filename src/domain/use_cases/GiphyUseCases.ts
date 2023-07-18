import GiphyModel from "../models/GiphyModel";

interface GiphyUseCases {
    searchGiphy: (query: string) => Promise<GiphyModel[] | null>; 
}

export default GiphyUseCases;