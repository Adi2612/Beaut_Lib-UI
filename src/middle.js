import React from 'react';
import Typography from '@material-ui/core/Typography';
import './middle.css';


class Middle extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        imageurl : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdsuXtQbNeKsYMiQxWx6VI0PFdAilpmGASWbyf4pTTavnIOekTQ" , 
                    "https://m.media-amazon.com/images/G/01/amazon-charts/book-images/600/asin/B01L1CEZ6K.jpg",
                    "https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale",
                    "https://marketplace.canva.com/MACXJdNnuMc/2/0/thumbnail_large/canva-white-graphic-design-book-cover-MACXJdNnuMc.jpg",
                    "https://marketplace.canva.com/MACB5G7TBAg/2/0/thumbnail_large/canva-brown-building-business-book-cover-MACB5G7TBAg.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXwZk0k1OS67EXsworhPlAecLPCgelL40kE4MZvFucOiLRHGR",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1f9ePG-skYFkR16RdBG7AlY4bPLvkEWuJYAE02Q1d2dBzHJ_",
                    "https://i.pinimg.com/236x/0c/8b/0e/0c8b0e4a5f02f417060e7356222e3f1b--best-book-covers-beautiful-book-covers.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKphozdoXzbhLzN4ud0Kq55RhtXfO4KOmoYDNHICPfwRRl7OkXjA",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvD7I6zo5PuqvqsXYCrDUbB1KQmdvMLyKmaRhFqzg5BMW6xnWzQ",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvzfGhRgj1dNGu2S4slXhT7tgAeyCGN3SSLL1yiPxvhHWgd7y8w",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvzfGhRgj1dNGu2S4slXhT7tgAeyCGN3SSLL1yiPxvhHWgd7y8w",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTwA7B4hUJqMu0oAjFP3AuZ35q5iTDNsCnOO2dAq8rajh3CMkkqQ",
                    "https://static1.squarespace.com/static/57869f07d1758e29ae647588/t/579a8292b8a79bd38b848cbf/1537840417965/",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOs5W4s62WdH4mtq6VJhWsK3VaaaRf1rcyeeqeje6INsL-EfhWlQ",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0fnkmhSeA41w63Xm2_YQEWSA7-lFkS7oVSRPAzqVCw689Etrrg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5-J7Ccbkzm59njU5zOvMDBzUbWlhWgV6OXKo-ikSFrTlXpPt2Q"
                    ],

        visibleOpen : false, 
        stateVisible : Array(20).fill("none"),           
      }
    }
    close = (i) => {
      var N = Array(20).fill("none");
      this.setState({
        stateVisible : N,
      })

    }

    BoxOther = () => {
        var N = this.state.imageurl.length;
        const data = Array.apply(null, {length: N}).map(Number.call, Number);
        const items = data.map((i) => 
            <div className="block" key={i.toString()} style={{display : this.state.stateVisible[i]}}>
              <div className="_boxother"  >
                <div className="userBar">
                    <div style={{flexDirection : "row" , alignItems : "center"}}>
                        <h2> Book Title {i} </h2>
                    </div>  
                    <div  style={{ flexDirection : "row" , alignItems : "center",  }}>
                        <img className="close_button" src={require('./assets/close.png')} style={{width : 60 , height : 60 }} onClick={() => this.close(i)}/>
                    </div>
                </div> 
                <div className="image_main" >
                <img className="image_edit" src={this.state.imageurl[i]} /> 
                </div> 
              </div>
            </div>
          )

         return items; 
    }
    
    Listed = () => {
        var N = this.state.imageurl.length;
        const data = Array.apply(null, {length: N}).map(Number.call, Number);
        const items = data.map((i) => 
          <div className="tile" onClick={this.Some} key={i.toString()} >
        <div className="tile__media">
          <img className="tile__img" src={this.state.imageurl[i]}  alt=""  />
        </div>
        <div className="tile__details">
          <div className="tile__title">
            <h4> Book Title {i} </h4>
          </div>
            <img class="down_title" src={require('./assets/down.png')} style={{display : 'inline' ,  }} onClick={() => this.Open(i) }/>

        </div>
         
      </div>
          )

         return items; 
    }

    Open = (i) => {
      var L =  Array(20).fill("none");
      L[i] = "block";
      this.setState({
        stateVisible : L
      })
      

    }
    Some = () => {
      var N = this.state.imageurl.length;
        const data = Array.apply(null, {length: N}).map(Number.call, Number);
         }

    render()
    {   

       const box = this.BoxOther() ;


       const items = this.Listed();
       return (
        <div className="contain">
          <Typography variant="h4" color="inherit">
            {this.props.title}
          </Typography>

          <div className="row">
              <div className="row__inner">
                  {items}
              </div>
            {box}
          </div>  
          
      </div>
        )

}
};



export default Middle;