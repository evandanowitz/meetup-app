import { render } from "@testing-library/react";
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