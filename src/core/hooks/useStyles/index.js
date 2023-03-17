import { styles } from "core/api";
import { useQuery } from "react-query";

// http://my-json-server.typicode.com/cofievet/peak-shirt-app/tshirts

export default function useStyles() {
  const queryResponse = useQuery("styles", styles.getList());

  return {
    ...queryResponse,
    styles: queryResponse.data?.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    }),
  };
}
