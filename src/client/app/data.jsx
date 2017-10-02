import React from 'react';
import AwesomeComponent from './AwesomeComponent.jsx';

import SearchInput, {createFilter} from 'react-search-input'



class Gallery extends React.Component {

constructor(props){
        super(props);
        this.state = { key : '',
        searchToggle: false,
         data : [

{
  im:"http://vignette1.wikia.nocookie.net/gameofthrones/images/e/e9/Arya_Stark_4.jpg/revision/latest?cb=20140428152515",
  postbyname:"Jon Snow",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"Bravos",
  hashTag:"#GOT",
  comments:
    [
    { commentbyname: "Jaquen Hagar", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"Finally a girl is no one" },
      { commentbyname: "Arya Stark", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"A girl is Arya Stark of Winterfell" },
     
    ]
},
         {
  im:"http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg",
  postbyname:"Phoebe Buffay",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"Thing",
  hashTag:"#Photography",
  comments:
    [
      { commentbyname: "Monica Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"sexy !" },
     { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"awesome !" },
    ]
},
{
  im:"http://cin.h-cdn.co/assets/15/41/980x490/landscape-1444235843-picmonkey-collage2.jpg",
  postbyname:"Monica Geller",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"success show",
  hashTag:"#Fashion",
  comments:
    [
      { commentbyname: "Ross Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"sexy !" },
     { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"awesome !" },
    ]
}
,

  {im:"http://exploregram.com/wp-content/uploads/2015/02/Happy-Valentines-Day-everyone-Breakfast-were-waffles-with-lots-of-red-toppings-strawbs-bluebs-pomegr.jpg",postbyname:"Tim Cook",postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  postbyname:"Chandler Bing",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"Thing",
  hashTag:"#Food",
  comments:
    [
      { commentbyname: "Jannice", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"Oh my Goddd !" },
     { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"ooo !" },
    ]
},
{
  im:"https://metrouk2.files.wordpress.com/2016/06/battle-of-bastards.jpg?w=748&h=466&crop=1",
  postbyname:"Sansa Stark",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"Battle of bastards",
  hashTag:"#GOT",
  comments:
    [
      { commentbyname: "Yigrette", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"You know nothing Jon Snow!" },
     { commentbyname: "Ramsey Snow", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"See you tomorrow.. Bastard!" },
    ]
},]
        }
       this.handleTagSearch = this.handleTagSearch.bind(this);
      
     
    }



handleTagSearch(tagForSearch,searchToggle){

//alert("you looking for "+tagForSearch+" "+searchToggle);
this.setState({key: tagForSearch , searchToggle : searchToggle});

}

handleUnshiftData(url,tag){

 
       console.log(" url pop>>  "+url + " tag>> "+ tag+" name>> "+this.props.username);
 this.state.posts.push({
  im:{url},
  postbyname:"fh",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"New Post",
  hashTag:{tag},
  comments:
    [
      
    ]
});
}

render(){



const KEYS_TO_FILTERS = ['hashTag'];
const filteredPostData = this.state.data.filter(createFilter(this.state.key, KEYS_TO_FILTERS));  
  //console.log(" key>>  "+this.state.key + " on ? "+ this.state.searchToggle);
var username = this.props.username;
//var url = this.props.postURL;
//var tag = this.props.postTag;
var searchFunction = this.handleTagSearch;



  //console.log("u name is : "+this.props.username);
/*var allPosts =this.state.data.map(function(pics){
return <div><AwesomeComponent tagForSearch = {searchFunction} userLoggegIn = {username} pic={pics.im} postbyname = {pics.postbyname} postbyavatar = {pics.postbyavatar} title={pics.ti} notes={pics.hashTag} comments = {pics.comments}/></div>
});*/

var filteredPosts = filteredPostData.map(function(pics){
return <div><AwesomeComponent tagForSearch = {searchFunction} userLoggegIn = {username} pic={pics.im} postbyname = {pics.postbyname} postbyavatar = {pics.postbyavatar} title={pics.ti} notes={pics.hashTag} comments = {pics.comments}/></div>
});




return(
  <div> {filteredPosts} 

  </div>
);}



  }

  export default Gallery;






