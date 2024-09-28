import { IonAlert, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonInput, IonRow } from '@ionic/react';
import './TempoSettings.css';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assignBpm, assignDenominator, assignNumerator } from '../store/reducers/tempoSlice';
interface TempoSettingsParameter{
    bpm: number;
    numerator: number;
    denominator: number;
} 

const TempoSettings: React.FC<TempoSettingsParameter> = ({bpm, numerator, denominator}) => {
    const tempo: TempoSettingsParameter = useSelector((state: any) => state.tempo);
    const callAction = useDispatch();
 
    const setNumerator = (numerator:number) => {
      callAction(assignNumerator(numerator));
    };
    const setDenominator = (denominator:number) => {
      callAction(assignDenominator(denominator));

    };
    const setBpm = (bpm:number) => {
      callAction(assignBpm(bpm));

    };        
    return(
        <>
        <IonCard>
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="4"></IonCol>
                        <IonCol size="auto" className="ion-text-center">
                            <div><IonButton color="tertiary" size="large" shape='round' id="present-alert-bpm">{tempo.bpm}</IonButton></div>
                            <div><h4>
                                <IonButton fill="default" size="default" color="light" id="present-alert-tempo-numerator">{tempo.numerator}</IonButton> 
                                / 
                                <IonButton fill="default" size="default" color="light" id="present-alert-tempo-denominator">{tempo.denominator}</IonButton>
                                </h4>    
                            </div>
                        </IonCol>
                        <IonCol size="4"></IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
        <IonAlert className="tempo-selector" 
        trigger="present-alert-tempo-numerator"
        header="Select Tempo"
        buttons={['OK']}
        animated={true} 
        inputs={[
          {
            name: 'numerator-group',
            label: '1',
            type: 'radio',
            value: '1',
          },
          {
            name: 'numerator-group',
            label: '2',
            type: 'radio',
            value: '2',
          },
          {
            name: 'numerator-group',
            label: '3',
            type: 'radio',
            value: '3',
          },
          {
            name: 'numerator-group',
            label: '4',
            type: 'radio',
            value: '4',
          },
          {
            name: 'numerator-group',
            label: '5',
            type: 'radio',
            value: '5',
          },
          {
            name: 'numerator-group',
            label: '6',
            type: 'radio',
            value: '6',
          },   
          {
            name: 'numerator-group',
            label: '7',
            type: 'radio',
            value: '7',
          },
          {
            name: 'numerator-group',
            label: '8',
            type: 'radio',
            value: '8',
          },
          {
            name: 'numerator-group',
            label: '9',
            type: 'radio',
            value: '9',
          },
          {
            name: 'numerator-group',
            label: '10',
            type: 'radio',
            value: '10',
          },
          {
            name: 'numerator-group',
            label: '11',
            type: 'radio',
            value: '11',
          },
          {
            name: 'numerator-group',
            label: '12',
            type: 'radio',
            value: '12',
          },   
          {
            name: 'numerator-group',
            label: '13',
            type: 'radio',
            value: '13',
          },
          {
            name: 'numerator-group',
            label: '14',
            type: 'radio',
            value: '14',
          },
          {
            name: 'numerator-group',
            label: '15',
            type: 'radio',
            value: '15',
          },
          {
            name: 'numerator-group',
            label: '16',
            type: 'radio',
            value: '16',
          },                                 
        ]}
        onDidDismiss={(e) => {setNumerator(e.detail.data.values);}}
        ></IonAlert>
<IonAlert
        trigger="present-alert-tempo-denominator"
        header="Select Tempo"
        buttons={['OK']}
        animated={true} 
        inputs={[
          
          {
            name: 'denominator-group',
            label: '1',
            type: 'radio',
            value: '1',
          },                               
          {
            name: 'denominator-group',
            label: '2',
            type: 'radio',
            value: '2',
          },                               
          {
            name: 'denominator-group',
            label: '4',
            type: 'radio',
            value: '4',
          },                               
          {
            name: 'denominator-group',
            label: '8',
            type: 'radio',
            value: '8',
          },                               
          {
            name: 'denominator-group',
            label: '16',
            type: 'radio',
            value: '16',
          },                               
        ]} 
        onDidDismiss={(e) => {setDenominator(e.detail.data.values);}}
        ></IonAlert>        
        </>
    );

}

export default TempoSettings;