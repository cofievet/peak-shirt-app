import { tshirts } from "core/api";
import { useQuery } from "react-query";

// http://my-json-server.typicode.com/cofievet/peak-shirt-app/tshirts

export default function useTshirts() {
  const queryResponse = useQuery("tshirts", tshirts.getList());

  return { ...queryResponse, tshirts: queryResponse.data };
}
