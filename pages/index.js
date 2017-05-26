import Link from 'next/link'


let Deck; // since deck is client only lib, we gotta hack the require.



class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onSwitchDone = this.onSwitchDone.bind(this);
        this.onSwitching = this.onSwitching.bind(this);
        this.state = {
                        current: 0,
                        horizontal: false,
                        swipe: true,
                        wheel: true,
                        animate: true,
                        loop: false,
                        dura: 1000,
                        easing: "inOutQuad",
                    };
   }
   componentDidMount(){
       Deck = require('react-slide-deck').default;
       this.setState({
           deckLoaded: true
       })
   }
   onSwitching(factor, deck) {
    const prev = this.state.index, current = deck.state.current;
    console.log(factor);
    console.log(prev, ' ', current);
    
  }
  onSwitchDone(state) {
    console.log('Done switching');
  }
   render() {
        if(!this.state.deckLoaded) return null;

        const slideClasses = {
                current: 'slideCurrent',
                entering: 'slideCurrentEntering',
                prev: 'slidePrev',
                leaving: 'slidePrevLeaving'
        };

        return (
            <div className="container" id="alias-body-scroll">
                <style jsx>{`
                    :global(*) {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: heiti TC;
                    }
                    :global(body){
                        width: 100%;
                        height: 100%;
                    }
                    :global(html){
                        width: 100%;
                        height: 100%;
                    }
                `}
                </style>
                <Deck className="deck" {...this.state} >
                    <Deck.Slide className="slide-1 bg-1">
                        <img src="http://placehold.it/350x150" alt=""/>
                    </Deck.Slide>
                    <Deck.Slide className='slide-2 bg-2'>
                        <img src="http://placehold.it/350x150" alt=""/>
                    </Deck.Slide>
                    <Deck.Slide className='slide-3 bg-3'>
                        <img src="http://placehold.it/350x150" alt=""/>
                    </Deck.Slide>
                    <Deck.Slide className='slide-4 bg-4'>
                        <img src="http://placehold.it/350x150" alt=""/>
                    </Deck.Slide>
                </Deck>
                <style jsx>{`
                :global(.deck) {
                    width: 100%;
                    height: 100vh;
                }
                :global(.bg-1){
                    color: #fff;
                    background-color: #337ab7;
                }
                :global(.bg-2){
                    background-color: #dff0d8;
                }
                :global(.bg-3){
                    background-color: #d9edf7;
                }
                :global(.bg-4){
                    background-color: #fcf8e3;
                }
                `}</style>
            </div>
        );
    }
}

export default MainComponent;
