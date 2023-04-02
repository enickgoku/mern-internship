import React from "react";
import SlideShow from '../../components/SlideShow';
import FlexContainer from "../../components/FlexContainer";

const Dashboard = ({ properties }) => {
  return (
    <FlexContainer>
      <SlideShow properties={properties} />
    </FlexContainer>
  );
};

export default Dashboard;
