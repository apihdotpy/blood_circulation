import React, { useState } from "react";
import Container from "../components/Container";
import Title from "../components/Title";
import Heart from "../components/Heart";
import HeartOverlay from "../components/HeartOverlay";
import FAB from "../components/FAB";
import DescriptionLeft from "../components/DescriptionLeft";
import DescriptionRight from "../components/DescriptionRight";
import DescriptionBottom from "../components/DescriptionBottom";

function HomePage() {
  const [show, setShow] = useState(true);
  const [topFocus, setTopFocus] = useState(true);
  const [bottomFocus, setBottomFocus] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  console.log(topFocus);

  return (
    <Container>
      <Title />
      <div className="flex justify-center items-center">
        {topFocus || bottomFocus ? (
          <DescriptionLeft topFocus={topFocus} bottomFocus={bottomFocus} />
        ) : null}
        <HeartOverlay
          show={show}
          topFocus={topFocus}
          setTopFocus={setTopFocus}
          bottomFocus={bottomFocus}
          setBottomFocus={setBottomFocus}
        />
        <Heart />
        {topFocus || bottomFocus ? (
          <DescriptionRight topFocus={topFocus} bottomFocus={bottomFocus} />
        ) : null}
      </div>
      {topFocus || bottomFocus ? (
        <DescriptionBottom topFocus={topFocus} bottomFocus={bottomFocus} />
      ) : null}
      <FAB onClick={handleClick} show={show} />
    </Container>
  );
}

export default HomePage;
