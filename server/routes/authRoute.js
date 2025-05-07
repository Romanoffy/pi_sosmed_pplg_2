const { body } = require('express-validator')
const auth_ctrl = require('../controller/auth_ctrl')
const { major, user } = require('../models')

module.exports = (app) => {
    const router = app.Router()

    router.post('/register', 
        [
        body('username').notEmpty().isLength({ min: 6, max: 20 }).custom(async (values) => {
            let userData = await user.findOne({
                where: {
                    username: values
                }
            })

            if (userData) {
                throw new Error('username has been registered!');
            }
        }),
        body('email').notEmpty().isEmail().custom(async (values) => {
            let emailData = await user.findOne({
                where: {
                    email: values
                }
            })

            if (emailData) {
                throw new Error('Email has been registered!');
            }
        }),
        body('password').isLength({ min: 6, max: 100 }).notEmpty(),
        body('firstName').notEmpty(),
        body('lastName').notEmpty(),
        body('classes').notEmpty().custom(async (values) => {
            const classValue = ["X", "XI", "XII", "XII"]
            const isValid = classValue.includes(values)

            if (!isValid) {
                throw new Error('classes is not registered!');
            }
        }),
        body('gender').notEmpty().custom(async (values) => {
            const genderList = ["M", "F"]
            const isValid = await genderList.includes(values)

            if (!isValid) {
                throw new Error('gender is not registered!');
            }
        }),
        body('major_id').notEmpty().custom(async (values) => {
            const majorData = await major.findByPk(values)
            if (!!majorData == false) {
                throw new Error('major id is not registered!');
            }
        }),
    ],
    auth_ctrl.save)

    return router
}