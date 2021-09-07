import React, { Component } from 'react'
import { init } from 'ityped'


export default class Text extends Component {
  componentDidMount(){
    const text = document.querySelector('#text')
    init(text, { showCursor: false, strings: [' fascinaux,originals'] })
  } 
  render(){
    return <div id="text" className="mb-5 text-center"></div>
  }
}