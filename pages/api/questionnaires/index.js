const data = require("./questionnaires.json");

export default function getQuestionsAPI(req, res) {
  res.status(200).send(data);
}
