const mongoose=require('mongoose');

mongoose.set('useCreateIndex',true);

const URLSlugs = require('mongoose-url-slugs');
const passportLocalMongoose=require('passport-local-mongoose');

//my schema goes here!
const messageSchema= new mongoose.Schema({
  name: String,
  display:Boolean,
  email: String,
  secret: Boolean,
  text: String,
  createdAt: String,
  session_id: String
});

messageSchema.plugin(URLSlugs('name'));

mongoose.model('Message',messageSchema);

const userSchema= new mongoose.Schema({
  username:String,
  hash: String
});

userSchema.plugin(passportLocalMongoose);

mongoose.model('User',userSchema);

const dataSchema= new mongoose.Schema({
  website_id: Number,
  visited: Number,
  messages: Number,
  newmessages:Number
});

mongoose.model('Data',dataSchema);

// is the environment variable, NODE_ENV, set to PRODUCTION?
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fs = require('fs');
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/finalProject';
}

mongoose.connect(dbconf,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log('Connection success to database');})
.catch(()=>{console.log('Connection failed to database');});
