const express = require('express');
const router = express.Router();

const {
    findAvailableTimeSlots,
    createReservation,
    readAllReservation,
    readReservationByDate,
    readReservationByYearTerm,
    readReservationById,
    readReservationByRoomId,
    deleteReservation,
  } = require("../controllers/reservation");

// middleware 
const { authCheck,adminCheck } = require("../middleware/auth");



router.post('/reservation/findDayTime', findAvailableTimeSlots);    //หาวันเวลาว่าง 
router.post('/reservation', createReservation);                     //จองห้อง
router.get('/reservation', readAllReservation);                     //อ่านประวัติการจองทั้งหมด
router.get('/reservationbydate', readReservationByDate);            //อ่านประวัติการจองจากวันที่
router.get('/reservation/:Year/:Term', readReservationByYearTerm);            //อ่านประวัติการจองจากปีเทอม
router.get('/reservationbyuserid/:id', readReservationById);       //อ่านประวัติการจองจาก user_id
router.get('/reservationbyroomid/:id', readReservationByRoomId);   //อ่านประวัติการจองจาก room_id
router.delete('/reservation/:id', deleteReservation);               //ลบการจอง
module.exports = router;