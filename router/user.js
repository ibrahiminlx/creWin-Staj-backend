const express = require("express")
const router = express.Router()
const usersJson = require("../json/users2.json")


router.get("/users",(req, res) => {
    res.json(usersJson)
})
router.get("/users/:id",(req, res) => {
    const {id}=req.params
    const json=usersJson.filter((item)=>Number(id)===item.id)
    res.json(json)

})



module.exports = {
    user:router
}