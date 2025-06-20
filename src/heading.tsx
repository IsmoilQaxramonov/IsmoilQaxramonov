import { useState } from "react";
import { InputCheck } from "./components/checkbox";
import { Slider } from "./components/slider";
import { GetLetters } from "./utils/get-letters";
import { GetCharacters } from "./utils/get-characters";
import { GetNumbers } from "./utils/get-numbers";

export const Heading = () => {
  const [value, setValue] = useState(1);
  const numbers = GetNumbers();
  const characters = GetCharacters();
  const letters = GetLetters();
  const allCharacters = [...numbers, ...characters, ...letters];

  const getRandomPassword = (length: number, chars: string[]): string[] => {
    const result: string[] = [];
    while (result.length < length) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result.push(chars[randomIndex]);
    }
    return result;
  };

  const [password, setPassword] = useState(getRandomPassword(value, allCharacters));

  const handleRefresh = () => {
    const passwordValue = getRandomPassword(value, allCharacters);
    setPassword(passwordValue);
  };

  const handleClick = (values: string[]) => {
    console.log("value =", values.join(""));
  };

  return (
    <div className="flex flex-col gap-5 items-center bg-white p-10 rounded-3xl">
      <div className="bg-gray-100 rounded-2xl p-5 flex items-center justify-between gap-5 w-[500px]">
        <p className="text-2xl font-semibold overflow-hidden">{password.join("")}</p>
        <button className="cursor-pointer" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Slider value={value} setValue={setValue} />
        <InputCheck />
      </div>
      <button
        onClick={() => handleClick(password)}
        className="bg-red-500 py-2 px-5 cursor-pointer text-white rounded font-semibold active:scale-95"
      >
        Copy Password
      </button>
    </div>
  );
};
