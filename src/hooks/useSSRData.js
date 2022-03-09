import { useContext } from "react";
import SSRDataContext from "server/utils/SSRDataContext";

function useSSRData() {
  return useContext(SSRDataContext);
};

export default useSSRData;
