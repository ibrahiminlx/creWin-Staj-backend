const express = require("express")
const router = express.Router()
const postJson = require("../json/post.json")


router.get("/post",(req, res) => {
    res.json(postJson)
})
router.get("/post/:id",(req, res) => {
    const {id}=req.params
    const json=postJson.filter((item)=>Number(id)===item.id)
    res.json(json)

})



module.exports = {
    post:router
}