import React,{useState} from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonSelectOption, IonSelect,IonButton,IonChip,IonIcon,IonAvatar } from '@ionic/react';
import "./Tab2.css"
const Tab2: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
    const [ text, setText ] = React.useState("Make Donation") 
    const options = {
        cssClass: 'my-custom-interface'
      };

  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Donee</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonTitle>Inventory</IonTitle>
    <IonChip>
          <IonLabel color="secondary">Food</IonLabel>
        </IonChip> <IonChip>
          <IonLabel color="secondary">Cloth</IonLabel>
        </IonChip> <IonChip>
          <IonLabel color="secondary">Shoes</IonLabel>
        </IonChip> <IonChip>
          <IonLabel color="secondary">Money</IonLabel>
        </IonChip> <IonChip>
          <IonLabel color="secondary">House</IonLabel>
        </IonChip>
        <IonChip>
          <IonLabel color="secondary">Bank</IonLabel>
        </IonChip>
        <IonTitle>Place a request</IonTitle>
        <IonItem>
          <IonLabel>Donation Option</IonLabel>
          <IonSelect interfaceOptions={options} multiple={true}>
            <IonSelectOption value="brown">House</IonSelectOption>
            <IonSelectOption value="blonde">Bank</IonSelectOption>
            <IonSelectOption value="black">Cash</IonSelectOption>
            <IonSelectOption value="red">Loan</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton 
      color="primary" class="btn3"
      onClick={ () => setText("Donated") }
    >
      { text }
    </IonButton>
      </IonContent>
    </React.Fragment>
  );
};

export default Tab2;