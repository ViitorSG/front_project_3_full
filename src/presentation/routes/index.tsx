import { Route, Routes } from "react-router-dom";
import { RoutesEnum } from "../../domain/models/Api/Enums";
import { Home } from "../pages";

export default function Pages(): JSX.Element {
  return (
    <Routes>
      <Route element={<Home />} path={RoutesEnum.HOME} />
    </Routes>
  );
}
