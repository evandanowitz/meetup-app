import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import Event from "../components/Event";
import { getEvents } from "../api.js";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, test => {
  
  // Feature 2, Scenario 1
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;
    
    given("the user is logged into the app", () => {
      AppComponent = render(<App />);
    });
    
    when("the app displays the events list", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
    
    then("the event element should be collapsed by default, displaying limited event details", () => {
      const EventDOM = AppComponent.container.firstChild;
      const eventDetails = EventDOM.querySelector(".details")
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  // Feature 2, Scenario 2
  test("User can expand an event to see details.", ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    
    given("the user is viewing a collapsed event", async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      expect(EventComponent.container.querySelector(".event")).toBeInTheDocument();
      expect(EventComponent.container.querySelector(".details")).not.toBeInTheDocument();
    });
    
    when(/^the user clicks the "(.*)" button on an event$/, async (arg0) => {
      const user = userEvent.setup();
      const showDetailsBtn = EventComponent.container.querySelector(".details-btn");
      await user.click(showDetailsBtn);
    });

    then("the event should expand, revealing additional details for that event", async () => {
      expect(EventComponent.container.querySelector(".details")).toBeInTheDocument();
    });
  });

  // Feature 2, Scenario 3
  test("User can collapse an event to hide details.", ({ given, when, then }) => {
    let EventComponent;
    let allEvents;

    given("the user is viewing an event displaying additional details", async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const user = userEvent.setup();
      const showDetailsBtn = EventComponent.container.querySelector(".details-btn");
      await user.click(showDetailsBtn)
      expect(EventComponent.container.querySelector(".details")).toBeInTheDocument();
    });

    when(/^the user clicks the "(.*)" button on an event$/, async (arg0) => {
      const user = userEvent.setup();
      const hideDetailsBtn = EventComponent.container.querySelector(".details-btn");
      await user.click(hideDetailsBtn);
    });

    then("the expanded event should collapse, hiding additional details for that event", async () => {
      expect(EventComponent.container.querySelector(".details")).not.toBeInTheDocument();
    });
  });
});