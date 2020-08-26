import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonTitle,
    IonToolbar
    } from '@ionic/react';
  import { book, build, colorFill, grid } from 'ionicons/icons';
  import React from 'react';
  import './Tab1.css';
  
  const Tab1: React.FunctionComponent = () => {
    return (
      <React.Fragment>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Donor</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard class="welcome-card">
            <IonCardHeader>
              <IonCardSubtitle>replace here with your own code</IonCardSubtitle>
              <IonCardTitle>Thankyou</IonCardTitle>
            </IonCardHeader>
          </IonCard>
  
          <IonList lines="none">
            <IonListHeader>
              <IonLabel>Resources</IonLabel>
            </IonListHeader>
      
          </IonList>
        </IonContent>
      </React.Fragment>
    );
  };
  
  export default Tab1;
  