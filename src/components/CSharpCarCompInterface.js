import React, {Component} from 'react';

class CSharpCarCompInterface extends Component {
    
    constructor(props) {
        super();
        this.state = {
            title: "Car Company Database Interface",
            date: new Date(2018, 4)
        };
    }

    changeYear() {
        this.setState( (state, props) => ({
            year: this.props.newyear
        }));

    }

    changeTitle() {
        this.setState( (state, props) => ({
            title: this.props.newtitle
        }));
    }

    componentDidMount() {
        if(this.props.newtitle) {
            this.changeTitle();    
        }
        // Couldnt figure out the year display - memento 
    }

    componentWillUnmount() {
        // Something for this part!!
        // alert("Display something - component was unmounted!")
    }

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.state.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">April 2018</h6>
                    <p className="card-text">
                        <ul>
                            <li>
                                Created a Visual Studio C# Windows Form Application Interface (GUI) which connects to a MySQL database.
                            </li>    
                            <li>
                                Using the GUI, the user can perform various operations on the database, depending on their role in the company.
                            </li>
                            <li>
                                Customers can view available cars and purchase them, and salespersons can place a purchase order.
                            </li>
                        </ul>
                    </p>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        )
    }
}

export default CSharpCarCompInterface;