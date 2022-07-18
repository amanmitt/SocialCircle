const express = require("express");
const {
  register,
  login,
  followUser,
  updatePassword,
  updateProfile,
  deleteMyProfile,
  myProfile,
  getUserProfile,
  getAllUsers,
  logout,
  getMyPosts,
  getUserPosts,
} = require("../controllers/user");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/update/password").put(isAuthenticated, updatePassword);

router.route("/follow/:id").get(isAuthenticated, followUser);
router.route("/update/profile").put(isAuthenticated, updateProfile);
router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);
router.route("/me").get(isAuthenticated, myProfile);

router.route("/user/:id").get(isAuthenticated, getUserProfile);
router.route("/users").get(isAuthenticated, getAllUsers);

router.route("/my/posts").get(isAuthenticated, getMyPosts);
router.route("/userposts/:id").get(isAuthenticated, getUserPosts);

module.exports = router;
