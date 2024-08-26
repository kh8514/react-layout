import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import App from '../App';
import ErrorsPage from '../src/pages/ErrorsPage';
import PrivateRoutes from "../src/routing/PrivateRoutes";

const AppRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route Component={App}>
                    <Route path="/error/*" Component={ErrorsPage}/>
                    <Route path="/*" Component={PrivateRoutes} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoute