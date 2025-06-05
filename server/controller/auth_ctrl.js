const { validationResult } = require('express-validator')
const { user, student, student_user, role, role_user} = require("../models")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
let self = {}

self.login = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }

    const options = {
        expiresIn: '24h'
    };

   const userData = await user.findOne({
       where: {
           username: req.body.username
        },
        include: [
            { model: role },
            { model: student },
        ],
        attributes: ["id", "username", "email", "password"]
    })

    const secret = "PI_JAYA_JAYA_JAYA"

    const token = jwt.sign({
       data: {
            id: userData?.id,
            username: userData?.username,
            email: userData?.email,
            student: userData?.roles[0],
            role: userData?.roles[0].role_name
        },
    }, secret, options)

    res.status(200).json({
        message: "login success!",
        token: token
    })
}
self.save = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(422).json(error)
    }
try {
    const {
        username,
        email,
        password,
        firstName,
        lastName,
        classes,
        major_id,
        gender
    } = req.body

    const passwordHash = await bcryptjs.hash(password, 10)

    const userData = await user.create ({
        username : username,
        email: email,
        password: passwordHash
    })
    const studentData = await student.create({
        firstName: firstName,
        lastName: lastName,
        classes: classes,
        gender: gender,
        major_id: major_id
    })
    await student_user.create({
        user_id: userData.id,
        student_id: studentData.id
    })
    const roleUserRegister = await role.findOne({
        where: {
            role_name: "Student"
        },
        attributes: ["id"]
    })
    await role_user.create({
        user_id: userData.id,
        role_id: roleUserRegister.id
    })


    res.status(201).send({ message: 'Register Success!!' })
    } catch (error) {
    res.status(500).json(error)
    }

    
}


module.exports = self