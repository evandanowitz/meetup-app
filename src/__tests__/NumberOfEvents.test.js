import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents 
      setCurrentNOE={() => {}} 
      setErrorAlert={() => {}}
    />);
  });
  
  test("NumberOfEvents component contains an element with the role of the textbox", () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
  });

  test("default value of the input field for number of events should be 32", () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberTextBox).toHaveValue("32");
  });
  
  test("value of 'NumberOfEvents' component changes accordingly when user .type()s", async () => {
    const user = userEvent.setup();
    const numberInput = NumberOfEventsComponent.queryByRole("textbox");
    await user.type(numberInput, "{backspace}{backspace}10");
    expect(numberInput).toHaveValue("10");
  });
});