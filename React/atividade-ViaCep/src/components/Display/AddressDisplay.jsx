function AddressDisplay({ address }) {
    return (
      <div>
        <p>Logradouro: {address.logradouro}</p>
        <p>Complemento: {address.complemento}</p>
        <p>Bairro: {address.bairro}</p>
        <p>Localidade: {address.localidade}</p>
        <p>UF: {address.uf}</p>
      </div>
    );
  }  
  export default AddressDisplay;
  