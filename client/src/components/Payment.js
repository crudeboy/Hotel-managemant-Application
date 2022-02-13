import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


export default function Payment(props) {
  console.log(props.amount);
    
    const pubKey = process.env.REACT_APP_PUBLIC_KEY;
   const config = {
   //public_key: eval(window.env.REACT_APP_PUBLIC_KEY),
    // public_key: 'FLWPUBK_TEST-1318640e8c0f11793da8965c565bb507-X',
    public_key: pubKey,
    tx_ref: Date.now(),
    amount: props.amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: props.email,
      phonenumber: '08101052072',
      name:props.name,
    },
    customizations: {
      title: 'Chinedu Hotels',
      description: 'Payment for hotel room',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
  const fwConfig = {
    ...config,
    text: 'Pay now',
    callback: (response) => {
       console.log(response);
       
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}

