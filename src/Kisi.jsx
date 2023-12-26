const Kisi = ({kisi}) => (
  <div className="kisi-container">
    <div className="resim-container">
      <img src={kisi.image} alt={kisi.name} />
    </div>
    <div className="icerik">
      <h2>{kisi.name}</h2>
      <p>{kisi.age} years</p>
    </div>
  </div>
);

export default Kisi;
