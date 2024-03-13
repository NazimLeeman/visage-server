import { Router } from "express";
import fs from "fs";
import path from "path";
import { processAnswerData, processData, processLocationData } from "./utils";

const router = Router();

const readJsonFile = (fileName) => {
  try {
    const filePath = path.join(__dirname, 'json', `${fileName}.json`);
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error(`Error reading JSON file ${fileName}:`, error);
    return null;
  }
};

router.get('/answers', (req, res) => {
  const answersData = readJsonFile('answers');
  if (answersData) {
    res.json(answersData);
  } else {
    res.status(500).json({ error: 'Failed to load answers data' });
  }
});

router.get('/questions', (req, res) => {
  const questionsData = readJsonFile('questions');
  if (questionsData) {
    res.json(questionsData);
  } else {
    res.status(500).json({ error: 'Failed to load questions data' });
  }
});

router.get('/age', (req, res) => {
  const questionsData = readJsonFile('questions');
  const answersData = readJsonFile('answers');

  if (!questionsData || !answersData) {
    return res.status(500).json({ error: 'Failed to load data' });
  }

  const aggregatedData = processData( answersData);

  res.json(aggregatedData);
});



router.get('/location', (req, res) => {
  const questionsData = readJsonFile('questions');
  const answersData = readJsonFile('answers');

  if (!questionsData || !answersData) {
    return res.status(500).json({ error: 'Failed to load data' });
  }

  const aggregatedData = processLocationData( answersData);

  res.json(aggregatedData);
});


router.get('/answer', (req, res) => {
  const questionsData = readJsonFile('questions');
  const answersData = readJsonFile('answers');

  if (!questionsData || !answersData) {
    return res.status(500).json({ error: 'Failed to load data' });
  }

  const aggregatedData = processAnswerData( answersData);

  res.json(aggregatedData);
});




export default router;
