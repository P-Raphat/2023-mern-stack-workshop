import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type FormProps = {
  name?:string,
  email?:string,
  rollno?:string
}

export default class CreateStudent extends Component<{},FormProps>{

  constructor(props:FormProps){
    super(props)
    this.state = {
        name:'',
        email:'',
        rollno:''
    }
  }

  onChangeStudentName:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    this.setState({name:e.target.value})
  }

  onChangeStudentEmail:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    this.setState({email:e.target.value})
  }

  onChangeStudentRollno:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    this.setState({rollno:e.target.value})
  }

  onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log('Student successfully created!!');
    console.log(`Name: ${this.state.name}`);
    console.log(`Email:${this.state.email}`);
    console.log(`Roll no:${this.state.rollno}`);

    this.setState({
      name:'',
      email:'',
      rollno:''
    })
  }

  render() {
    return (
      <div className='form-wrapper mt-5'>
        <h1>Create Student</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId='Name'>
                <Form.Label>
                    Name
                </Form.Label>
                <Form.Control type='text' value={this.state.name} 
                onChange={this.onChangeStudentName}/>
          </Form.Group>

          <Form.Group controlId='Email'>
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control type='email' value={this.state.email}
                onChange={this.onChangeStudentEmail}/>
          </Form.Group>

          <Form.Group controlId='Roll'>
                <Form.Label>
                    Roll No.
                </Form.Label>
                <Form.Control type='text' value={this.state.rollno}
                onChange={this.onChangeStudentRollno}/>
          </Form.Group>

          <Button variant='success' size='lg' type='submit'>
            Create Student
          </Button>
        </Form>
      </div>
    )
  }
}
