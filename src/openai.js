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
