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

  test("renders a list of events matching the city selected by the user", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector("#city-search");
    const CitySearchInput = within(CitySearchDOM).queryByRole("textbox");

    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(CitySearchDOM).queryByText("Berlin, Germany");
    await user.click(berlinSuggestionItem);

    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderedEventItems = within(EventListDOM).queryAllByRole("listitem");

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(event => event.location === "Berlin, Germany");

    expect(allRenderedEventItems.length).toBe(berlinEvents.length);

    allRenderedEventItems.forEach(event => {
      expect(event.textContent).toContain("Berlin, Germany");
    });
  });

  test("renders the number of events inputted by the user", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    
    const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
    const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole("textbox");
    
    await user.type(NumberOfEventsInput, "{backspace}{backspace}10");
    
    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderedEventItems = within(EventListDOM).queryAllByRole("listitem");
    
    expect(allRenderedEventItems.length).toEqual(10);
  });
});