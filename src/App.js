import React, { Component, Fragment} from 'react';

import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/Search';
import { Alert } from './components/layout/Alert';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { About } from './components/pages/About';
import User from './components/users/User'


class App extends Component {

  state={
    users:[],
    loading:false,
    alert:null,
    user:{},
    repos:[]
  }
 
  //async componentDidMount() {
//
 //   this.setState({ loading: true });
//    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
 //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
 //   this.setState({ users: res.data, loading: false });
 // }
//Searching Users
searchUsers = async (text) =>
{
 this.setState({loading:true});
 const res=await axios.get(`https://api.github.com/search/users?q=${text}`);
 this.setState({users:res.data.items});
 this.setState({loading:false});
}

//Fetching Data for a single User
getUser=async(username)=>
{
  this.setState({loading:true});
 const res=await axios.get(`https://api.github.com/users/${username}`);
 this.setState({user:res.data});
 this.setState({loading:false});
}

//Fetching Repos for a single User
getUserRepos=async(username)=>
{
  this.setState({loading:true});
 const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
 this.setState({repos:res.data});
 this.setState({loading:false});
}

clearUsers =()=>{
  this.setState({users:[]});
}

setAlert=(message,type)=>{

  this.setState({alert:{message:message,type:type}});
  setTimeout(()=>this.setState({alert:null}),5000);
}

  render()
  {
    
   
  return (
    <Router>
    <div className="App">

      <Navbar title=' Github Explorer' icon="fab fa-github"></Navbar>
      
      <Switch>
        <Route exact path='/' render={props=>(
      <Fragment>
      <Alert alert={this.state.alert}/>
      

      <div className='container'>
        <Search 
        searchUsers={this.searchUsers}
        clearUsers={this.clearUsers}
        showClear={this.state.users.length>0?true:false}
        setAlert={this.setAlert}/>
      <Users users={this.state.users} loading={this.state.loading}></Users>
      </div>
      </Fragment>
     )}/>
       
      
      <Route exact path='/about' component={About}/>
     
      <Route exact path='/user/:login' render={props=>(
        <User {...props} getUser={this.getUser}
        getUserRepos={this.getUserRepos}
        repos={this.state.repos}
         user={this.state.user}></User>
      )} />

      </Switch>
      </div>
     </Router>
  );
  }
}

export default App;
