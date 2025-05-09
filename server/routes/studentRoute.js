const student_ctrl = require('../controller/student_ctrl')
const { body } = require('express-validator')
const { major } = require('../models')

module.exports = (app) => {
    const router = app.Router()

    router.get("", student_ctrl.index)
    router.get("/:id", student_ctrl.detail) 
    // router.post('/',  [
    //     body('firstName').notEmpty(),
    //     body('lastName').notEmpty(),
    //     body('classes').notEmpty().custom(async (values) => {
    //         const classValue = ["X", "XI", "XII", "XII"]
    //         const isValid = classValue.includes(values)

    //         if (!isValid) {
    //             throw new Error('classes is not registered!');
    //         }
    //     }),
    //     body('major_id').notEmpty().custom(async (values) => {
    //         const majorData = await major.findByPk(values)
    //         console.log(!!majorData)
    //         if (!!majorData == false) {
    //             throw new Error('major is not registered!');
    //         }
    //     }),
    //     body('gender').notEmpty().custom(async (values) => {
    //         const genderList = ["M", "F"]
    //         const isValid = genderList.includes(values)

    //         if (!isValid) {
    //             throw new Error('gender is not registered!');
    //         }
    //     }),
    // ], student_ctrl.save)
    
    // router.put("/:id", [
    //     body('firstName').notEmpty(),
    //     body('lastName').notEmpty(),
    //     body('classes').notEmpty().custom(async (values) => {
    //         const classValue = ["X", "XI", "XII", "XII"]
    //         const isValid = classValue.includes(values)

    //         if (!isValid) {
    //             throw new Error('classes is not registered!');
    //         }
    //     }),
    //     body('major_id').notEmpty().custom(async (values) => {
    //         const majorData = await major.findByPk(values)
    //         console.log(!!majorData)
    //         if (!!majorData == false) {
    //             throw new Error('major is not registered!');
    //         }
    //     }),
    //     body('gender').notEmpty().custom(async (values) => {
    //         const genderList = ["M", "F"]
    //         const isValid = genderList.includes(values)

    //         if (!isValid) {
    //             throw new Error('gender is not registered!');
    //         }
    //     }),
    // ], student_ctrl.update)
    router.delete("/:id", student_ctrl.destroy)

    return router
}