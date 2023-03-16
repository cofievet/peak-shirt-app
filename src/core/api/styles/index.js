import { responseToJson } from "core/utils";
import config from "react-global-configuration";

const API_BASE_URL = config.get(
  "API_BASE_URl",
  process.env.REACT_APP_API_BASE_URL
);

export const styles = {
  getList: () => () => fetch(`${API_BASE_URL}/styles`).then(responseToJson),
};
