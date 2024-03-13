"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
// Function to read JSON files
const readJsonFile = (fileName) => {
    try {
        const filePath = path_1.default.join(__dirname, 'json', `${fileName}.json`);
        const jsonData = fs_1.default.readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonData);
    }
    catch (error) {
        console.error(`Error reading JSON file ${fileName}:`, error);
        return null;
    }
};
// Route to serve answers
router.get('/answers', (req, res) => {
    const answersData = readJsonFile('answers');
    if (answersData) {
        res.json(answersData);
    }
    else {
        res.status(500).json({ error: 'Failed to load answers data' });
    }
});
// Route to serve questions
router.get('/questions', (req, res) => {
    const questionsData = readJsonFile('questions');
    if (questionsData) {
        res.json(questionsData);
    }
    else {
        res.status(500).json({ error: 'Failed to load questions data' });
    }
});
exports.default = router;
