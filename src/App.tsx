import { useState } from "react";
import { Button } from "react-aria-components";

const buttonRendered = [
  "AC",
  "(",
  ")",
  "DEL",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "%",
  "+",
];

function App() {
  const [value, setValue] = useState<string | null>("");

  function evaluateExpression() {
    try {
      if (value) {
        const formattedValue = value.replace(/%/g, " % ");
        const result = eval(formattedValue);
        setValue(result.toString());
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setValue("Error");
    }
  }

  function isOperator(char: string) {
    return ["+", "-", "*", "/", "%"].includes(char);
  }

  function buttonPressHandler(inputted: string) {
    if (inputted === "=") {
      evaluateExpression();
    } else if (inputted === "AC") {
      setValue("");
    } else if (inputted === "DEL") {
      setValue(value!.substring(0, value!.length - 1));
    } else if (isOperator(inputted)) {
      if (value === "" && inputted === "-") {
        setValue(inputted);
      } else if (isOperator(value!.slice(-1))) {
        setValue(value!.slice(0, -1) + inputted);
      } else {
        setValue(value + inputted);
      }
    } else {
      setValue(value + inputted);
    }
  }

  return (
    <>
      {/* The display */}
      <div className="bg-grape-8 p-3 text-end text-xl">{value || 0}</div>

      {/* The buttons */}
      <div className="grid grid-cols-4 gap-3 bg-grape-8 p-3">
        {buttonRendered.map((el) => (
          <Button
            key={el}
            className="bg-grape-7 px-4 py-3 outline-none active:shadow-inner active:shadow-black hover:shadow-black hover:shadow-sm"
            onPress={() => buttonPressHandler(el)}
          >
            {el}
          </Button>
        ))}
        <Button
          onPress={() => buttonPressHandler("=")}
          className="bg-grape-7 px-4 py-3 outline-none active:shadow-inner active:shadow-black hover:shadow-black hover:shadow-sm col-span-full"
        >
          =
        </Button>
      </div>
    </>
  );
}

export default App;
