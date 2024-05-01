import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  })
  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  })

  test("render element for event's title", () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });  
  test("render element for event's start time", () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });
  test("render element for event's location", () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });
  test("render element for event's 'Show Details' button", () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });
  test("event details should be hidden by default", () => {
    expect(EventComponent.container.querySelector(".details")).not.toBeInTheDocument();
  });  
  test("render event details when user clicks on the 'Show Details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByRole("button");
    await user.click(button, "Show Details");
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });
  test("hide event details when user clicks on the 'Hide Details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByRole("button");
    const details = EventComponent.container.querySelector(".details");
    await user.click(button, "Hide Details");
    expect(details).not.toBeInTheDocument();
  });
});