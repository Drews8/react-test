import React, {Component} from "react";
import classes from "./Main.module.css";
import Aside from "../../components/Aside/Aside";
import Body from "../../components/Body/Body";

class Main extends Component {
    state = {
        usersData: [
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {id: 1, firstName: 'Mike', lastName: "Wazowski", imgUrl: 'https://i.imgflip.com/3bkcig.jpg', messages: [],},
            {
                id: 2,
                firstName: 'John',
                lastName: "Wick",
                imgUrl: 'https://vignette.wikia.nocookie.net/filmguide/images/3/33/John_Wick.jpg/revision/latest?cb=20190519024442',
                messages:
                    [
                        {
                            'sender': 'user',
                            'date': '02/12/2019',
                            'message': 'Hi I read your book, it\'s amazing !'
                        },
                        {
                            'sender': 'author',
                            'date': '03/12/2019',
                            'message': 'Thank you, it\'s my pleasure.}'
                        },
                    ],
            },
            {
                id: 3,
                firstName: 'Andrii',
                lastName: "Prokhorenko",
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScyMb0DAxDXzdCn_H2ssqWjLVVxnfybkN5HBHFcElu5KgeLbvp',
                messages: [],
            },
            {
                id: 4,
                firstName: 'James',
                lastName: "Sullivan",
                imgUrl: 'https://i.pinimg.com/originals/91/33/d4/9133d4205821f17cff0efa4d95b1d650.png',
                messages: [],
            },
        ]
    };

    render() {
        return (
            <div className={classes.Main}>
                <Aside usersData={this.state.usersData}/>
                <Body/>
            </div>
        )
    }
}

export default Main;