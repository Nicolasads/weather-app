import React, { useEffect, useRef } from "react";
import { LoadingContainer } from "./styles";
import LottieView from "lottie-react-native";

export default function Loading() {
  const animation = useRef(null);
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      animation.current.play();
    }
  }, []);

  return (
    <LoadingContainer>
      <LottieView
        source={require("../../assets/clouds.json")}
        autoplay={true}
        loop={true}
        ref={animation}
      />
    </LoadingContainer>
  );
}
