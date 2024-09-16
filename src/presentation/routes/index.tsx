import { Route, Routes } from "react-router-dom";
import { RoutesEnum } from "../../domain/models/Api/Enums";
import { Home } from "../pages";
import PeopleForm from "../components/PeopleForm";
import PeopleList from "../components/PeopleList";

export default function Pages(): JSX.Element {
  return (
    <Routes>
      <Route element={<Home />} path={RoutesEnum.HOME} />
      <Route element={<PeopleList />} path={RoutesEnum.PEOPLE} />
      <Route element={<PeopleForm />} path={RoutesEnum.ADD_PEOPLE} />
      <Route
        element={<PeopleForm />}
        path={RoutesEnum.EDIT_PEOPLE}
      />
    </Routes>
  );
}
