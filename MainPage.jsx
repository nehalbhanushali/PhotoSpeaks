import React from 'react';

import SiteHeader from './SiteHeader.jsx';
import PictureCard from './PictureCard.jsx';



class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {pi: "http://image.shutterstock.com/z/stock-photo-a-seagull-at-brighton-uk-shallow-depth-of-field-focus-on-the-eyes-224398849.jpg", da: "06//13/16", us: "mpontikes", av: "https://assets.entrepreneur.com/static/1425479423-vince-vaughn-appearing-free-cheesy-stock-images-you-can-download-getty-3.jpg", ca:"This is my masterpiece"},
                {pi: "https://s3.amazonaws.com/infinum.web.production/repository_items/files/000/000/429/original/1.png?1413359570", da: "05//19/16", us: "le232sz", av: "https://avatars0.githubusercontent.com/u/19177617?v=3", ca:"Please like this picture"}
            ]
        }
        this.handleUnshiftArray = this.handleUnshiftArray.bind(this);
    }
    
    handleUnshiftArray(){
        const datas = this.state.data;
        datas.unshift({pi: "https://s3.amazonaws.com/infinum.web.production/repository_items/files/000/000/429/original/1.png?1413359570", da: "05//19/16", us: "le232sz", av: "https://avatars0.githubusercontent.com/u/19177617?v=3", ca:"Please like this picture"});
        this.setState({data: datas});
    }

    render() {
         var thecars = this.state.data.map(function(picture) {
            return <PictureCard 
                    pic={picture.pi}
                    puser={picture.us}
                    pavi={picture.av}
                    pcaption={picture.ca}
                    pdate={picture.da}
                />;
        });
        console.log(thecars);

        return (
            <div>
                <SiteHeader onShiftArray={this.handleUnshiftArray}/>
                {thecars}
            </div>
        );
    }
}

export default MainPage;