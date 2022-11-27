import React, { Component } from 'react'

class App extends Component {

  state= {
    email:"",
    password:""
  }
  
input=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  
clickbut=(e)=>{
    this.setState(this.state.password.length<8 || this.state.email==="" ? alert("Duzgunlukden emin olun ,bele ki, password 8 characterden cox olmalidir, butun xanalar doldurulmalidir"): alert("Tebrikler qeydiyyatiniz ugurlu alindi"))
 
   }


  render() {
    console.log(JSON.stringify(this.state))

    return (
      <div className='validation'>
<div >
        <label htmlFor='email'>E-mail</label> <br></br>
        <input value={this.state.email} type="text" id="email" name="email" onChange={this.input} />
</div>
<br></br>
<div >
        <label htmlFor='password'>Password</label> <br></br>
        <input value={this.state.password} type="text" id="password" name="password" onChange={this.input}/>
</div>
<br></br>
<button className ="but"  onClick={this.clickbut}>Login</button>
      </div>
    )
  }
}

export default App