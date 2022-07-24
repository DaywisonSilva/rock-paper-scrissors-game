import { StyledHand } from "./Hand.styles";

interface HandProps {
  type: "rock" | "paper" | "scissors";
}

const Hand = ({ type }: HandProps) => {
  const imageURL = `./images/icon-${type}.svg`;

  return (
    <div className={StyledHand({ type })}>
      <img src={imageURL} alt={`${type} hand icon`} />
    </div>
  );
};

export default Hand;
