import React from 'react';
import logo from './logo.svg';
import './App.css';

class HeroHeader extends React.Component {
  
  constructor (...args) {
    super(...args);
    this.state = { height: undefined }
    this._containerDOM = null;
    this._scrollPosition = 0;
    this.onScroll = this.onScroll.bind(this);
  }
  
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
  }
  state = {
    color: 'white'
  }

  onScroll () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (this.props.scrollAction >= scrollTop) {
      const step = this._scrollPosition - scrollTop;
      const actualHeight = this._containerDOM.offsetHeight;
     
      this.setState({backgroundColor: 'black'});
      this.setState({visibility: 'hidden'});
      this._scrollPosition = scrollTop;
      // header.className="scroll";
    }
    else {
      this.setState({backgroundColor: 'red'})
      this.setState({visibility: 'visible'});

    }
  }

  render () {
    return (
      <header
        className='heroHeader'
        ref={n => this._containerDOM = n}
        style={{height: this.state.height,background: this.state.backgroundColor, color: "#fff"}}>
          <div style={{visibility: this.state.visibility}}>
            hello ansri
          </div>
          <div className='heroHeader-content'>
            {this.props.children}
          </div>
      </header>
    );
  }
}

HeroHeader.propTypes = {
  scrollAction: React.PropTypes
};

HeroHeader.defaultProps = {
  scrollAction: 250
};

function DummyContent () {
  return (
    <section>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    </section>
  );
}

function App () {
  return (
    <div>
      <HeroHeader>
        <a>hello</a>
        <a>hello</a>
        <a>hello</a>
        <a>hello</a>

      </HeroHeader>
      <DummyContent />
    </div>
  )
}

export default App;
