// import dependencies
// import react-testing methods
import { render, screen } from "@testing-library/react";

// import recommended method to test user interaction in browser environment (better than fireEvent)
import userEvent from "@testing-library/user-event";

// importing store and provider for redux
import { store } from "../../store/store";
import { Provider } from "react-redux";

// the component to test
import Form from "./Form";

test("contains errors for required fields", async () => {
  // Arrange
  // Setup user interaction
  const user = userEvent.setup();
  // Render a React element into the DOM
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

  // Act
  // Get the button element and simulate a click event
  const button = screen.getByRole("button", { name: /Salvar/i });
  await user.click(button); // Simulate the click

  // Assert
  expect(screen.getAllByText("Campo obrigatório").length).toBe(4);
});
