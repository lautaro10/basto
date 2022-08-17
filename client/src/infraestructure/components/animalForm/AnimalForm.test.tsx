import AnimalForm from "./AnimalForm";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

const mockOnSubmit = jest.fn();
const mockOnCancel = jest.fn();

describe("Animal form", () => {
  it("Button name is 'Add'", async () => {
    act(() => {
      render(
        <AnimalForm
          onSubmitEvent={mockOnSubmit}
          onCancelEvent={mockOnCancel}
          isEdition={false}
        />
      );
    });
    await act(async () => {
      const button = screen.getByText("Agregar");
      expect(button).toBeTruthy();
    });
  });

  it("Button name is 'Edit'", async () => {
    act(() => {
      render(
        <AnimalForm
          onSubmitEvent={mockOnSubmit}
          onCancelEvent={mockOnCancel}
          isEdition={true}
        />
      );
    });
    await act(async () => {
      const button = screen.getByText("Editar");
      expect(button).toBeTruthy();
    });
  });

  it("The cancel event is emitted when cancel button is pressed", async () => {
    act(() => {
      render(
        <AnimalForm
          onSubmitEvent={mockOnSubmit}
          onCancelEvent={mockOnCancel}
          isEdition={false}
        />
      );
    });
    await act(async () => {
      const button = screen.getByText("Cancelar");
      fireEvent.click(button);
      expect(mockOnCancel).toHaveBeenCalled();
    });
  });

  it("The submit event is not emitted because there are errors in the form", async () => {
    act(() => {
      render(
        <AnimalForm
          onSubmitEvent={mockOnSubmit}
          onCancelEvent={mockOnCancel}
          isEdition={false}
        />
      );
    });
    await act(async () => {
      const button = screen.getByText("Agregar");
      fireEvent.click(button);
      expect(mockOnSubmit).not.toBeCalled();
    });
  });

  it("Six error messages are displayed because no field was filled out", async () => {
    act(() => {
      render(
        <AnimalForm
          onSubmitEvent={mockOnSubmit}
          onCancelEvent={mockOnCancel}
          isEdition={false}
        />
      );
    });
    await act(async () => {
      const button = screen.getByText("Agregar");
      fireEvent.click(button);
      expect(screen.getAllByRole("alert")).toHaveLength(6);
      expect(mockOnSubmit).not.toBeCalled();
    });
  });
});
