Feature: Show/Hide Event Details
  Scenario: An event element is collapsed by default.
    Given the user is logged into the app
    When the app displays the events list
    Then the event element should be collapsed by default, displaying limited event details

  Scenario: User can expand an event to see details.
    Given the user is viewing a collapsed event
    When the user clicks the "Show Details" button on an event
    Then the event should expand, revealing additional details for that event

  Scenario: User can collapse an event to hide details.
    Given the user is viewing an event displaying additional details
    When the user clicks the "Hide Details" button on an event
    Then the expanded event should collapse, hiding additional details for that event