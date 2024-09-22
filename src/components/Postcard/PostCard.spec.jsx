const { render, screen } = require("@testing-library/react");
const { PostCard } = require(".");
const { postCardPropsMock } = require("./mock");

const props = postCardPropsMock;

describe("PostCard component", () => {
  it("Should render PostCard", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: /title 1/i })).toHaveAttribute(
      "src",
      "img/img.png"
    );
    expect(
      screen.getByRole("heading", { name: "title 1 1" })
    ).toBeInTheDocument();
    expect(screen.getByText("body 1")).toBeInTheDocument;
  });

  it("Should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
