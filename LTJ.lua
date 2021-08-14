-- Run this code to Convert the Items and Desc to JSON Format
local json = require ("res/dkjson")
local items = require ("luaFiles/items")
local itemDesc = require ("luaFiles/item_descriptions")
local jobs = require ("luaFiles/jobs")
local slots = require ("luaFiles/slots")

local itemsJson = json.encode (items, { indent = true })
file = io.open("jsonFiles/items.json", "w")
file:write(itemsJson)
file:close()

local itemDescJson = json.encode (itemDesc, { indent = true })
file = io.open("jsonFiles/item_descriptions.json", "w")
file:write(itemDescJson)
file:close()

local jobsJson = json.encode (jobs, { indent = true })
file = io.open("jsonFiles/jobs.json", "w")
file:write(jobsJson)
file:close()

local slotsJson = json.encode (slots, { indent = true })
file = io.open("jsonFiles/slots.json", "w")
file:write(slotsJson)
file:close()

