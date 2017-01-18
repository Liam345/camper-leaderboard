import React from 'react';
import TableRow from './table-row'

class Table extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            leaders:[]
        }
         this.AllTime();
        
    }
    



AllTime(){
    console.log("all time");

    var myInit ={
        method:"GET"
    };

    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime",myInit).then((response)=>{
        return response.json();
    }).then((data)=>{
       console.log(data);
        this.setState({
            leaders:data
        });
        console.log("leaders are"+this.state.leaders);
        
    });
    
}

RecentTime(){
console.log("recent time");

    var myInit ={
        method:"GET"
    };

    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent",myInit).then((response)=>{
        return response.json();
    }).then((data)=>{
       console.log(data);
        this.setState({
            leaders:data
        });
        console.log("leaders are"+this.state.leaders);
        
    });

}


    render(){
     {/* const tableItems = this.state.leaders.map((leader)=>{
    <TableRow leader={leader}/>
        });
        */}

        const newArr = [[1,2],[3,4],[4,5],[5,6],[6,7],[7,8]];
        const tableItems = this.state.leaders.map((item,index)=>{
           return <TableRow leader={item} key={index} count={index+1}/>
        })
        return(
            <div className="container">
            <table className="table table-striped ">
            <thead>
            <tr>
            <th>#</th>
            <th>Camper-Name</th>
            <th onClick={(event)=>this.RecentTime()}>Points in Past 30 days<span className="caret"></span></th>
            <th onClick={(event)=>this.AllTime()}>All time points</th>
            </tr>
            </thead>
            <tbody>
            
           {tableItems}
            </tbody>
            </table>
            </div>
        );
    }
}

export default Table;