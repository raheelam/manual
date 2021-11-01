const data = require("./questionnaires.json");

export function getQuestions() {
  return data;
}

export default function getQuestionsAPI(req, res) {
  res.status(200).send(data);
}
