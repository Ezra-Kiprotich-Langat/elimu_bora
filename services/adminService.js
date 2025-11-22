import Admin from "../models/adminModel.js";

const adminService = {
  create(data) {
    return Admin.create(data);
  },
  remove(id) {
    return Admin.findByIdAndDelete(id);
  }
};

export default adminService;