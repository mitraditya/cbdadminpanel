/* eslint-disable jsx-a11y/alt-text */
import { FunctionField } from "react-admin";

const ImageDisplayField = (props) => (
  <FunctionField
    {...props}
    render={(filename) => (
      <img src={`${process.env.REACT_APP_BACKEND}/${filename}`} title="image" />
    )}
  />
);

export default ImageDisplayField;
