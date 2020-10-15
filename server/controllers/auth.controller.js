const db = require("../models");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

const expressJwt = require('express-jwt');
var bcrypt = require("bcryptjs");
var _ = require('underscore');

//const _ = require('lodash');
//const fetch = require('node-fetch');

const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandling');
const sgMail = require('@sendgrid/mail');
const config = require("../config/auth.config");
var nodemailer = require('nodemailer');
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'


exports.registerController = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'sedkolod71',
      pass: 20257253
    }
  });
  const { username, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then((err, user) => {
      if (user) {
        return res.status(400).json({
          errors: 'Email is taken'
        });
      }
    });

    const token = jwt.sign(
      {
        username,
        email,
        password
      },
      config.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: '1h'
      }
    );
   console.log(config.JWT_ACCOUNT_ACTIVATION)
    const emailData = {
      subject: "Account activation link",
      html:  `
      <h1>Please use the following to activate your account</h1>
      <p>${config.CLIENT_URL}/users/activate/${token}</p>
      <hr />
      <p>This email may containe sensetive information</p>
      <p>${config.CLIENT_URL}</p>
       `,
      from: 'sedkolod71@gmail.com',
      to: req.body.email
    };
    const sendEmail = async () => {
      try {
        const info = await transporter.sendMail(emailData);
        console.log("Email sent", info.response);
        return res.json({
          message: `Email has been sent to ${email}`
        });    
        } catch (err) {
        console.log(err);
        return res.status(400).json({
          success: false,
          errors: errorHandler(err)
        });
      }
    };
    sendEmail();
  }
};
/******************************************************** */

exports.activationController = (req, res) => {
  const { token } = req.body;
  console.log(req.body.token);
  if (token) {
    jwt.verify(token, config.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        console.log('Activation error');
        return res.status(401).json({
          errors: 'Expired link. Signup again'
        });
      } else {
        const { username, email, password } = jwt.decode(token);
        const user=new User({
          username,
          email,
          password
        })
        return res.json({
          User: user,
          message: 'an admin will check you registration'
        });
        /*
        console.log(email , username, password );
        const user = new User({
          username,
          email,
          password
        });*/
        console.log(email , username, password );
/*
 User.create({
    username:username,
    email: email,
    password: bcrypt.hashSync(password, 8)
  })
    .then(user => {
          if (!user) {
            console.log('Save error', errorHandler(err));
            return res.status(401).json({
              errors: errorHandler(err)
            });
          } else {
            if (req.body.roles) {
              Role.findAll({
                where: {
                  name: {
                    [Op.or]: req.body.roles
                  }
                }
              }).then(roles => {
                user.setRoles(roles).then(() => {
                  console.log("User was registered successfully!")
                 // res.send({ message: "User was registered successfully!" });
                });
              });
            } else {
              // user role = 1
              user.setRoles([2]).then(() => {
                console.log("User was registered successfully!")

             //   res.send({ message: "User was registered successfully!" });
              });
            }
            return res.json({
              success: true,
              message: user,
              message: 'Signup success'
            });
          }
        });*/
      }
    });
  } else {
    return res.json({
      message: 'error happening please try again'
    });
  }
};

/**************************************************************************** ***************/

exports.LastRegistration=(req,res)=>{
 const {email , username, password}=req.body;


  User.create({
    username:username,
    email: email,
    password:bcrypt.hashSync(password, 8)
  })
    .then(user => {
          if (!user) {
            console.log('Save error', errorHandler(err));
            return res.status(401).json({
              errors: errorHandler(err)
            });
          } else {
            if (req.body.roles) {
              Role.findAll({
                where: {
                  name: {
                    [Op.or]: [req.body.roles]
                  }
                }
              }).then(roles => {
                user.setRoles(roles).then(() => {
                  console.log("User was registered successfully!")
                 // res.send({ message: "User was registered successfully!" });
                });
              });
            } else {
              // user role = 1
              user.setRoles([2]).then(() => {
                console.log("User was registered successfully!")

             //   res.send({ message: "User was registered successfully!" });
              });
            }
            return res.json({
              success: true,
              message: user,
              message: 'Signup success'
            });
          }
        });
}

/***************************************************************************** */

exports.signinController = (req, res) => {

  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  }
    else{

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
        if (!user) {
          return res.status(400).json({
            errors: 'User with that email does not exist. Please signup'
          });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(400).json({
          errors: 'Email and password do not match'
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

  }


  /*
  const { email, password } = req.body;
  var authorities = [];
  var allRoles =[]

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    // check if user exist
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(( user) => {
      if (!user) {
        return res.status(400).json({
          errors: 'User with that email does not exist. Please signup'
        });
      }

      var passwordIsValid = bcrypt.compareSync(
        password,
        user.password
      );
      // authenticate

      if (!passwordIsValid ){
        return res.status(400).json({
          errors: 'Email and password do not match'
        });
      }
      // generate a token and send to client

      const token = jwt.sign(
        {
          id: user.id
        },
        config.JWT_SECRET,
        {
          expiresIn: '7d'
        }
      );
      user.getRoles().then(roles => {
         console.log("this is length of roles ", roles.length);
        for (let i = 0; i < roles.length; i++) {
          console.log("this is roles[i]", roles[i].name)
          console.log("ROLE_" + roles[i].name.toUpperCase())
           authorities.push("ROLE_" + roles[i].name.toUpperCase());
          console.log ("all authoriries", authorities )
      }
      console.log("authorities",authorities)
      allRoles = authorities;
      console.log(allRoles);
    } )
      const { id, username, email } = user;

      return res.json({
        id,
        username,
        email,
        roles: authorities,
        token:token
      });
    });
  }*/


};
/*
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET // req.user._id
});*/
/*
exports.adminMiddleware = (req, res, next) => {
  User.findById({
    _id: req.user._id
  }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found'
      });
    }

    if (user.role !== 'admin') {
      return res.status(400).json({
        error: 'Admin resource. Access denied.'
      });
    }

    req.profile = user;
    next();
  });
};
*/
exports.forgotPasswordController = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'sedkolod71',
      pass: 20257253
    }
  });
  const { email } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    User.findOne({
        where: {
          email: req.body.email
        }
    }).then((user)=>{
        if (!user) {
          return res.status(400).json({
            error: 'User with that email does not exist'
          });
        }

        const token = jwt.sign(
          {
            id: user.id
          },
          config.JWT_RESET_PASSWORD,
          {
            expiresIn: '20m'
          }
        );
        const emailData = {
          from: 'sedkolod71@gmail.com',
          to: email,
          subject: `Password Reset link`,
          html: `
                    <h1>Please use the following link to reset your password</h1>
                    <p>${config.CLIENT_URL}/users/password/reset/${token}</p>
                    <hr />
                    <p>This email may contain sensetive information</p>
                    <p>${config.CLIENT_URL}</p>
                `
        };
         user.update({  resetPasswordLink: token
          }).then((data)=>{
            if (!data) {
              console.log('RESET PASSWORD LINK ERROR', err);
              return res.status(400).json({
                error:
                  'Database connection error on user password forgot request'
              });
            } else {
              const sendEmail = async () => {
                try {
                  const info = await transporter.sendMail(emailData);
                  console.log("Email sent", info.response);
                   return res.json({
                    message: `Email has been sent to ${email}. Follow the instruction to activate your account`
                  });
                } catch (err) {
                  console.log(err);
                  return res.json({
                    message: err.message
                  });                }
              };
              sendEmail();
            }
          })
      }
    );
  }
};
/****************************************************************************/

exports.resetPasswordController = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;
  console.log(req.body);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    if (resetPasswordLink) {
      jwt.verify(resetPasswordLink, config.JWT_RESET_PASSWORD, function(
        err,
        decoded
      ) {
        if (err) {
          return res.status(400).json({
            error: 'Expired link. Try again'
          });
        }
        User.findOne(
          {
            where: {
              resetPasswordLink:req.body.resetPasswordLink
            }
          }).then((user) => {
            console.log("this is user",user)
            if ( !user) {
              return res.status(400).json({
                error: 'Something went wrong. Try later'
              });
            }
            /*
            const user1 = new User({
              username:user.username,
              email:user.email,
              password:bcrypt.hashSync(newPassword, 8),
              resetPasswordLink: ''
            });
            */
            console.log("this is user" ,user);
            const updatedFields = {
              password: bcrypt.hashSync(newPassword, 8),
              resetPasswordLink: ''
            };
            console.log(newPassword);
            console.log(updatedFields);
            
            user.update( {
              password: bcrypt.hashSync(newPassword, 8),
              resetPasswordLink: ''
            }).then((result)=>{
           // user.update({updatedFields}).then((result)=>{
              console.log("new user", result);
          // user = _.extend(user, updatedFields);
        //    user.save(({updatedFields}) => {
              if (!result) {
                return res.status(400).json({
                  error: 'Error resetting user password'
                });
              }
              res.json({
                message: `Great! Now you can login with your new password`
              });
            });
          }
        );
      });
    }
  }
};






















/*const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([2]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

*/