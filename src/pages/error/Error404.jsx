
import Button from "components/button/Button";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="text-center">
      <div>
        <h1 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px]">
          404
        </h1>
        <p>페이지를 찾을 수 없습니다.</p>
        <Button variant="primary" style={{ marginLeft: '10px' }}><Link to="/">홈으로 이동</Link></Button>
      </div>
    </div>
  );
};

export default Error404;
