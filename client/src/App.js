import React from 'react';
import { Grid, Input, Header, Button } from 'semantic-ui-react';
import axios from 'axios';
import Tweets from './Tweets';

class App extends React.Component {
  state = { tweets: [], visible: [], tweet: '' }

  componentDidMount() {
    axios.get('/api/tweets')
      .then( res => this.setState({ tweets: res.data }) )
  }

  updateTweet = (e) => {
    this.setState({ tweet: e.target.value })
  }

  postTweet = () => {
    let { tweet, visible } = this.state;
    if (tweet) {
      axios.post('/api/tweet', { tweet })
        .then( res => this.setState({ tweet: '', visible: [...visible, res.data] }) )
    }
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={4}>
            <Header as="h3" textAlign="center">Tweet Something</Header>
            <Input size="large" onChange={this.updateTweet} value={this.state.tweet} />
            <Button onClick={this.postTweet}>Tweet!</Button>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={10}>
            <Tweets tweets={ this.state.tweets }/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;