import React, {Component} from 'react';
import ProdeTable from './ProdeTable';
import axios from 'axios';

export default class ProdeApp extends Component{

    constructor(){
        super();
        this.state = {
            idProde: null,
            prodes: [],
            octavos: [],
            cuartos1: '',
            cuartos2: '',
            cuartos3: '',
            cuartos4: '',
            cuartos5: '',
            cuartos6: '',
            cuartos7: '',
            cuartos8: '',
            semi1: '',
            semi2: '',
            semi3: '',
            semi4: '',
            final1: '',
            final2: '',
            campeon: '',
            mount:0
        }
        
        this.handleFinal = this.handleFinal.bind(this);
        this.handleSemis = this.handleSemis.bind(this);
        this.handleCuartos = this.handleCuartos.bind(this);
        this.handleOctavos = this.handleOctavos.bind(this);
        this.save = this.save.bind(this);
        this.clear = this.clear.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.search = this.search.bind(this);
    }
    

    componentDidMount() {
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        var self = this;
        
        axios.get('/api/teams')
             .then(function (response) {
                self.setState({octavos: response.data})
             })
            .catch(function (error) {
               console.log(error);
            });
        axios.get('/api/prodes')
            .then(function (response) {
               self.setState({prodes: response.data})
            })
           .catch(function (error) {
              console.log(error);
           });
        if(localStorage.length == 0){
            self.setState({mount: 1});
        } 
        else {
            self.setState({
                cuartos1: localStorage.getItem('cuartos1'),
                cuartos2: localStorage.getItem('cuartos2'),
                cuartos3: localStorage.getItem('cuartos3'),
                cuartos4: localStorage.getItem('cuartos4'),
                cuartos5: localStorage.getItem('cuartos5'),
                cuartos6: localStorage.getItem('cuartos6'),
                cuartos7: localStorage.getItem('cuartos7'),
                cuartos8: localStorage.getItem('cuartos8'),
                semi1: localStorage.getItem('semi1'),
                semi2: localStorage.getItem('semi2'),
                semi3: localStorage.getItem('semi3'),
                semi4: localStorage.getItem('semi4'),
                final1: localStorage.getItem('final1'),
                final2: localStorage.getItem('final2'),
                campeon: localStorage.getItem('campeon'),
                mount: 1
            });
        }
    }

    save(){
        var self = this;
        axios.post('/api/prodes', {
            data: this.state
        }).then(function (response) {
            self.setState({
                prodes: response.data,
            });
            alert('Prode guardado.');
        }).catch(function (error) {
          console.log(error);
        });
    }

    update(){
        if(this.state.idProde!=null){
            axios.put('/api/prodes/'+this.state.idProde, {
                data: this.state
            }).then(function (response) {
                alert('Prode actualizado.');
            }).catch(function (error) {
                console.log(error);
            }); 
        }
        else alert('Prode no ha sido guardado.');

        
    }

    delete(){
        var self = this;
        if(this.state.idProde!=null){
            axios.delete('/api/prodes/'+this.state.idProde, {
            }).then(function (response) {
                self.setState({
                    prodes: response.data,
                });
                alert('Prode eliminado.');
            }).catch(function (error) {
                console.log(error);
            }); 
        }
        else alert('Prode no ha sido seleccionado.');
    }

    clear(){
        this.setState({
            cuartos1: '',
            cuartos2: '',
            cuartos3: '',
            cuartos4: '',
            cuartos5: '',
            cuartos6: '',
            cuartos7: '',
            cuartos8: '',
            semi1: '',
            semi2: '',
            semi3: '',
            semi4: '',
            final1: '',
            final2: '',
            campeon: ''
        });
    }

    search(e){
        var id = e.target.id;
        var self = this;
        axios.get('/api/prodes/'+id)
         .then(function (response) {
            self.setState({
                cuartos1: response.data[0]['cuartos1'],
                cuartos2: response.data[0]['cuartos2'],
                cuartos3: response.data[0]['cuartos3'],
                cuartos4: response.data[0]['cuartos4'],
                cuartos5: response.data[0]['cuartos5'],
                cuartos6: response.data[0]['cuartos6'],
                cuartos7: response.data[0]['cuartos7'],
                cuartos8: response.data[0]['cuartos8'],
                semi1: response.data[0]['semi1'],
                semi2: response.data[0]['semi2'],
                semi3: response.data[0]['semi3'],
                semi4: response.data[0]['semi4'],
                final1: response.data[0]['final1'],
                final2: response.data[0]['final2'],
                campeon: response.data[0]['campeon'],
                idProde: id
            })
         })
        .catch(function (error) {
           console.log(error);
        });
    }

    handleOctavos(index){
        var winner = this.state.octavos[index];
        var newIndex = Math.floor(index/2)+1; 
        var cuartosAux = 'cuartos'.concat(newIndex);
        this.setState(state => ({
            [cuartosAux.toString()]: state.cuartosAux = winner
        }));
        var semisAux = 'semi'.concat(Math.floor(index/4)+1);
        if(this.state[semisAux] != ''){
            this.handleCuartos(newIndex-1); 
        }    
    }

    handleCuartos(index){
        var newIndex = Math.floor(index/2)+1; 
        var winAux = 'cuartos'.concat(index+1);
        var winner = this.state[winAux];
        var semiAux = 'semi'.concat(newIndex);
        this.setState(state => ({
            [semiAux.toString()]: state.semiAux = winner
        }));
        var finalAux = 'final'.concat(Math.floor(index/4)+1);
        if(this.state[finalAux] != ''){
            this.handleSemis(newIndex-1); 
        }      
    }

    handleSemis(index){
        var newIndex = Math.floor(index/2)+1; 
        var winAux = 'semi'.concat(index+1);
        var winner = this.state[winAux];
        var semiAux = 'final'.concat(newIndex);
        this.setState(state => ({
            [semiAux.toString()]: state.semiAux = winner
        }));
        if(this.state.campeon != ''){
            this.handleFinal(newIndex-1); 
        }         
    }

    handleFinal(index){
        var winAux = 'final'.concat(index+1);
        var winner = this.state[winAux];
        this.setState(state => ({
            campeon: state.campeon = winner
        }));
    }

    render(){
        if (this.state.mount != 0){
            if (this.state.idProde != null){
                localStorage.clear();
            } else {
                localStorage.setItem('cuartos1', this.state.cuartos1);
                localStorage.setItem('cuartos2', this.state.cuartos2);
                localStorage.setItem('cuartos3', this.state.cuartos3);
                localStorage.setItem('cuartos4', this.state.cuartos4);
                localStorage.setItem('cuartos5', this.state.cuartos5);
                localStorage.setItem('cuartos6', this.state.cuartos6);
                localStorage.setItem('cuartos7', this.state.cuartos7);
                localStorage.setItem('cuartos8', this.state.cuartos8);
                localStorage.setItem('semi1', this.state.semi1);
                localStorage.setItem('semi2', this.state.semi2);
                localStorage.setItem('semi3', this.state.semi3);
                localStorage.setItem('semi4', this.state.semi4);
                localStorage.setItem('final1', this.state.final1);
                localStorage.setItem('final2', this.state.final2);
                localStorage.setItem('campeon', this.state.campeon);
            }
        }
        return(
        <div>
            <header className="hero">
                <div className="hero-wrap">
                    <p className="intro" id="intro">copa</p>
                        <h1 id="headline">libertadores</h1>
                        <p className="year"><i className="fa fa-star"></i> 2019 <i className="fa fa-star"></i></p>
                    <p>Prode</p>
                </div>
            </header>
            <section id="bracket">
                <div className="container">
                    <div className="split split-one">
                        <div className="round round-one">
                            <div className="round-details">Octavos<br/><span className="date">Julio 23-31</span></div>    
                            <ul className="matchup">
                                <button onClick={() => this.handleOctavos(0)} className="button">{this.state.octavos[0]}<span className="score"></span></button>
                                <button onClick={() => this.handleOctavos(1)} className="button">{this.state.octavos[1]}<span className="score"></span></button>
                            </ul>  
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleOctavos(2)} className="button">{this.state.octavos[2]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleOctavos(3)} className="button">{this.state.octavos[3]}<span className="score">&nbsp;</span></button>
                            </ul>   
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleOctavos(4)} className="button">{this.state.octavos[4]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleOctavos(5)} className="button">{this.state.octavos[5]}<span className="score">&nbsp;</span></button>
                            </ul>
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleOctavos(6)} className="button">{this.state.octavos[6]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleOctavos(7)} className="button">{this.state.octavos[7]}<span className="score">&nbsp;</span></button>
                            </ul>                                       
                        </div> 
                    
                        <div className="round round-two">
                            <br/>
                            <div className="round-details">Cuartos<br/><span className="date">Octubre 1</span></div>          
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleCuartos(0)} className="button">{this.state.cuartos1}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleCuartos(1)} className="button">{this.state.cuartos2}<span className="score">&nbsp;</span></button>
                            </ul>   
                            <ul className="matchup">
                                <button onClick={() => this.handleCuartos(2)} className="button">{this.state.cuartos3}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleCuartos(3)} className="button">{this.state.cuartos4}<span className="score">&nbsp;</span></button>
                            </ul>                                       
                        </div>       
                    </div> 

                    <div className="champion">
                        <br/><br/><br/> <br/> 
                        <div className="semis-l">
                            <div className="round-details">Semifinal 1 <br/><span className="date">Octubre 1</span></div>     
                            <ul className ="matchup championship">
                                <button onClick={() => this.handleSemis(0)} className="button">{this.state.semi1}<span className="vote-count">&nbsp;</span></button>
                                <button onClick={() => this.handleSemis(1)} className="button">{this.state.semi2}<span className="vote-count">&nbsp;</span></button>
                            </ul>
                        </div>
                        <br/><br/><br/><br/>
                        <div className="semis-r">       
                            <div className="round-details">Semifinal 2 <br/><span className="date">Octubre 1</span></div>     
                            <ul className ="matchup championship">
                                <button onClick={() => this.handleSemis(2)} className="button">{this.state.semi3}<span className="vote-count">&nbsp;</span></button>
                                <button onClick={() => this.handleSemis(3)} className="button">{this.state.semi4}<span className="vote-count">&nbsp;</span></button>
                            </ul>
                        </div>  
                        <div className="final">
                            <div className="round-details">Final <br/><span className="date">Noviembre 23</span></div>      
                            <ul className ="matchup championship">
                                <button onClick={() => this.handleFinal(0)} className="button">{this.state.final1}<span className="vote-count">&nbsp;</span></button>
                                <button onClick={() => this.handleFinal(1)} className="button">{this.state.final2}<span className="vote-count">&nbsp;</span></button>
                            </ul>
                        </div>
                        <div className="final">
                            <i className="fa fa-trophy"></i>
                            <div className="round-details">Campeon</div>      
                            <button disabled className="button">{this.state.campeon}<span className="vote-count">&nbsp;</span></button>  
                        </div>
                    </div>

                    <div className="split split-two">
                        <div className="round round-two">
                            <br/>
                            <div className="round-details">Cuartos<br/><span className="date">Octubre 1</span></div>                     
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleCuartos(4)} className="button">{this.state.cuartos5}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleCuartos(5)} className="button">{this.state.cuartos6}<span className="score">&nbsp;</span></button>
                            </ul>   
                            <ul className="matchup">
                                <button onClick={() => this.handleCuartos(6)} className="button">{this.state.cuartos7}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleCuartos(7)} className="button">{this.state.cuartos8}<span className="score">&nbsp;</span></button>
                            </ul>                                       
                        </div>   

                        <div className="round round-one current">
                            <div className="round-details">Octavos<br/><span className="date">Agosto 1</span></div>                     
                            <ul className="matchup">
                                <button onClick={() => this.handleOctavos(8)} className="button">{this.state.octavos[8]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleOctavos(9)} className="button">{this.state.octavos[9]}<span className="score">&nbsp;</span></button>
                            </ul>  
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleOctavos(10)} className="button">{this.state.octavos[10]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleOctavos(11)} className="button">{this.state.octavos[11]}<span className="score">&nbsp;</span></button>
                            </ul>  
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleOctavos(12)} className="button">{this.state.octavos[12]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleOctavos(13)} className="button">{this.state.octavos[13]}<span className="score">&nbsp;</span></button>
                            </ul>
                            <br/> <br/>
                            <ul className="matchup">
                                <button onClick={() => this.handleOctavos(14)} className="button">{this.state.octavos[14]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleOctavos(15)} className="button">{this.state.octavos[15]}<span className="score">&nbsp;</span></button>
                            </ul>                                       
                        </div>              
                    </div>
                </div>
                               
                <ProdeTable idProde={this.state.idProde}
                            prodes={this.state.prodes}
                            clear={this.clear}
                            save={this.save}
                            update={this.update}
                            delete={this.delete}
                            search={this.search}
                            />
                
            </section>
        </div>
        );
    }
}
