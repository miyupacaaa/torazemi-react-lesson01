import React from 'react';
import Article from './Article';
import * as fooBar from './compornents/FooBar'
import Hoge from './compornents/Hoge'

const Blog = () => {


  // componentDidMount() {
  //   // ボタンクリックでいいね数を増やす
  //   document.getElementById('counter').addEventListener('click', this.countUp)
  //   // この書き方もいける
  //   // document.getElementById('counter').addEventListener('click', () => this.countUp())
  // }
  
  // componentDidUpdate() {
  //   if (this.state.count >= 10) {
  //     this.setState({count:0})
  //   }
  // }
  
  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // }


  // // いいねを増やす関数
  // countUp = () => {
  //   this.setState( {
  //     count: this.state.count + 1
  //   })
  // };


    return (
      <>
       <Article
       title={"Reactの使い方"} 
      //  count={this.state.count}
      />
      <fooBar.Foo />
      <fooBar.Bar />
      <Hoge />
      </>
    )

}

export default Blog;