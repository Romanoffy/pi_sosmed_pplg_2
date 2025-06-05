const { post } = require('../models')
const { validationResult } = require('express-validator')

let self = {}

self.save = async (req, res) => {
    const error = validationResult(_)
    if (!error.isEmpty()){
        return res.status(422).json(error)
    }
    await post.create({
        content_text: req.body.content_text,
        user_id: req.user?.data?.id,
    })
    return res.status(201).json({
        message: "Post created succesfully"
    })
}

self.index = async (_, res) => {
    const error = validationResult(_)
    if (!error.isEmpty()){
        return res.status(422).json(error)
    }

    let data = await postMessage.findAll()
    // await postMessage.create ({
    //     content_text: req.body.content_text,
    //     content_text: req.body.content_image,
    //     user_id: req.user,
    // })

    return res.status(200).json({
        data: data,
        message: "Post created succesfully"
    })
}

module.exports = self