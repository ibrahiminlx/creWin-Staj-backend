const express = require("express")
const app = express()
const router = require("./router/index")
const cors=require("cors")
const helmet=require("helmet")





app.use(cors())
app.use(helmet())
app.use(router.userRouter.user)
app.use(router.postRouter.post)




app.use(express.urlencoded())
app.listen(3001,()=>{
    console.log("3001 online")
})