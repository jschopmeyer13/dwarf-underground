import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clickbait extends Component {
    render(){
        const links = 
        [
            "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
            "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
            "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
            "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg"
        ];
        const alts = ["orc", "mountain", "gold", "hobbit",];
        const imageTags = links.map((links, index) => 
        (<img src={links} alt={alts.slice(index,index+1)}/>));

        const info = [
            "Single Orcs in Indianapolis",
            "You won't believe what's under this mountain",
            "Mine 20% more gold with One Weird Trick",
            "Surprise for Indiana Hobbits born before 1999"
        ];
        const infoTags = info.map((info) => <p> {info} </p>);
        const linkTags = imageTags.map((imageTags,index) =>
            <div className = "small-6 medium-3 columns other-article">
                <a href ="#"> {imageTags} {infoTags.slice(index, index+1)} </a>
            </div>
        );
        console.log(linkTags);
        return (
            
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                {/* <div className="small-6 medium-3 columns other-article">  */}
                    {linkTags}
                {/* </div> */}
            </div>
        )
    }
}
  
//   class App extends React.Component {
//     constructor() {
//         super();
//         const links = 
//         [
//             "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
//             "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
//             "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
//             "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg"
//         ];
//         const alts = ["orc", "mountain", "gold", "hobbit",];
        
//         const linkTags = links.map((links) => <img src={links} alt={alts}/>);
//         console.log(linkTags);
//     }
    
    
//     render() {
//       return (
       
//             <a href ="#">
//                 { this.linkTags.map(links => {links})};
//             </a>
      
//       )
//     }
//   }



export default Clickbait;