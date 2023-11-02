import "./App.css";
import Router from "./Routes/Router";
import { useGetUserQuery } from "./redux/features/api/createAPI";

function App() {
  const { data, isLoading } = useGetUserQuery("mahmudulmk44@gmail.com");

  return (
    <div className="App min-w-[375px] relative bg-sec-bg ">
      {isLoading && (
        <div className="h-screen w-full">
          <div className="flex items-center justify-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="w-80 h-80 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {data?.data && <Router></Router>}
    </div>
  );
}

export default App;
