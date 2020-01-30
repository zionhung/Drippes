const mongoose = require("mongoose");

const DrippesSchema = new mongoose.Schema(
  {},
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" }}
);
mongoose.model('Drippes', DrippesSchema);
