import { longPasswords } from "./imperative_vs_declarative";

test("it returns passwords with a length greater than 9", () => {
  const passwords = [
    "password123",
    "i_love_coding",
    "password",
    "iforgotagain",
  ];
  expect(longPasswords(passwords)).toStrictEqual([
    "password123",
    "i_love_coding",
    "iforgotagain",
  ]);
});

// test("it does return passwords if all passwords length is not greater than 9", () => {

// });
