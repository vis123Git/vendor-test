const { Schema, model } = require("mongoose");

const VendorUsersSchema = new Schema(
  {
    VendorOrganizationId: { type: Number },
    UserName: { type: String },
    Name: { type: String },
    Role: { type: String },
  },

  { timestamps: true }
);

const VendorUsers = model("VendorUser", VendorUsersSchema);
module.exports = { VendorUsers };
