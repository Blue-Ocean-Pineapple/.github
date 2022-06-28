const mongoose = require("mongoose");

//create connection
mongoose
  .connect(
    "mongodb://localhost/chores",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("database connected sucessfully!");
  })
  .catch(() => {
    mongoose.set("useCreateIndex", true);
  });

//   function(){
//   mongoose.connection.db.dropDatabase();
// });

const TicketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  wage: {
    type: Number,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
  clientStatus: {
    type: String,
    required: true,
    enum: ["awaiting", "approved", "in-progress", "complete"],
    default: "awaiting",
  },
  creatorId: {
    type: String,
    required: true,
  },
  reacts: [String],
  studentId: {
    type: String,
    default: null,
  },
  staffId: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    defaut: true,
  },
});

// const CategorySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   wage: {
//       type: Number,
//   }
// },
// { timestamps: true });

const User = mongoose.model("users", UserSchema);
const Ticket = mongoose.model("tickets", TicketSchema);
// const Category = mongoose.model('categories', CategorySchema);

module.exports.User = User;
module.exports.Ticket = Ticket;
// module.exports.Category = Category;
