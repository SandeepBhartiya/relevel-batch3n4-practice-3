if(process.NODE_ENV!="production")
{
    require("dotenv").config()
}

module.exports={
    secretKey:process.env.secretKey
}