// const greeting = require("./template_literals");
import { greeting } from "./template_literals";

test('it returns the string "Hello Jimbob! It is now Tuesday"', () => {
  expect(greeting("Jimbob", "Tuesday")).toBe("Hello Jimbob! It is now Tuesday");
});

test('it return the string "Hello Hitendra! It is now Wednesday"', () => {
  expect(greeting("Hitendra", "Wednesday")).toBe("Hello Hitendra! It is now Wednesday");
});

