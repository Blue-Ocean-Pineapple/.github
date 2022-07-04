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

// function(){
//   mongoose.connection.db.dropDatabase();
// });

const TicketSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  taskName: {
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
  address: {
    type: String,
    required: true,
    trim: true,
  },
  coordinates: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
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
  studentId: [String],
  // reacts: [String],
  voteUp: {
    type: [String],
  },
  voteDown: {
    type: [String],
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
  complete: {
    type: Boolean,
    default: false,
  },
});

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
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
    default: false,
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
