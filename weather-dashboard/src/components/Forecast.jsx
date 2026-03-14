function Forecast({ data }) {

  const daily = data.list.slice(0, 5);

  return (

    <div style={{display:"flex", justifyContent:"center", gap:"20px", marginTop:"30px"}}>

      {daily.map((item,index) => (

        <div key={index} style={{
  background:"rgba(255,255,255,0.25)",
  backdropFilter:"blur(8px)",
  padding:"12px",
  borderRadius:"12px",
  width:"110px",
  boxShadow:"0 4px 15px rgba(0,0,0,0.2)"
}}>

          <p>{new Date(item.dt_txt).toLocaleDateString()}</p>

          <p>{item.main.temp}°C</p>

          <p>{item.weather[0].main}</p>

        </div>

      ))}

    </div>

  );

}

export default Forecast;