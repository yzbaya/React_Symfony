import {Component} from 'react';
import styled from "styled-components";
import Input from "./Input";
import BlueButton from "./BlueButton";

const Container = styled.div`
  padding: 30px 20px;
`;

class Register extends Component {
  render() {
    return (<>

      <Container>
        <form onSubmit={ev => this.register(ev)}>
          <Input placeholder={'email'} type="email" value={this.state.email}
                 onChange={ev => this.setState({email:ev.target.value})} />
          <Input placeholder={'your name'} type="text" value={this.state.name}
                 onChange={ev => this.setState({name:ev.target.value})} />
          <Input placeholder={'password'} type="password" value={this.state.password}
                 autocomplete={'new-password'}
                 onChange={ev => this.setState({password:ev.target.value})} />
          <BlueButton type={'submit'}>Register</BlueButton>
        </form>
      </Container>
    </>);
  }

}


export default Register;