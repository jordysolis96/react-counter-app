import React, { Component } from 'react';

class Counter extends Component {
    //state is a special react property that holds any data that this component needs
    state = {
        count : 0,
        // tags: ['tag1', 'tag2', 'tag3']
     };

    //  constructor() {
    //      super();
    //      this.handleIncrement = this.handleIncrement.binf(this);
    //  }

    //  renderTags(){
    //      if (this.state.tags.length === 0) return <p>There are no tags!</p>
    //     return <ul>{ this.state.tags.map(tag => <li key ={tag}>{ tag }</li>) }</ul>
    //  }

    //  styles = {
    //     fontSize: 50,
    //     fontWeight: 'bold'
    //  }

     handleIncrement = (product) => {
         console.log(product + 1)
         this.setState({ count: this.state.count + 1 })
         // obj.method(); this. return obj
         // function(); this. returns refrence to the window object
         //in strict mode this. returns undefined
     }

     doHandleIncrement = () => {
         this.handleIncrement({id : 1})
     }

    render() { 
        return (
        <div>
            {/* javascript can make logical && operator be equal to a non boolean type. the first half is the condition and the second half after the && is what you want to return
            {this.state.tags.length === 0 && 'Please create a new tag!'}
            {this.renderTags()} */}
            <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={this.handleIncrement}
                className = "btn btn-secondary btn-sm">
                    Increment
            </button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

}
 
export default Counter;
