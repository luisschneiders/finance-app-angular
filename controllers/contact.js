const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: process.env.MAILGUN_USERNAME,
    pass: process.env.MAILGUN_PASSWORD
  }
});

/**
 * GET /contact
 */
exports.contactGet = function(req, res) {
  res.render('contact', {
    title: 'Contact'
  });
};

/**
 * POST /contact
 */
exports.contactPost = function(req, res) {
  req.assert('name', 'Name cannot be blank').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.assert('message', 'Message cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  let errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  let mailOptions = {
    from: req.body.name + ' ' + '<'+ req.body.email + '>',
    to: 'schneiders.tech@gmail.com',
    subject: '✔ Contact Form | Finance - Angular',
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(err) {
    res.send({ msg: 'Thank you! Your feedback has been submitted.' });
  });
};
