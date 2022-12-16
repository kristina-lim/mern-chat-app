const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },
  name: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  image: {
    type: String,
  },
  newMessages: {
    type: Object,
    default: {}
  },
  status: {
    type: String,
    default: 'online'
  },
}, {
    timestamps: true,
});