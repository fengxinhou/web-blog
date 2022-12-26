import "./App.css";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { history } from "./utils";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./pages/Login/Login"));

function App() {
  return (
    <HistoryRouter history={history}>
      <Suspense
        fallback={
          <div
            style={{
              textAlign: "center",
              marginTop: 200,
            }}
          >
            loading...
          </div>
        }
      >
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Suspense>
    </HistoryRouter>
  );
}

export default App;
