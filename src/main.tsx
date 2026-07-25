
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import ThankYouPage from "./app/ThankYouPage.tsx";
  import "./styles/index.css";

  const path = window.location.pathname;
  const RootComponent = path === "/gracias" ? ThankYouPage : App;

  createRoot(document.getElementById("root")!).render(<RootComponent />);
  