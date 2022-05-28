require("dotenv").config()
const { Client } = require("discord.js")
const cli = require("nodemon/lib/cli")

const client = new Client({intents:[]})

client.once("ready",() => {
    console.log(`Ready! Logged in as ${client.user.tag}! I'm on ${client.guilds.cache.size} guild(s)! `)
    client.user.setActivity({name: "Klingonischer Oper", type: "LISTENING"})
})

client.login(process.env.DISCORD_BOT_TOKEN)
