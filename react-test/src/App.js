import React ,{Component} from 'react';

class App extends Component{

    constructor(props) {
        super(props);
        this.state ={
            items :[],
            isLoaded : false,
        }
    }
    componentDidMount() {
        fetch('http://newsitee.herokuapp.com/api/details/')
            .then(res => res.json())
            .then(json => {
               this.setState({
                   isLoaded : true,
                   items : json,
               })
            });
    }

    render() {

        var{ isLoaded , items } = this.state;

        if(!isLoaded){
            return <div>Loading...</div>;
        }

        else {


            return (
                <div className="App">
                  <ul>
                      {items.map(item => (
                          <li key={item.id}>
                              Name:{item.Name} || Last-Name :{item.Last_Name}
                              Age: {item.Age} || Phone : {item.phone} ||
                              Email : {item.Email} || Education : {item.Education} ||
                              Address : {item.Address}
                          </li>
                      ))};
                  </ul>
                </div>
            );
        }
    }
}
export default App;
