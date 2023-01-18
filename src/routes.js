import { useRoutes } from "react-router-dom";
import ShowUsers from "./pages/ShowUsers";
import App from "./App";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element:<App />
        }
    ])
}