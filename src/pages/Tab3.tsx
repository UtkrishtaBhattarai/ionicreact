import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton } from '@ionic/react';
import "./Tab3.css"

const Tab3Page: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton 
      href="/tab1"
      color="primary"  class="btn1"
    >Button DOnor
    </IonButton>
    <IonButton href="/tab2"
      color="primary" class="btn2"
    >Button Donee
    </IonButton>
      </IonContent>
      <IonContent />
    </React.Fragment>
  );
};

export default Tab3Page;
