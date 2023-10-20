import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//function
import {updatePassword}from "../../functions/user"

const EditProfile = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handleUpdatePassword = () => {
   
    const values = {
      user_id: user.username, 
      oldPassword,
      newPassword,
      confirmPassword,
    };
    
    updatePassword(user.token, values)
        .then((res) => {
          alert(res.data);
          window.location.reload(); 
        })
        .catch((err) => {
          alert(err.response.data);
          
        });

  };
 

  return (
    <div className='container-main-noborder'>
       <h3 className="title">ข้อมูลส่วนตัว</h3>
         <div className='container-main'>
            <div className="row p-4" >
                <div class="col-4  cardImg-custome">
                  
                </div>
                <div class="col-8 ">
                  <div className='d-flex m-4'>
                  <h3 className='title3 ' >รหัสประจำตัว:</h3>
                  <h3 className='title3 editspan ms-2' >{user ? user.username : ""}</h3>
                  </div>
                   <div className='d-flex m-4 '>
                   <h3 className='title3 ' >ชื่อ-สกุลนักศึกษา :</h3>
                   <h3 className='title3 editspan ms-2' >{user ? user.userName : ""}</h3>
                   </div>
                   <div className='d-flex m-4'>
                   <h3 className='title3' >คณะ : </h3>
                   <h3 className='title3 editspan ms-2' >เทคโนโลยีอุตสาหกรรม</h3>
                   </div>
                   <div className='d-flex m-4'>
                   <h3 className='title3' >สาขาวิชา :</h3>
                   <h3 className='title3 editspan ms-2' >วิศวกรรมคอมพิวเตอร์</h3>
                   </div>
                </div>
            </div>
       </div>
       <h3 className="title mt-5">เปลี่ยนรหัสผ่าน</h3>
         <div className='container-main'>
            <div className="row p-4 " style={{ height: '310px' }}>
              <div class="col ">

                <div className='d-flex m-4'>
                  <h3 className='title3 m-2 me-5' >รหัสผ่านเดิม :</h3>
                     <input
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>

                <div className='d-flex m-4'>
                <h3 className='title3 m-2 me-5' >รหัสผ่านใหม่ :</h3>
                        <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                </div>

                <div className='d-flex m-4'>
                   <h3 className='title3 m-2' >ยืนยันรหัสผ่านใหม่ :</h3>
                   <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                </div>
                <div className='d-flex m-4 '>
                <button className="btn-manage2 me-3" onClick={handleUpdatePassword}>บันทึกรหัสผ่าน</button>
                </div>
                
  
              </div>
                
            </div>
       </div>
    </div>
  )
}

export default EditProfile