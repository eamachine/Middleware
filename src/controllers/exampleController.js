import {Rest} from 'express-restful-es6';
import Example from '../models/example';

@Rest('/examples/example/')
class exampleController {

  constructor() {
    this.examples = [];

    const fs = require("fs");
    // Get content from file
    const contents = fs.readFileSync("./data/data.json");
    // Define to JSON type
    const jsonContent = JSON.parse(contents);

    for (var key in jsonContent) {
      if (jsonContent.hasOwnProperty(key)) {
        const example = Object.assign(new Example, jsonContent[key]);
        this.examples.push(example);
      }
    }
  }

  get(name, stars) {
    return this.examples;
  }
}
