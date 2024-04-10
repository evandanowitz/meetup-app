# EventHive (meetup-app)

## Description

**Meetup** is a serverless, progressive web application (PWA) built with React using a **test-driven development** (**TDD**) technique. The application uses the Google Calendar API to fetch upcoming events.

## Application Features

1. Filter events by city
2. Show/Hide Event Details
3. Specify Number of Events
4. Use the App When Offline
5. Add an App Shortcut to the Home Screen
6. Display Charts Visualizing Event Details

## User Stories and Scenarios (Gherkin)

**User Story**: As a user, I should be able to filter events by city, so that I can see a list of events taking place in that city.

- **Scenario 1**: When user hasn’t searched for a city, show upcoming events from all cities.
  - _Given_ user hasn’t searched for any city;
  - _When_ the user opens the app;
  - _Then_ the user should see a list of upcoming events
- **Scenario 2**: User should see a list of suggestions when they search for a city.
  - _Given_ the main page is open;
  - _When_ user starts typing in the city textbox
  - _Then_ the user should receive a list of cities (suggestions) that match what they’ve typed
- **Scenario 3**: User can select a city from the suggested list.
  - _Given_ user was typing “Fort Lauderdale” in the city textbox AND the list of suggested cities is showing;
  - _When_ the user selects a city (e.g., “Fort Lauderdale, Florida”) from the list;
  - _Then_ their city should be changed to that city (i.e., “Fort Lauderdale, Florida”) AND the user should receive a list of upcoming events in that city.

**User Story**: As a user, I should be able to show/hide event details with the click of a button, so that I can choose how much detail I want to see for each event

- **Scenario 1**: An event element is collapsed by default.
  - _Given_ user is logged into the meetup app and browsing events,
  - _When_ user views the event list,
  - _Then_ user expects the event elements to be collapsed by default, displaying limited information
- **Scenario 2**: User can expand an event to see details.
  - _Given_ that user is logged into the meetup app and browsing events,
  - _When_ user encounters a collapsed event element (default), and clicks the button to expand event details
  - _Then_ user expects the event element to expand, revealing additional information for that event
- **Scenario 3**: User can collapse an event to hide details.
  - _Given_ that user is viewing an expanded event element,
  - _When_ user clicks on the collapse button
  - _Then_ user expects the event element to collapse (back to default), showing less information

**User Story**: As a user, I should be able to specify the number of events displayed at once, so that I’m not overwhelmed by every event in my area displaying at once

- **Scenario 1**: When user hasn’t specified a number, 32 events are shown by default.
  - _Given_ user is logged into the meetup app
  - _When_ user views the events without specifying the number of events to display
  - _Then_ 32 events should be displayed by default
- **Scenario 2**: User can change the number of events displayed.
  - _Given_ user is logged into the meetup app
  - _When_ user chooses a certain number of events to be displayed at once from the dropdown menu
  - _Then_ the chosen number of events should be displayed on the screen

**User Story**: As a user, I should be able to use the app while offline, so that I can access previously saved data and information whether or not I have an internet connection

- **Scenario 1**: Show saved/cached data when there's no internet connection.
  - _Given_ the user has previously used the meetup app and is currently logged in
  - _When_ the user opens the app without an internet connection
  - _Then_ the app should still display previously saved data, event, and profile information
- **Scenario 2**: Show error when user changes search settings (city, number of events).
  - _Given_ the user is using the app without an internet connection
  - _When_ the user attempts to change their search settings
  - _Then_ the settings change should fail and the user should receive an error message indicating a failed attempt and that the user is offline

**User Story**: As a user, I should be able to add an app shortcut to my home screen, so that I can avoid having to navigate through menus and can access the app more easily

- **Scenario 1**: User can install the meetup app as a shortcut on their device's home screen.
  - _Given_ the meetup app is open
  - _When_ the user clicks the “Add Shortcut to Home Screen” button in their settings
  - _Then_ a shortcut to the app should be added to the home screen of the user’s device
- **Scenario 2**: User can uninstall the meetup app shortcut from their device's home screen
  - _Given_ the user has the meetup app installed on their device's home screen
  - _When_ the user long-presses the app icon on the home screen and clicks the “Remove from Home Screen” button
  - _Then_ the shortcut to the app should be removed from the home screen of the user’s device

**User Story**: As a user, I should be able to view charts that visualize event details, so that I can visually compare things like price, trends, attendance, etc.

- **Scenario 1**: Show a chart with the number of upcoming events in each city
  - _Given_ the user is viewing expanded event details
  - _When_ the user clicks the “Chart” section in the expanded view
  - _Then_ the user should see a chart displaying things like price, trends, attendance, etc.

## Access the Hosted Site

Click [here](https://evandanowitz.github.io/meetup/) to visit the application online.

## Technologies

- [React](https://react.dev/)
- Serverless: No backend maintenance, easy to scale, always available, no cost for idle time.
- PWAs: Instant loading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility.

## Dependencies

- @testing-library/jest-dom: ^5.17.0
- @testing-library/react: ^13.4.0
- @testing-library/user-event: ^13.5.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-scripts: 5.0.1
- web-vitals: ^2.1.4
- workbox-background-sync: ^6.6.0
- workbox-broadcast-update: ^6.6.0
- workbox-cacheable-response: ^6.6.0
- workbox-core: ^6.6.0
- workbox-expiration: ^6.6.0
- workbox-google-analytics: ^6.6.1
- workbox-navigation-preload: ^6.6.0
- workbox-precaching: ^6.6.0
- workbox-range-requests: ^6.6.0
- workbox-routing: ^6.6.0
- workbox-strategies: ^6.6.0
- workbox-streams: ^6.6.0

## Developer Dependencies

- gh-pages: ^6.1.1
