import { Pages } from "@pages/index";
import { router } from "@shared/config/routes";
import { RouterProvider } from "atomic-router-react";
import "./index.css";

function App() {
  return (
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  );
}

export default App;
