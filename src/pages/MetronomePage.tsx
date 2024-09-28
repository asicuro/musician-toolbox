import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MetronomePage.css';
import TempoSettings from '../components/TempoSettings';
import MetronomeAudio from '../components/MetronomeAudio';

const MetronomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TempoSettings bpm={120} numerator={4} denominator={4} />
        <MetronomeAudio />
      </IonContent>
    </IonPage>
  );
};

export default MetronomePage;
