import React, {Component} from "react";
import posed from "react-pose";
import styled from "styled-components";
import { transform } from "popmotion";
import Header from '../../common/Header';
const { pipe, clamp, interpolate, blendColor } = transform;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Square = posed.div({
  draggable: "x",
  passive: {
    y: ["x", v => v * Math.sin(v * 0.01)],
    backgroundColor: [
      "x",
      pipe(
        interpolate([-200, 200], [0, 1]),
        clamp(0, 1),
        blendColor("#FF1C68", "#198FE3")
      )
    ]
  }
});

const StyledSquare = styled(Square)`
  width: 100px;
  height: 100px;
`;

export default class Second extends Component {
  state = { pose: "idle" };

  render() {
    return (
      <div>
        <Header title={"Pose Fist Example"} />
        <Container>
          <StyledSquare pose={this.state.pose} />
        </Container>
      </div>
    );
  }
}