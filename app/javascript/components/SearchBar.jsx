import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            goodName:"",
            cost:1
         }
    }
    handleChange = event=> {
        this.setState({ goodName: event.target.value });
    }
    handleSubmit= event =>{
        const newGood={
            goodName: this.state.goodName,
            cost:Math.floor(Math.random() * 20),//cost:this.state.cost,
            amount:1
        }
        // console.log(newGood);
        this.props.onSubmit(newGood);
        // event.preventDefault();
    }
    render() { 
        return (
            <form>
                <label>
                    Название товара:
                    <input type="text"
                     value={this.state.goodName}
                     onChange={this.handleChange} />
                </label>
                <input type="button" onClick={this.handleSubmit} value="В корзину"/>
            </form>
             );
    }
}
 
export default SearchBar;