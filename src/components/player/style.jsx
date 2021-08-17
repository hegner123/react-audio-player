import styled from "styled-components";

export const Main = styled.div`
  background: #bababa;
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 442px;
  height: 153px;
  border-radius: 5px;
  .wrapper {
    display: grid;
    grid: repeat(2, 1fr) / repeat(4, 1fr);
    height: 100%;
  }
  .controls {
    display: grid;
    align-self: center;
    grid: repeat(1, 75px) / repeat(2, 1fr);
    grid-auto-flow: row;
    grid-row: 1 / -1;
    grid-column: 1/2;
    margin: 23px;
  }
  .info {
    align-self: flex-end;

    grid-column: 2/ -1;
    grid-row: 1;
  }
  .player {
    grid-column: 2/ -1;
    grid-row: 2;
    align-self: center;
  }
  .play-pause {
    grid-column: 1/ -1;
    align-self: center;
  }
  .time {
    width: max-content;
  }

  .small-text {
    font-size: 12px;
  }
`;

export const Play = styled.button`
  display: block;
  height: 58px;
  width: 58px;
  border-radius: 50%;
  background: ${(props) => (props.ready ? "green" : "grey")};
  cursor: pointer;
  border: solid 1px #333;
  box-shadow: 0 2px 15px #181818;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.8);
    box-shadow: 0 0px 5px #181818;
  }
`;

export const Pause = styled.button`
  display: block;
  height: 58px;
  width: 58px;
  border-radius: 50%;
  background: #f7f7f7;
  cursor: pointer;
  border: solid 1px #333;
  box-shadow: 0 2px 15px #181818;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.8);
    box-shadow: 0 0px 5px #181818;
  }
`;

export const Previous = styled.button`
  display: block;
  grid-row: 1;
  grid-column: 4/-1;
  height: min-content;
  width: min-content;
  align-self: flex-end;
  justify-self: flex-end;
  cursor: pointer;
  border: none;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.5);
  }
`;
