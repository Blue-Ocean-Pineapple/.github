const mongoose = require('mongoose');

//create connection
mongoose.connect('mongodb://localhost/chores',
  { useNewUrlParser: true }, { useUnifiedTopology: true } )
  .then(() => {
    console.log('database connected sucessfully!');
  }).catch(() => {
    mongoose.set('useCreateIndex', true);
  });

  // ,function(){
//   mongoose.connection.db.dropDatabase();
// });

const TicketSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    }
  },
  clientStatus: {
    type: String,
    required: true,
    enum: ['awaiting', 'approved', 'in-progress'],
    default: "awaiting",
  },
  creatorId: {
    type: String,
    required: true,
  },
  reacts: [String],
  studentId: [String],
  staffId: {
    type: String,
    default: null
  },
  date: {
    type: Date
  },
  createdAt : {
    type: Date,
   },
  complete: {
    type: Boolean,
    required: true,
    default: false
  }
})

const UserSchema = new mongoose.Schema({
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
  },
  password: {
    type: String
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  photo : {
    type: String
  },
  role: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  }
});

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  wage: {
      type: Number,
  }
},
{ timestamps: true });

const User = mongoose.model('users', UserSchema);
const Ticket = mongoose.model('tickets', TicketSchema);
const Category = mongoose.model('categories', CategorySchema);

module.exports.User = User;
module.exports.Ticket = Ticket;
module.exports.Category = Category;
