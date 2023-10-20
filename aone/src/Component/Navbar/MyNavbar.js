import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate ,useLocation} from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown,FaLock  } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";
const MyNavbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  const[isExpanded,setIsExpanded] =useState(false);  //hamberger menu
 
  
  

  const logout = () => {
    dispatch({
        type: "LOGOUT",
        payload: null,
    });
    // Use setTimeout to delay the redirection.
    setTimeout(() => {
        navigate("/");
    }, 0);


};

  return (
    <div className="navbar w-100 shadow">

    <div className="navbar-left ">
          {user ? (
            <Link  to={user.role === "admin" ? "/admin/index" : "/user/index"} activeClassName="selected">
              <AiFillHome className="icons"/>หน้าหลัก
            </Link>
          ) : (
            <Link  to="/" className={location.pathname === "/" ? "active" : ""}>
              <AiFillHome className="icons"/>หน้าหลัก
            </Link>
          )}
    </div>
    
      <div className="navbar-right">
      {user && <GrMenu className="menu-responsive me-3" onClick={() => setIsExpanded(!isExpanded)} />} 
          {user && user.role === "admin" ? (
            
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""} `}>

             <NavLink to="/importcourse" activeClassName="selected"><li>Import คอร์สเรียน</li></NavLink>
             <NavLink to="/importstudent" activeClassName="selected"><li>Import นักเรียน</li></NavLink>
             <NavLink to="/booking-approval" activeClassName="selected"><li>ตรวจสอบคำร้องขอจองห้องเรียน</li></NavLink>
            

              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  เเก้ไขข้อมูลระบบ
                  </a>
                  <ul class="dropdown-menu">
                    <li><Link to="/data-managementroomtype" class="dropdown-item" >ข้อมูลชนิดห้อง</Link></li>
                    <li><Link to="/data-managementroom" class="dropdown-item" > ข้อมูลห้องเรียน</Link></li>
                    <li><Link to="/data-managementyearsterm" class="dropdown-item" > ข้อมูลปีเทอม</Link></li>
                    <li><Link to="/data-managementstudent" class="dropdown-item" > ข้อมูลนักศึกษา</Link></li>
                    <li><Link to="/data-managementcourse" class="dropdown-item" > ข้อมูลการลงทะเบียน</Link></li>
                    <li><Link to="/data-managementstdincourse" class="dropdown-item" > ข้อมูลนักเรียนในคอร์ส</Link></li>
                    <li><Link to="/data-managementlecturer" class="dropdown-item" >ข้อมูลอาจารย์</Link></li>
                    <li><Link to="/data-managementsubject" class="dropdown-item" > ข้อมูลวิชา</Link></li>
                    <li><Link to="/data-managementuser" class="dropdown-item" > จัดการข้อมูลผู้ใช้</Link></li>
                  </ul>
              </li>

              <li class="nav-item dropdown ">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Admin
                  </a>
                  <ul class="dropdown-menu">
                    <li><Link to="/edit-profile" class="dropdown-item" >เเก้ไขข้อมูลส่วนตัว</Link></li>
                    <li><Link  onClick={logout} class="dropdown-item" > <BiLogIn/> ออกจากระบบ</Link></li>
                  </ul>
              </li>
           </ul>
          ) : user && user.role === "user" ? (
              
            <ul className={`collapsed ${isExpanded ? "is-expanded" : ""} `}>
               
                <NavLink to="/calendar" activeClassName="selected"> <li>ปฎิทินการใช้ห้อง</li></NavLink>
                <NavLink to="/booking"  activeClassName="selected"> <li>จองห้องเรียน</li></NavLink>
                <NavLink to="/booking-history" activeClassName="selected"> <li>ประวัติการจองห้องเรียน</li></NavLink>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  อาจารย์ {user.userName}
                  </a>
                  <ul class="dropdown-menu">
                    <li><Link to="/edit-profile" class="dropdown-item" >เเก้ไขข้อมูลส่วนตัว</Link></li>
                    <li><Link  onClick={logout} class="dropdown-item" > <BiLogIn/> ออกจากระบบ</Link></li>
                  </ul>
                </li>
            </ul>
          ) : (
              <div className="Navlogin ">
                <NavLink to="/login" activeClassName="selected">
                   <FaLock/> ลงชื่อเข้าใช้
                </NavLink>
              </div>
          )}
    </div>
  </div> 
  );
};

export default MyNavbar;
