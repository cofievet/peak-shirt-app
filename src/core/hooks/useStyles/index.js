import { styles } from "core/api";
import { useQuery } from "react-query";

// http://my-json-server.typicode.com/cofievet/peak-shirt-app/tshirts

export default function useStyles() {
  const queryResponse = useQuery("styles", styles.getList());

  return { ...queryResponse, styles: queryResponse.data };
}
