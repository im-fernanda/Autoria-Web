import React from 'react';
import './LoginSignUp.css';

const LogIn = () => {
  return (
    <>
    <div class="wrapped">
      <div class="container main">
        <div class="row">

          <div class="col-md-6 side-image">  </div>

          <div class="col-md-6 right">
            <div className="site-name">
              <p> Pastos</p>
            </div>

            <div class="input-box">
            {/* <img src='../assets/logo2.png'></img> */}

              <header>Acesse sua conta</header>
              <div class="input-field"> 
                <input type="text" class="input" id="email" required autocomplete="off"></input>
                <label for="email">Email</label>
              </div>
            
              <div class="input-field"> 
                <input type="text" class="input" id="password" required></input>
                <label for="password">Senha</label>
              </div>

              <div class="input-field"> 
                <input type="submit" class="submit" value="Entrar"></input>
                {/* <label for="submit">Entrar</label> */}
              </div>

              <div className="signin">Ainda não tem uma conta? <a href='#'> Crie uma aqui!</a>
              </div>
            </div>
            
          </div>

        </div>
      </div>

    </div>

  </>
   
  );
};

export default LogIn;

