import React from 'react';
import Websocket from 'react-websocket';
import io from 'socket.io-client';

  class main extends React.Component {

    ws = new WebSocket('ws://localhost:8080/gvnhanh/yeucau/chuaduyet');
 
    constructor(props) {
      super(props);
      this.state = {
          ycs: [],
          count: '',
          isLoading: true,
        }
    }

    async componentDidMount(){
        this.setState({isLoading: true});

        const yc = await(await fetch('gvnhanh/yeucau/chuaduyet')).json();

        this.setState({
          ycs: yc,
          count: yc.length,
          isLoading: false,
        })
        console.log("nav", this.state)

        this.ws.onopen = () => {
        // on connecting, do nothing but log it to the console
        console.log('connected')
        }

        this.ws.onmessage = evt => {
          // listen to data sent from the websocket server
          const message = JSON.parse(evt.data)
          this.setState({dataFromServer: message})
          console.log(message)
        }

        this.ws.onclose = () => {
        console.log('disconnected')
        // automatically try to reconnect on connection loss

        }
    }
 
    handleData(data) {
      let result = JSON.parse(data);
      this.setState({ycs: result.movement});
      console.log("data", result)
    }
 
    render() {
        const {ycs, count} = this.state;
        let ycList = ycs.map((yc, index)=>{
            return <div>{yc.hoten}</div>
        })

        console.log("this.ws", this.state.dataFromServer)

      return (
        <div className="content-wrapper">
          Count: <strong>{count}</strong>

          {ycList}
 
          <Websocket url='ws://localhost:8080/gvnhanh/yeucau/chuaduyet'
              onMessage={this.handleData.bind(this)}/>

              {/*<ChildComponent websocket={this.ws} />*/}
        </div>

          
      );
    }
  }

export default main;