import React from 'react'

const App = () => {
  function yesclicked(){
    document.getElementById('text').innerHTML= "LOVE YOU"
  }
  function noclicked(){
    document.getElementById('text').innerHTML= "FUCK YOU 🖕 Vishnu"
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ height: "300px", width: "400px", backgroundColor: "pink", justifyContent: "center", display: "flex", fontFamily: "cursive", }}>
          <h2>
            <div id='text' style={{ position: "relative", top: "70px" }} >
              will you be my valentine !!
            </div>
          </h2>

          <div style={{ position: 'absolute', top: "250px", display: "flex", gap: "30px" }}>
            <button onClick={yesclicked} style={{ height: "50px", width: "70px" }}>
              <div style={{ fontFamily: "cursive" }} >
                yes
              </div>
            </button>
            <button onClick={noclicked}  id='yes' style={{ height: "50px", width: "70px" }}>
              <div style={{ fontFamily: "cursive" }} >
                no
              </div>
            </button>

            <div style={{position:"static"}}>
            <div className="flower" style={{ fontSize:"80px", position:"absolute" ,bottom:"-10px"
            }}>🌸</div>
            </div>
            <div style={{position:"static"}}>
            <div className="flower" style={{ fontSize:"80px", position:"absolute" ,bottom:"-10px",left:"-93px"
            }}>🌸</div>
            </div>
          </div>

        </div>






      </div>
    </>
  )
}

export default App
