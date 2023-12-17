const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();

// Routers
router.post("/login", authController.login);
router.post("/kho", authController.kho);
router.post("/themnhanvien", authController.themnhanvien);
router.post("/capNhatMenu", authController.capNhatMenu);
router.post("/nhacungcap", authController.nhacungcap);
router.post("/loaihang", authController.loaihang);

router.post("/themmenu", authController.themmenu);

router.post("/doanhthu1", authController.doanhthu);
router.post("/capNhatHangHoa", authController.capNhatHangHoa);
router.post("/capNhatNhanVien", authController.capNhatNhanVien);
router.post("/suanhacungcap", authController.suanhacungcap);
router.post("/capnhatmatkhau", authController.capnhatmatkhau);

module.exports = router;
