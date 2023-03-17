import { tshirts } from "core/api";
import { useQuery } from "react-query";

// http://my-json-server.typicode.com/cofievet/peak-shirt-app/tshirts

export default function useTshirts({ styleIds }) {
  const queryResponse = useQuery(
    ["tshirts", { styleIds: Array.from(styleIds) }],
    tshirts.getList(styleIds)
  );

  return { ...queryResponse, tshirts: queryResponse.data };
}
