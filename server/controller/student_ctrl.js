const { validationResult } = require('express-validator')
const { student } = require('../models')

let self = {}

self.index = async (_, res) => {
    const data = await student.findAll()

    res.status(200).json({
        message: 'Student Data is founded!',
        data: data
    })
}

self.detail = async (req, res) => {
    const {id} = await req.params
    const data = await student.findByPk(id)

    res.status(200).json({
        message: 'Student Data is founded!',
        data: data
    })
}

self.save = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(422).json(error)
    }

    try {
        const {
            firstName,
            lastName,
            classes,
            major_id,
            gender
        } = req.body

        await student.create({
            firstName: firstName,
            lastName: lastName,
            classes: classes,
            major_id: major_id,
            gender: gender
        })

        res.status(201).json({
            message: 'The student has been registered succesfully!'
        })

    } catch (error) {
        res.status(500).send({
            message: 'Err',
            data: error
        })
    }
}

self.update = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(422).json(error)
    }

    try {
        const {
            firstName,
            lastName,
            classes,
            major_id,
            gender
        } = req.body

        const {id} = await req.params
        const data = await student.findByPk(id)

        data.update({
            firstName: firstName,
            lastName: lastName,
            classes: classes,
            major_id: major_id,
            gender: gender
        })

        res.status(201).json({
            message: 'The student has been updated succesfully!'
        })

    } catch (error) {
        res.status(500).json(error)
    }
}

self.destroy = async (req, res) => {
    try {
        const id = req.params.id
        const data = await student.findByPk(id)

        data.destroy()

        res.send({
            message: 'delete student success!',
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: 'Err',
            data: error
        })
    }
}

module.exports = self