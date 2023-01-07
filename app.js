document.getElementsById("fly").addEventListener("click", function(e) {

  e.preventDefault();

  const tail_number = document.getElementById("tail_number").value;
  const airline = document.getElementById("airline").value;
  const callsign = document.getElementById("callsign").value;
  const flight_number = document.getElementById("flight_number").value;
  const altitude = document.getElementById("altitude").value;
  const speed = document.getElementById("speed").value;
  const ta_speed = document.getElementById("ta_speed").value;
  const vs = document.getElementById("vs").value;
  const route = document.getElementById("route").value;
  const dep_gate = document.getElementById("dep_gate").value;
  const arr_gate = document.getElementById("arr_gate").value;

  document.getElementById("talk").addEventListener("click", function () {
    if (document.getElementById("frequency").value === "atis") {
      const dep_airport = route.split(' ').at(1);
      const api_url = "https://avwx.rest/api/metar/" + dep_airport + "?airport=true&format=json";

      async function getMetar() {
        const response = await fetch(api_url);

        const data = await response.json();

        const msg = new SpeechSynthesisUtterance();
        msg.text = data.resulsts;

        
      }
    }
  });
});