import './App.css';
import CryptoJS from 'crypto-js';

function App() {

  const cifrar=(texto)=>{
    var textoCifrado = CryptoJS.AES.encrypt(texto, '12345678').toString();
    return textoCifrado;
  }

  const descifrar=(texto)=>{
    var bytes=CryptoJS.AES.decrypt(texto, '12345678');
    var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textoDescifrado;
  }

  return (
    <div className="App">
      <h2>Texto Cifrado: { cifrar("jorgecarranza") }</h2>
      <br/>
      <h2>Texto Descifrado: { descifrar("U2FsdGVkX18mtxqP/rKA3UBvXSp4ADUiZiEt40UyV/o=") }</h2>
      <br/>
  
    </div>
  );
}

export default App;
