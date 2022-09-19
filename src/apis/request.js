import axios from "axios";

const ArvanCloudMockBaseURL = "https://api.realworld.io/api";

export default async function request(
  method = "get",
  url,
  data = undefined,
  params = undefined,
  config = null
) {
  const config = {
    baseURL: ArvanCloudMockBaseURL,
    method,
    url,
    data,
    params,
    ...config,
  };
  const result = await axios.request(config);
  return result;
}
