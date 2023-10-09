const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const sendMsgToOpenAI = async (message) => {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  });
  return chatCompletion.choices[0].message.content;
};
export default sendMsgToOpenAI;
