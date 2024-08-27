import { Outlet } from "react-router-dom";

const ErrorsLayout = () => {
  return (
    <div className="w-dvw flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default ErrorsLayout;
