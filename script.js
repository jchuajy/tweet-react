class Page extends React.Component {

  render() {

    return (
        <div>
        <Header userName="Kanye West" />
        <Navbar />
        <Twittercard allTweets={tweets} />
        </div>
    );
  };
};

class Header extends React.Component {

  render() {

    return (
      <div>
      <h1>{this.props.userName}</h1>
      </div>
    );
  };
};

class Navbar extends React.Component {

  render() {

    return (
      <div>
      <h2>This is my navbar</h2>
      </div>
    );
  };
};

class Twittercard extends React.Component {

  render() {

    let tweetElement = this.props.allTweets.map(item => {
      return (
        <div>
          <h3>{item.user.name}</h3>
          <h4>@{item.user.screen_name}</h4>
          <h5>{item.created_at}</h5>
          <img src={item.user.profile_image_url} />
          <h4>{item.text}</h4>
          <h5>RT: {item.retweet_count}</h5>
          <h5>FAV: {item.favorite_count}</h5>
        </div>
      )
    });

    return (
      <div>
        {tweetElement}
      </div>
    )
  };
};



ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

