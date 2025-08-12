import axios, { AxiosError } from 'axios';

export async function fetchCocktailByName(name: string) {
  try {
    const API_URL = process.env.REACT_APP_COCKTAIL_API;
    const response = await axios.get(`${API_URL}/search.php?s=${name.toLowerCase()}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw new Error(`Error ${axiosError.response.status}: ${axiosError.response.statusText}`);
    } else if (axiosError.request) {
      throw new Error('No response received from server');
    } else {
      throw new Error(`Request error: ${axiosError.message}`);
    }
  }
}
