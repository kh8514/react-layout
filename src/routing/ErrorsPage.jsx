import { Navigate, Route, Routes } from "react-router-dom"
import Error404 from "../pages/error/Error404"
import Error500 from "../pages/error/Error500"
import ErrorsLayout from '../pages/error/ErrorsLayout';

const ErrorsPage = () => {
    return (
        <Routes>
            <Route Component={ErrorsLayout}>
                <Route path="404" element={<Error404 />}/>
                <Route path="500" element={<Error500 />}/>
                <Route index element={<Navigate to="404" />} />
            </Route>
        </Routes>
    )
}

export default ErrorsPage