import React from 'react';
import './EmployeeForm.css';



class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            department: ''
        };
        
        // Bind methods
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Method to handle input changes
    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    // Method to handle form submission
    handleSubmit(event) {
        event.preventDefault();
        console.log('Current state:', this.state);
        this.setState({
            name: '',
            email: '',
            title: '',
            department: ''
        });
    }

    // Render method to display the form
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Job Title:
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Department:
                        <input
                            type="text"
                            name="department"
                            value={this.state.department}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default EmployeeForm;
