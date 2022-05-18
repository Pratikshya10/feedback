import React, {Component} from 'react'
import "./Style.css";
export class Form extends Component {
    state = {
        clicked:false,
        name:'',
        dept:'',
        rating:'',
        count:1,
        array:[]
    };

    onInputChange = (event)=> {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    changeState(value) {
        this.setState({
            clicked:{value}
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("Worked")
        const temp_obj = {
            name: this.state.name,
            dept: this.state.dept,
            rating: this.state.rating,
            count: this.state.count
        };

        this.state.array.push(temp_obj);
        this.setState({
            clicked:true,
            name:'',
            dept:'',
            rating:"",
            count:this.state.count +1
        });
    }

    render() {
        return (
            <div id="form-container">
                <center>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>

                    <form>
                        <label className="form-elements" htmlFor="name">Name :</label>
                        <input className="input_box form-elements" type="text" id="name" value={this.state.value} name="name" onChange={this.onInputChange}/>
                        <br></br>
                        <br></br>
                        <label className="form-elements" htmlFor="dept" >Department :</label>
                        <input className="input_box form-element" type="text" id="dept" value={this.state.value} name="dept" onChange={this.onInputChange}/>
                        <br></br>
                        <br></br>
                        <label className="form-elements" htmlFor="rate" >Rating :</label>
                        <input className="input_box form-elements" type="number" id="rate" value={this.state.value} name="rating" onChange={this.onInputChange}/>
                        <br></br>
                        <br></br>
                    </form>
                    <br></br>

                    <button id="submit_button" type="submit" onClick={this.onFormSubmit.bind(this)}>Submit</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div id="data_container">
                        {this.state.array.length>0 && this.state.array.map( (element) => {
                            return (
                                <div id="inner_container">
                                    <h2> {element.count} : {element.name} || {element.dept} || {element.rating}</h2>
                                </div>
                            );
                        })}
                    </div>
                </center>
            </div>
        )
    }

}