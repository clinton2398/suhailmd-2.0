const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'recording ' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_36_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNixcbiAgICAgICAgMjM4LFxuICAgICAgICA0NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MCxcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc1LFxuICAgICAgICA3MixcbiAgICAgICAgMTkwLFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA4OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDc5LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVDcwZloraXBuYThmajVJUFVtSUNDRCtZS0E0a0ZiRzBSUFN5cUZySUViYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ3dYWVVJTXlTMy1CYVdlemJIWGhWd1wiLFxuICBcInBob25lSWRcIjogXCJjNWY4ZmEzNC02NDI2LTQ2NGMtYTQ5OS04Yjk0NDZkZWFjMWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMzMsXG4gICAgICA2MSxcbiAgICAgIDg3LFxuICAgICAgMTMwLFxuICAgICAgMTY4LFxuICAgICAgMTQzLFxuICAgICAgMTA3LFxuICAgICAgMTE4LFxuICAgICAgOTgsXG4gICAgICAxOTYsXG4gICAgICAxNSxcbiAgICAgIDczLFxuICAgICAgMjQzLFxuICAgICAgMjA4LFxuICAgICAgMTk5LFxuICAgICAgMTA4LFxuICAgICAgMTk2LFxuICAgICAgMjIsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDY2LFxuICAgICAgNDksXG4gICAgICA0NyxcbiAgICAgIDIzMixcbiAgICAgIDEwMyxcbiAgICAgIDIyOCxcbiAgICAgIDMsXG4gICAgICAxMSxcbiAgICAgIDIyMixcbiAgICAgIDEyLFxuICAgICAgMzksXG4gICAgICAxOTQsXG4gICAgICA2NyxcbiAgICAgIDE2MixcbiAgICAgIDg4LFxuICAgICAgMTk1LFxuICAgICAgMTIwLFxuICAgICAgMTkzLFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYVzVHUjFaVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzAwODE5ODI0OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ2xpc2hcIixcbiAgICBcImxpZFwiOiBcIjE4MDY4MTEzNzE5NzE3MTozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPMkd3cDhHRU4vbW5yc0dHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImt2cktNWUFWdG1WZ1VPc3ByZWhaRU9OTFdzK3pPOW5yQXdMQnFpWDY2azA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQW1oNGxkM0NXOEZINjBJMEFvMzRUTGxEdDhxYkQ3YXVZWVYva2hvb2p4TWZQSVJKVEltU0tlLy8rM3ZlbEZGQlpJQUtjaVlrZVFOSWhiajAvQ1pnQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidnI3bm1hUnF6RzRERGxsMmFPaUNLNlUrdHRGZG1xRXZnczh6eGdEcFhRbFB2cDc5OTZqT3RmMnJwSWVSYUlzMmZBY2lsWHozK0ZueS9EK0VPR2JWQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzAwODE5ODI0OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ4NDkzNzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "clish-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
