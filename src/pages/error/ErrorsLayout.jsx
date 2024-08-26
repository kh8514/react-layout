import { Outlet } from "react-router-dom"

const ErrorsLayout = () => {
    return (
        <div className="py-32 text-center">
            <Outlet/>
        </div>
    )
}

export default ErrorsLayout