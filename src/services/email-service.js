'use strict';
var config = require('../config');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendgridKey);
exports.send = async (to, subject, body) => {
    sgMail.send({
        to: to,
        from: 'jefersonsilvasantos_@hotmail.com',
        subject: subject,
        html: body,
    });

}