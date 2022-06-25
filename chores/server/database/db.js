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
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  status: {
    type: String,
    required: true,
    default: "Unassigned",
  },
  creatorId: {
    type: String,
    required: true,
  },
  reacts: [String],
  studentId: {
    type: String,
    required: true,
  },
  staffId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
  createdAt : {
    type: Date,
    required: true,
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

const user = mongoose.model('users', UserSchema);
const ticket = mongoose.model('tickets', TicketSchema);
const category = mongoose.model('categories', CategorySchema);

module.exports.user = user;
module.exports.ticket = ticket;
module.exports.category = category;
