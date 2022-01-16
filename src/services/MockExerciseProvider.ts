import { ExerciseSingleChoice, SingleChoiceSentence, SingleChoiceAnswerable, SingleChoiceAnswer, Answerable, RefCoord, Answer } from "../models/ExerciseSingleChoice";

class DummyExerciseProvider {

    stringValues: String[] = [
        "Amy is always full ", " energy."
    ]

    singleChoice: SingleChoiceAnswerable[] = [
        {
            index: 0,
            type: "singleChoice",
            choices: ["of", "on"]
        }
    ]

    answers: SingleChoiceAnswer[] = [
        {
            type: "singleChoice",
            responseIndex: 0
        }
    ]


    singleChoiceSentence: SingleChoiceSentence = {
        number: 0,
        status: 0,
        begin: 0,
        refs: [
            this.stringValues,
            this.singleChoice
        ],
        answers: this.answers,
    }



    a = {
        "title": "Put in the correct preposition",
        "id": 90987890,
        "sentences": [
            this.singleChoiceSentence
        ]
    };
    public getExercise(): ExerciseSingleChoice {
        return this.a;
    }
}
export default DummyExerciseProvider;