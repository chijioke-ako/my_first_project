require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

// app.use(cors());
//Allow origin Access origin and method
app.use(express.json());
app.use(cors({ origin: true, credentials: true, optionsSuccessStatus: 200 }));
app.set('trust proxy', 1);
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/upload', express.static('upload'));
app.use('/uploads', express.static('uploads'));

const archmentRouter = require('./Routers/Archment');
const contactRouter = require('./Routers/Contact');
const dashboardRouter = require('./Routers/Dashbroad');
const downloadRouter = require('./Routers/Download');
const forgetRouter = require('./Routers/Forget_password');
const loginRouter = require('./Routers/Login');
const milRouter = require('./Routers/Mail');
const mailContactRouter = require('./Routers/MailContact');
const openbravoRouter = require('./Routers/Openbravo');
const partnersRouter = require('./Routers/Partnert');
const pcmsRouter = require('./Routers/Pcms');
const pubRouter = require('./Routers/Pub');
const publicationRouter = require('./Routers/Publication');
const usersRouter = require('./Routers/Users');
const resumeRouter = require('./Routers/resume');
const signupRouter = require('./Routers/Sginup');
const verifyRouter = require('./Routers/auth');
const adminRouter = require('./Routers/admin');

app.use('/api/archment', archmentRouter);
app.use('/api/contact', contactRouter);
app.use('/api/dashbroad', dashboardRouter);
app.use('/api/download', downloadRouter);
app.use('/api/forgetpassword', forgetRouter);
app.use('/api/login', loginRouter);
app.use('/api/mail', milRouter);
app.use('/api/mailcontact', mailContactRouter);
app.use('/api/openbravo', openbravoRouter);
app.use('/api/partner', partnersRouter);
app.use('/api/pcms', pcmsRouter);
app.use('/api/lastPublications', pubRouter);
app.use('/api/publications', publicationRouter);
app.use('/api/users', usersRouter);
app.use('/api/resume', resumeRouter);
app.use('/api/register', signupRouter);
app.use('/api/verify', verifyRouter);
app.use('/api/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
