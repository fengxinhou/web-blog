import "./App.css";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { history } from "./utils/history";
import { lazy, Suspense } from "react";
import Detail from "./components/Detail/Detail";

const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Frame = lazy(() => import("./pages/Frame/Frame"));
const Home = lazy(() => import("./components/Home/Home"));
const Article = lazy(() => import("./components/Article/Article"));
const Publish = lazy(() => import("./components/Publish/Publish"));
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
            <Route path="/" element={<Frame />}>
              <Route index element={<Home />} />
              <Route path="/publish" element={<Publish />} />
              <Route path="/article" element={<Article />} />
              <Route path="/detail" element={<Detail />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Suspense>
    </HistoryRouter>
  );
}

export default App;
