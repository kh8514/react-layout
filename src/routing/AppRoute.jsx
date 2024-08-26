import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import App from '../App';
import ErrorsPage from './ErrorsPage';
import PrivateRoutes from "./PrivateRoutes";

const AppRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route Component={App}>
                    <Route path="/error/*" Component={ErrorsPage}/>
                    <Route path="/*" Component={PrivateRoutes} />
                    <Route index element={<Navigate to="/dashboard" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoute