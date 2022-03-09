import { useFrontload } from "react-frontload";
import SSRDataContext from "server/utils/SSRDataContext";

function SSRHOC({ children, getInitialData }) {

  if (!getInitialData) return (
    <>{children}</>
  );

  const {
    data,
    frontloadMeta
  } = useFrontload(
    'viewSSRData',
    async () => await getInitialData()
  );

  if (frontloadMeta.pending) return <div>loading</div>;

  return (
    <SSRDataContext.Provider value={data}>
      {children}
    </SSRDataContext.Provider>
  )
}

export default SSRHOC;
