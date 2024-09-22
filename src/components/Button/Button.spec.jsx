/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./index";
import userEvent from "@testing-library/user-event";

describe("Button component", () => {
  it("should render button with text", () => {
    render(<Button text="Load more posts"/>)
    expect.assertions(1)
    const button = screen.getByRole('button', /Load more posts/i);
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn()
    render(<Button text="Load more posts" onClick={fn}/>)
    const button = screen.getByRole('button', {name: /Load more posts/i});
    userEvent.click(button)
    expect(fn).toHaveBeenCalledTimes(1)
  });

  it("should be disabled when disable is true", () => {
    render(<Button text="Load more posts" disabled={true}/>)
    const button = screen.getByRole('button', {name: /Load more posts/i});
  expect(button).toBeDisabled()
  });

  it("should be enable when disabled is false", () => {
    render(<Button text="Load more posts" disabled={false}/>)
    const button = screen.getByRole('button', {name: /Load more posts/i});
    expect(button).toBeEnabled()
  });

  it("should match snapshot", () => {
    const {container} =  render(<Button text="Load more posts" disabled={false}/>)
    const button = screen.getByRole('button', {name: /Load more posts/i});
    expect(button).toBeEnabled()

    expect(container.firstChild).toMatchSnapshot()
  });



});
