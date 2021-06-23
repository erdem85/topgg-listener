const Topgg = require(`@top-gg/sdk`)
const api = new Topgg.Api(process.env["TOPGG_API_TOKEN"])
const {WebhookClient} = require("discord.js")
const hook = new WebhookClient(process.env["DISCORD_WEBHOOK_ID"], process.env["DISCORD_WEBHOOK_TOKEN"])
const db = require("quick.db");
const CronJob = require("cron").CronJob;

const express = require("express")
const app = express()
const webhook = new Topgg.Webhook(process.env["TOPGG_WEBHOOK_PASS"])

app.post("/dblwebhook", webhook.listener(vote => {
    if(!db.get("votes").includes(vote.user)) db.push("votes", vote.user)
    hook.send(`<@${vote.user}> just voted! Thank you for your support!`);
}))

job = new CronJob("0 */5 * * * *", async function(){
    users = db.get("votes")
    newusers = [];
    for(let x = 0; x < users.length;x++){
        user = users[x]
        voted = await api.hasVoted(user)
        if(!voted){
            hook.send(`<@${user}> your vote for our bot expired.`)
        }else{
            newusers.push(user)
        }
    }
    db.set("votes", newusers)
});
job.start();

app.listen(3000)