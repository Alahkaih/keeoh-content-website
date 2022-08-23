import AgentSpeedrun from './components/AgentSpeedrun';
import AgentStyles from './AgentStyles.json';
import styled from 'styled-components';

type Props = {
  ButtonColor: string,
  PlaylistLink: string,
  AgentName: string
}

export default function App() {
  return (
    <div>
      <SpeedrunContainer>
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
        <AgentSpeedrun {...AgentStyles.razeStyle} />
        <AgentSpeedrun {...AgentStyles.fadeStyle} />
      </SpeedrunContainer>
    </div>
  );
}

const SpeedrunContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
