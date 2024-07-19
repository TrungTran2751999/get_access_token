const {JWT} = require("google-auth-library")
const axios = require("axios")
// const fs = require("fs")
const SERVICE_ACCOUNT_FILE = "./token.json"
const serviceAccount = require(SERVICE_ACCOUNT_FILE)
const SCOPE = ["https://www.googleapis.com/auth/firebase.messaging"]
const client = new JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: SCOPE
})
async function getAccesstoken(){
    const token = await client.authorize();
    console.log(token.access_token);
    console.log(serviceAccount.client_email)
    return token.access_token
}
console.log("dasdasd")
getAccesstoken()