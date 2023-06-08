import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onLikeButtonClicked: () => void;
}

const Like = ({ onLikeButtonClicked }: LikeProps) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onLikeButtonClicked();
  };
  if (status) return <AiFillHeart color="red" size={20} onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
