const OpenAI = require("openai");
const Configuration = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI(configuration);

async function gpt(input) {

  const stream = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: input,
    max_tokens: 1000,
    stream: true,
  });

  let response = [];

  for await (const chunk of stream) {
    response.push(chunk.choices[0].text)
  }
  let concatRes =  response.join()
  let stringWithoutCommas = concatRes.replace(/,/g, '');
  console.log(stringWithoutCommas)
  return stringWithoutCommas;

}


module.exports = gpt;