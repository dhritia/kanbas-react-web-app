import { Link, useParams, useLocation } from "react-router-dom";
import './index.css';
function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Credentials", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-course-nav">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={` ${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
