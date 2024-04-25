import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { appStore } from "../stores/appStore";

export function AppProviderMock({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <Provider store={appStore}>{children}</Provider>
    </BrowserRouter>
  );
}
