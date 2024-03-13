"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processAnswerData = exports.processLocationData = exports.processData = void 0;
function processData(answersData) {
    const transformedArray = [];
    answersData.forEach(obj => {
        if (obj.questionIndex === 0) {
            transformedArray.push({
                submissionId: obj.submissionId,
                age: obj.answer,
                other: obj.other,
                otherField: obj.otherField,
                survey: obj.survey
            });
        }
        else if (obj.questionIndex === 1) {
            const matchingObj = transformedArray.find(item => item.submissionId === obj.submissionId);
            if (matchingObj) {
                matchingObj.gender = obj.answer;
            }
        }
    });
    return transformedArray;
}
exports.processData = processData;
function processLocationData(answersData) {
    const transformedArray = [];
    answersData.forEach(obj => {
        if (obj.questionIndex === 2) {
            transformedArray.push({
                submissionId: obj.submissionId,
                location: obj.answer,
                other: obj.other,
                otherField: obj.otherField,
                survey: obj.survey
            });
        }
    });
    return transformedArray;
}
exports.processLocationData = processLocationData;
function processAnswerData(answersData) {
    const transformedArray = [];
    answersData.forEach(obj => {
        if (obj.questionIndex === 3 && obj.answer !== '') {
            transformedArray.push({
                submissionId: obj.submissionId,
                answer: obj.answer,
                other: obj.other,
                otherField: obj.otherField,
                survey: obj.survey
            });
        }
    });
    return transformedArray;
}
exports.processAnswerData = processAnswerData;
