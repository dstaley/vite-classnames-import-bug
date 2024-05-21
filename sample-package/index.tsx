import classNames from "classnames";

export default function SampleComponent({ className }) {
  return <h1>{classNames("sample-component", className)}</h1>;
}
