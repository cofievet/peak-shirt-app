import { useQuery } from "react-query";

export default function useTshirts() {
  const queryResponse = useQuery("tshirts", () =>
    fetch(
      "http://my-json-server.typicode.com/cofievet/peak-shirt-app/tshirts"
    ).then((response) => response.json())
  );

  return { ...queryResponse, tshirts: queryResponse.data };
}
