import axios from 'axios';

import {
  AppApiFactory,
  Configuration,
  GamesApiFactory,
  PlayersApiFactory,
} from '../generated-api';

const customAxios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

const config = new Configuration({ basePath: '' });

export const apiClient = {
  ...AppApiFactory(config, undefined, customAxios),
  ...GamesApiFactory(config, undefined, customAxios),
  ...PlayersApiFactory(config, undefined, customAxios),
};
