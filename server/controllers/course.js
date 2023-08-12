const db = require('../db');


//----readAllCourse
exports.readAllCourse= async (req, res) =>{
  const sql = 'SELECT * FROM course';
  db.query(sql,(error, results)=>{
    if(error){
      return res.status(500).json({ error });
    }
    res.status(200).json(results);
  });
};

//----readCourse
exports.readCourse = async (req, res) => {
   const course_id = req.params.id;
   const sql ="SELECT * FROM course WHERE course_id=?";
   db.query(sql,course_id,(error, results)=>{
    if(error){
       return res.status(500).json({ error });    
    }
    res.status(200).json(results);
   });
};



//----deleteCourse
exports.deleteCourse = async (req, res) => {
  const course_id = req.params.id;

  // First, delete the course from the std_reg_course table
  db.query('DELETE FROM std_reg_course WHERE course_id = ?', [course_id], (error, results) => {
      if (error) {
          return res.status(500).json({ error });
      }
  });

  // Then, delete the course from the teach table
  db.query('DELETE FROM teach WHERE course_id = ?', [course_id], (error, results) => {
      if (error) {
          return res.status(500).json({ error });
      }
  });

  // Finally, delete the course from the course table
  db.query('DELETE FROM course WHERE course_id = ?', [course_id], (error, results) => {
      if (error) {
          return res.status(500).json({ error });
      }
  });

  res.status(200).json({ message: "Courses for course_id " + course_id + " have been deleted successfully from std_reg_course, teach and course tables." });
};




//----updateCourse
exports.updateCourse = async (req, res) => {
  const { id } = req.params;  //id = course_id 
  const {subj_code, room_id, Years, Term, day, time_begin, time_end} = req.body;
  const sql = "UPDATE course SET subj_code = ?, room_id = ?, Years = ?, Term = ?, day = ?, time_begin = ?, time_end = ? WHERE course_id = ?";
  db.query(sql, [subj_code, room_id, Years, Term, day, time_begin, time_end, id], (error, results) => {
      if (error) {
          return res.status(500).json({ error });
      }
      res.status(200).json({ message: "Course has been updated successfully." });
  });
};


