(()=>{let e=document.getElementById("cityName");document.getElementById("form").addEventListener("submit",(t=>{var n;t.preventDefault(),n=e.value,fetch("http://api.weatherapi.com/v1/current.json?key=844acef0333e4356bca33642231004&q="+n,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){console.log(e.current)})).catch((function(e){console.log("l")}))}))})();