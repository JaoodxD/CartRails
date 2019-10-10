import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Cart from '../components/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cart:[
        {id: 1, goodName: "Coffee", cost: 5, amount: 1},
        {id: 2, goodName: "Candy", cost: 1, amount: 1},
        {id: 3, goodName: "Sugar", cost: 0.5, amount: 3},
        {id: 4, goodName: "Tea", cost: 3, amount: 2},
      ],
      totalCost: 0
     }
  }
  recalculateTotalCost= ()=>{
    const newTotal =this.state.cart.reduce((acc,cur)=> acc+ cur.cost*cur.amount,0);
    console.log("recalculation...",newTotal);
    this.setState({totalCost:newTotal});
  }
  componentDidUpdate(){
    // this.recalculateTotalCost();
    // console.log(this.state);
  }
  componentDidMount(){
    this.recalculateTotalCost();
    
  }
  handleSubmit = (newGood) =>{
    console.log("Handling submit",newGood);
    let cart=[...this.state.cart];
    //Если в корзине уже есть такой элемент
    if(cart.some(good=> good.goodName ==newGood.goodName)){
      // console.log("уже есть такое в корзине");
      cart=cart.map(good=> {
        if(good.goodName==newGood.goodName)
          good.amount++;
          return good;
      });
      this.setState({cart: cart},this.recalculateTotalCost);
    }
    else{
    const newId=(cart.length>0)?cart.reduce((max,b)=> Math.max(max,b.id),cart[0].id)+1:1;
    const newItem = {id:newId,...newGood};
    this.setState({cart:[...cart,newItem]},this.recalculateTotalCost);
    }
    // this.recalculateTotalCost();
  }
  handleDelete= id =>{
    console.log("Handling delete");
    const cart=this.state.cart.filter(x=> x.id!=id);
    this.setState({cart:cart},this.recalculateTotalCost);
    // this.recalculateTotalCost();
  }
  handleUpdate= good=>{
    console.log("Handling update");
    const cart = [...this.state.cart];
    const index= cart.findIndex(x=> x.id==good.id);
    cart[index]={...good};
    cart[index].amount=cart[index].amount>0?cart[index].amount:0
    // cart[index].amount++;
    this.setState({cart:cart},this.recalculateTotalCost);
    // this.recalculateTotalCost();
  }
  render() { 
    return (
      <div className="wrapper">
        <SearchBar
        onSubmit={this.handleSubmit}
        />
      <Cart
      onDelete={this.handleDelete}
      onUpdate={this.handleUpdate}
      cart={this.state.cart}
      totalCost={this.state.totalCost}
      />
      </div>
    )
  }
}

export default App;