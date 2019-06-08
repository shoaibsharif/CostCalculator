import styled from 'styled-components'

const Container = styled.div`
  margin: 65px;
  color: ${props => props.theme.brown};
  @-webkit-keyframes show {
    0%,
    49.99% {
      opacity: 0;
      -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
      z-index: 5;
    }
  }
  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
      z-index: 5;
    }
  }
  h1 {
    font-weight: bold;
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 10px 0;
  }

  button {
    border-radius: 20px;
    border: 1px solid #e67e22;
    background-color: #e67e22;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    -webkit-transition: -webkit-transform 80ms ease-in;
    transition: -webkit-transform 80ms ease-in;
    transition: transform 80ms ease-in;
    transition: transform 80ms ease-in, -webkit-transform 80ms ease-in;
    margin-top: 10px;
  }

  button:active {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background-color: transparent;
    border-color: #ffffff;
  }
  fieldset {
    &[disabled] {
      opacity: 0.5;
    }
  }

  form {
    background-color: ${props => props.theme.white};
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0 0 0;
    width: 100%;
    border-radius: 20px;
  }
  input::-webkit-input-placeholder {
    text-transform: capitalize;
  }
  input::-moz-placeholder {
    text-transform: capitalize;
  }
  input:-ms-input-placeholder {
    text-transform: capitalize;
  }
  input::placeholder {
    text-transform: capitalize;
  }
  input:focus {
    outline: none;
  }
  .is-invalid {
    border: 1px solid #dc3545;
    transition: 0.2s ease-out;
  }
  .invalid-feedback {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: -0.6px;
    font-size: 12px;
    color: #dc3545;
    margin-left: 27px;
    transition: 0.2s ease-out;
  }

  .container {
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
    background-color: ${props => props.theme.white};
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 1000px;
    height: 600px;
    max-width: 100%;
    min-height: 480px;
    &.right-panel-active .sign-in-container {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    &.right-panel-active .sign-up-container {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      opacity: 1;
      -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
      z-index: 5;
      -webkit-animation: show 0.6s;
      animation: show 0.6s;
    }
    &.right-panel-active .overlay-container {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    &.right-panel-active .overlay {
      -webkit-transform: translateX(50%);
      transform: translateX(50%);
    }
    &.right-panel-active .overlay-right {
      -webkit-transform: translateX(20%);
      transform: translateX(20%);
    }
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    -webkit-transition: all 0.6s ease-in-out;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    z-index: 1;
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    -webkit-transition: -webkit-transform 0.6s ease-in-out;
    transition: -webkit-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
    z-index: 100;
  }

  .overlay {
    background: #043f58;
    background: -webkit-linear-gradient(to right, #006247, #043f58);
    background: -webkit-linear-gradient(left, #006247, #043f58);
    background: linear-gradient(to right, #006247, #043f58);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: ${props => props.theme.yellow};
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: -webkit-transform 0.6s ease-in-out;
    transition: -webkit-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  }

  .overlay-panel {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: -webkit-transform 0.6s ease-in-out;
    transition: -webkit-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  }

  .overlay-left {
    -webkit-transform: translateX(-20%);
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay-left {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  .social-container {
    margin: 20px 0;
    a {
      border: 1px solid #dddddd;
      border-radius: 50%;
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin: 0 5px;
      height: 40px;
      width: 40px;
      text-decoration: none;
      -webkit-transition: 0.2s ease-out;
      transition: 0.2s ease-out;
    }
    a:hover {
      background: rgba(255, 69, 79);
    }
  }
`

export default Container
