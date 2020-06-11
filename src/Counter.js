import React, {Component} from "react"
import randomColor from "randomcolor"

class Counter extends Component {
	constructor() {
		super()
		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
		this.state = {
			count: 0,
			color: randomColor(),
		}

	}

	increment() {
		this.setState(prevState => ({count: prevState.count + 1}))
	}

	decrement() {
		this.setState(prevState => ({count: prevState.count - 1}))
	}

	componentDidUpdate(prevProps, prevState) {
		// to avoid update recursion
		if(prevState.count === this.state.count)
			return
		this.setState({color: randomColor()})
	}

	render() {
		const textColor = { color: this.state.color }
		return (
			<div>
				<h1 style={textColor}>{this.state.count}</h1>
				<button onClick={this.increment}>increment</button>
				<button onClick={this.decrement}>decrement</button>
			</div>
		)
	}
}

export default Counter