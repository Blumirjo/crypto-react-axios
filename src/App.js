import './App.css';
import Crypto from './components/Crypto';
import imgSG from './images/sg.svg';
import imgGithub from './images/github-logo-1.svg'
import imgLinkedin from './images/linkedin-3.svg'


function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
      <div className="col-12">

<div className="row ">

  <div className='col-12 nav-config'>
  <a  id="title-myname" className="navbar-brand font-s-title" href="https://github.com/Sebas-gatica-dev" target="_blank" rel="noreferrer">
                        <img id="s-style" className="letter-title" src={imgSG}  alt="sg" />
        </a>

        <p id="dev" >.developer</p>                                

  </div>
          
</div>
            

</div>

<div className='col-12 mt-4 mb-5'>
                
                
                <header className="App-header row ms-3 me-3">
                  <div className='col-12 text-white mt-5 mb-5 text-col-1'>
                     <h2 className='text-content-1'>¡Esta aplicacion fue hecha con React!</h2>
                  </div>
             
                  <div className='col-12 mt-3 mb-3 '>
                      <div className='row ms-5 me-5 rounded-4 background-content p-3 text-white'>
                          <p className='col-12'>
                            En este proyecto, a traves de axios llamamos a la API de coingecko, una plataforma de intercambio y realizacion de operaciones con criptomonedas, y ademas ofrecen servcios gratuito para acceder a las cotizaciones de criptomonedas.
                          </p>
                          <p className='col-12'>
                            El endpoint al que se llama con axios es 'https://api.coingecko.com/api/v3/coins' , apartir del JSON que nos devuelve la API, se mapean los datos, en la tabla de bootstrap.
                            Aqui tienes un <a className='video-link' target="_blank" href="https://www.linkedin.com/posts/sebastian-gatica-062985200_react-cripto-axios-activity-6967253068954370048-BwyM?utm_source=linkedin_share&utm_medium=member_desktop_web" rel='noreferrer'>video explicativo</a>. 
                          </p>
                  
              
                      </div>
                  </div>
                  <div className='col-12 text-col-2'>
                         <a href='https://github.com/Sebas-gatica-dev/react_firebase_app_CRUD' target="_blank" rel="noreferrer" type="button" className="text-content-2 btn btn-dark button-repo p-3 mb-4"><h3>¡Visita el repositorio!</h3></a>
                  </div>
                
                </header>
                    
                </div>



    
        <div className='col-12'>
        <Crypto /> 
        </div>
        <div className="col-12 mt-5">
             
    
             <div className="row style-row-footer mt-5  p-3">
                   <div className="col-6 d-flex justify-content-end">
                       <a href="https://www.linkedin.com/in/sebastian-gatica-062985200/" target="_blank" rel="noreferrer"><img id="linkedin-img" src={imgLinkedin} alt="My Linkedin Sebastian Gatica"  /></a>
                   </div>
                   <div className="col-6 d-flex ">
                       <a href="https://github.com/Sebas-gatica-dev" target="_blank" rel="noreferrer"><img id="github-img" src={imgGithub} alt="My GitHub Sebas-gatica-dev" /></a>
                   </div>
             </div>
             

     </div>
         
     </div>
        
    </div>
    
  );
}

export default App;
