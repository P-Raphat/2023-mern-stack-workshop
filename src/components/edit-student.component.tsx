import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useParams,useNavigate } from "react-router-dom";

type State = {
  name?:string,
  email?:string,
  rollno?:string,
  submitted?:boolean
}

//HOC 
function withParams(Component:React.ComponentClass) {
  return (props:any)=> <Component {...props} navHook={useNavigate()} params={useParams()} />;
}

class EditStudent extends Component<any,State> {
    
    constructor(props:any) {
        super(props);
        
        this.state = {
            name: '',
            email: '',
            rollno: '',                
            submitted:false
        }

    }
    componentDidMount() {
        const { id } = this.props.params;
        // console.log(id)
        axios.get('http://localhost:4000/student/' + id)
        .then(res => {
            // console.log(res)
            const { name , email , rollno} = res.data.data
            this.setState({
                name: name,
                email: email,
                rollno: rollno
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    onChangeStudentName:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ name: e.target.value })
        // console.log(e.target.value)
    }

    onChangeStudentEmail:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ email: e.target.value })
        // console.log(e.target.value)
    }

    onChangeStudentRollno:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ rollno: e.target.value })
        // console.log(e.target.value)
    }

    onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { id } = this.props.params;
        const { name , email , rollno} = this.state
        const studentObject = {
            name: name,
            email: email,
            rollno: rollno
        };

        axios.put('http://localhost:4000/student/update/' + id, studentObject).then((res) => {
            // console.log(res.data);
            console.log('Student Successfully Updated');
            this.setState({submitted: true});
        }).catch((error) => {
            console.log(error)
        });
        this.props.navHook('/student-list')
        // Redirect to student list
        // const navigate = useNavigate()
        // navigate(`/student-list`)

        // const navigate = useNavigate()
        // navigate('/student-list')
        // this.props.history.push('/student-list')
    }



    render() {
        return (
            <div className="form-wrapper mt-5">
                <h1>Update Student</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
                    </Form.Group>

                    <Form.Group controlId="Roll">
                        <Form.Label>Roll No.</Form.Label>
                        <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
                    </Form.Group>

                    <Button variant="success" size="lg" type="submit">
                        Update Student
                    </Button>
                </Form>
            </div>
        )
    }
}
export default withParams(EditStudent);