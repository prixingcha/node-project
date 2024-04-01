"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ollama_1 = require("ollama");
var schema = {
    city: {
        type: "string",
        description: "The city where the user is located.",
    },
    industry: {
        type: "string",
        description: "The most popular industry in the city. What the city is known for.",
    },
    fun: {
        type: "string",
        description: "One thing that is fun to do there on a day off",
    },
};
var msgs = [
    {
        role: "system",
        content: "The user will give you a city name. Describe the city including the major industry and a fun thing to do there. Output as JSON using this schema: ".concat(JSON.stringify(schema, null, 2)),
    },
    { role: "user", content: "Paris" },
    {
        role: "assistant",
        content: '{\n  "city": "Paris",\n  "industry": "Fashion",\n  "fun": "Take a stroll along the Seine River and enjoy the city\'s iconic landmarks while aboard a river cruise."\n}',
    },
    { role: "user", content: "Amsterdam" },
];
var output = await ollama_1.default.chat({ model: "llama2", messages: msgs });
console.log(output.message.content);
