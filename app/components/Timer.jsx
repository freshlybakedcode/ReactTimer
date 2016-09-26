var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped',
      timerFunction: true
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
      if (this.state.timerStatus !== prevState.timerStatus) {
        switch (this.state.timerStatus) {
          case 'started':
            this.startTimer();
            break;
          case 'stopped':
            this.setState({count: 0});
          case 'paused':
            clearInterval(this.timer)
            this.timer=undefined;
            break;
        }
      }
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
  },
  handleStatusChange: function (newStatus) {
    this.setState({timerStatus: newStatus});
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count +1
      });
    }, 1000);
  },
  render: function() {
    var {timerStatus, count, timerFunction} = this.state;
    return (
      <div>
        <h1 className="page-title text-center">Timer</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} timerFunction={timerFunction} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
})

module.exports = Timer;
