const mongoose = require('mongoose')

// Mongoose Schema
const addUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
      // enum: ['expense', 'credit']
    }
  },
  { timestamps: true }
)

// Mongoose Model
module.exports = mongoose.model('user', addUserSchema)
