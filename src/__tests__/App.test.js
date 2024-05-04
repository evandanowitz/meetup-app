import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api.js";
import App from "../App";

describe("<App /> component", () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test("render 'EventList' component", () => {
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });

  test("render 'CitySearch' component", () => {
    expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
  });

  test("render 'NumberOfEvents' component", () => {
    expect(AppDOM.querySelector("#number-of-events")).toBeInTheDocument();
  });
});

describe("<App /> integration", () => {
  // This test ensures that the number of rendered events in the UI equals the number of events located in "Berlin, Germany".
  test("renders a list of events matching the city selected by the user", async () => {
    // userEvent is set and the App component and its DOM are mocked
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    // A reference to the CitySearch component root DOM node is initialized, then a query is performed to find the city input text box in it.
    const CitySearchDOM = AppDOM.querySelector("#city-search");
    const CitySearchInput = within(CitySearchDOM).queryByRole("textbox");

    // Simulates typing "Berlin" in the city textbox and then clicking on the list item that contains "Berlin, Germany".
    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(CitySearchDOM).queryByText("Berlin, Germany");
    await user.click(berlinSuggestionItem);

    // This code queries #event-list (the EventList component root node DOM), and finds what Event list item is rendered inside it.
    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderedEventItems = within(EventListDOM).queryAllByRole("listitem");

    // Gets a list of all events from the mock data that are located in "Berlin, Germany".
    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(event => event.location === "Berlin, Germany");

    // Comparing the number of events located in "Berlin, Germany" with the array of rendered Event list items, epecting them to have the same length.
    expect(allRenderedEventItems.length).toBe(berlinEvents.length);

    // Loops over the filtered event list items with "allRenderedEventItems". With this, you can then make sure that all of the items contain the text "Berlin, Germany".
    allRenderedEventItems.forEach(event => {
      expect(event.textContent).toContain("Berlin, Germany");
    });
  });
});