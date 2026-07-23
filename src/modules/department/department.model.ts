import { Schema, model } from "mongoose";
import { DepartmentCode } from "./department.types.js";

const departmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    code: {
      type: String,
      required: true,
      unique: true,
      enum: Object.values(DepartmentCode),
    },

    description: {
      type: String,
      trim: true,
    },

    monthlyBudget: {
      type: Number,
      required: true,
      min: 0,
    },

    manager: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Department = model("Department", departmentSchema);

export default Department;