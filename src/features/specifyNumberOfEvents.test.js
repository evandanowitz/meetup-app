import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, test => {
  
  // Feature 3, Scenario 1
  test("When user has not specified a number, 32 events are shown by default.", ({ given, when, then }) => {
    let AppComponent;

    given("the user has not typed a specific number of events to be displayed", () => {
      AppComponent = render(<App />);
    });

    when("the user is viewing the list of events", () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      expect(EventListDOM).toBeInTheDocument();
    });

    then(/^(\d+) events should be displayed by default$/, async (arg0) => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  // Feature 3, Scenario 2
  test("User can change the number of events displayed.", ({ given, when, then }) => {
    let AppComponent;

    given("the user typed a specific number of events to be displayed", async () => {
      const user = userEvent.setup();
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
      const numberInput = NumberOfEventsDOM.querySelector(".number-of-events-input");
      await user.type(numberInput, "{backspace}{backspace}10");
    });

    when("the user is viewing the list of events", () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      expect(EventListDOM).toBeInTheDocument();
    });

    then("the exact number of events that the user specified should be displayed", () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      const allRenderedItems = within(EventListDOM).queryAllByRole("listitem");
      expect(allRenderedItems.length).toBe(10);
    });
  });
});