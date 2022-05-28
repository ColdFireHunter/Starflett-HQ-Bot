require("dotenv").config()
const fs = require("fs")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v10")
const { version } = require("os")
const commands = []


const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))

commandFiles.forEach(commandFile =>{
    const command = require(`./commands/${commandFile}`)
    commands.push(command.data.toJson())
})

const restClient = new REST({version: "10"}).setToken(process.env.DISCORD_BOT_TOKEN)

restClient.put(Routes.applicationGuildCommands(process.env.DISSCORD_APPLICATION_ID, process.nextTick.DISCORD_GUILD_ID))