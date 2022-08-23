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
        <AgentSpeedrun {...AgentStyles.raze} />
        <AgentSpeedrun {...AgentStyles.fade} />
        <AgentSpeedrun {...AgentStyles.brimstone} />
        <AgentSpeedrun {...AgentStyles.phoenix} />
        <AgentSpeedrun {...AgentStyles.sage} />
        <AgentSpeedrun {...AgentStyles.sova} />
        <AgentSpeedrun {...AgentStyles.viper} />
        <AgentSpeedrun {...AgentStyles.cypher} />
        <AgentSpeedrun {...AgentStyles.reyna} />
        <AgentSpeedrun {...AgentStyles.killjoy} />
        <AgentSpeedrun {...AgentStyles.breach} />
        <AgentSpeedrun {...AgentStyles.omen} />
        <AgentSpeedrun {...AgentStyles.jett} />
        <AgentSpeedrun {...AgentStyles.skye} />
        <AgentSpeedrun {...AgentStyles.yoru} />
        <AgentSpeedrun {...AgentStyles.astra} />
        <AgentSpeedrun {...AgentStyles.kayo} />
        <AgentSpeedrun {...AgentStyles.chamber} />
        <AgentSpeedrun {...AgentStyles.neon} />
      </SpeedrunContainer>
    </div>
  );
}

const SpeedrunContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
