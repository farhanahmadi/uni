import PulseLoader from "react-spinners/PulseLoader";

function Loading({ size=10, white = false }) {
  return (
    <PulseLoader
      size={size}
      color={white ? "#fff" : "#3b82f6 "}
      visible={true}
    />
  );
}
export default Loading;
