import React, {Component} from 'react';


//Appでcounterコンポーネントを呼ぶ
const App = () => (<Counter></Counter>)

//コンポーネントComponentを継承することで使うことができる
class Counter extends Component {
    constructor(props) {
        super(props)
        //値を設定する
        this.state = {count: 1}
    }

    //handlePlusButtonメソッド
    handlePlusButton = () => {
        //現在のカウント+1を新しいカウントとして更新する
        this.setState({count: this.state.count + 1})
    }
    handleMinusButton = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <React.Fragment>
                <div>count: {this.state.count} </div>
                <button onClick={this.handlePlusButton}>+1</button>
                <button onClick={this.handleMinusButton}> -1</button>

            </React.Fragment>
        )

    }
}

export default App;
