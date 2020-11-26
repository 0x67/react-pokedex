import React from 'react';

const About = () => {
  return (
    <>
      <a href="#" data-toggle="modal" data-target="#exampleModalCenter">About</a>

      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle" style={{color: "black"}}>About Poké Hack</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h6 style={{color: "black"}} >
                An index of Pokémon, built with React as a requirement for Hacktiv8 Bootcamp Weekly Challenges.
              </h6>
              <h5 style={{color: "black"}}>Credit:</h5>
              <h6 style={{color: "black"}} >
                <u style={{color: "blue"}}>
                    <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">Pokémon API</a>
                </u>
                For providing free Pokémon data with no charge.
              </h6>
              <h6 style={{color: "black"}} >
                <u style={{color: "blue"}}>
                    <a href="https://startbootstrap.com/template/simple-sidebar" target="_blank" rel="noreferrer">Start Bootstrap</a>
                </u>
                For the sidebar template.
              </h6>

              <h6 style={{color: "black"}} >
                <u style={{color: "blue"}}>
                    <a href="https://pokedex.org/" target="_blank" rel="noreferrer">Pokédex</a>
                </u>
                For the inspiration.
              </h6>
              <h5 style={{color: "black"}}>This mess is created by:</h5>
              <h6 style={{color: "black"}} >
                <u style={{color: "blue"}}>
                    <a href="https://github.com/0x67" target="_blank" rel="noreferrer">0x67</a>
                </u>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About