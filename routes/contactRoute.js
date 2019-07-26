const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');
// const {validationResult} = require('express-validator');
//
// const Cat = require('../models/Cat');

/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// 'use strict';


// @route GET api/contact
//@desc Contact page using email
//@access Public
router.get('/contact', async (req, res) => {
    {
        // const functions = require('firebase-functions');
         const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
        const gmailEmail = process.env.gmail.email;
        const gmailPassword = process.env.gmail.password;
        const mailTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmailEmail,
                pass: gmailPassword,
            },
        });

// Sends an email to my inbox if someone uses the contact form on my website.
        exports.sendemail = process.env.https.onRequest(async (req, res) => {
            console.log("got request" + req.body);
            const mailOptions = {
                from: gmailEmail,
                to: gmailEmail,
            };

            // Building Email message.
            mailOptions.subject = req.body.subject;
            mailOptions.text = req.body.firstname + " " + req.body.lastname + " " + req.body.email + " " + req.body.text;

            try {
                await mailTransport.sendMail(mailOptions);
                console.log(`Email sent to`, gmailEmail);
            } catch (error) {
                console.error('There was an error while sending the email:', error);
            }
            res.status(200).end();
            return null;
        });
    }
});

