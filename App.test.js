import App from "./App";
import { render } from "@testing-library/react-native";
import Cities from "./src/screens/Cities";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

it("renders correctly", async () => {
  const { findByText } = render(<Cities />);

  expect(await findByText("Cidades")).toBeInTheDocument();
});
