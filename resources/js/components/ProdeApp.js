import React, {Component} from 'react';
import Axios from 'axios';
import { COPYFILE_FICLONE_FORCE } from 'constants';

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
            campeon: ''
        }
        
        this.handleWinner = this.handleWinner.bind(this);
        this.save = this.save.bind(this);
        this.clear = this.clear.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.adjust = this.adjust.bind(this);
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

    handleWinner = (winner,match) =>{
        switch(match) {
            case 1:
                this.setState(state => ({
                    cuartos1: state.cuartos1 = winner
                }));
                this.adjust(1);
                break;
            case 2:
                this.setState(state => ({
                    cuartos2: state.cuartos2 = winner
                }));
                this.adjust(1);
                break;
            case 3:
                this.setState(state => ({
                    cuartos3: state.cuartos3 = winner
                }));
                this.adjust(2);
                break;
            case 4:
                this.setState(state => ({
                    cuartos4: state.cuartos4 = winner
                }));
                this.adjust(2);
                break;
            case 5:
                this.setState(state => ({
                    cuartos5: state.cuartos5 = winner
                }));
                this.adjust(3);
                break;
            case 6:
                this.setState(state => ({
                    cuartos6: state.cuartos6 = winner
                }));
                this.adjust(3);
                break;
            case 7:
                this.setState(state => ({
                    cuartos7: state.cuartos7 = winner
                }));
                this.adjust(4);
                break;
            case 8:
                this.setState(state => ({
                    cuartos8: state.cuartos8 = winner
                }));
                this.adjust(4);
                break;
            case 9:
                this.setState(state => ({
                    semi1: state.semi1 = winner
                }));
                this.adjust(5);
                break;
            case 10:
                this.setState(state => ({
                    semi2: state.semi2 = winner
                }));
                this.adjust(5);
                break;
            case 11:
                this.setState(state => ({
                    semi3: state.semi3 = winner
                }));
                this.adjust(6);
                break;
            case 12:
                this.setState(state => ({
                    semi4: state.semi4 = winner
                }));
                this.adjust(6);
                break;
            case 13:
                this.setState(state => ({
                    final1: state.final1 = winner
                }));
                this.adjust(7);
                break;
            case 14:
                this.setState(state => ({
                    final2: state.final2 = winner
                }));
                this.adjust(7);
                break;
            case 15:
                this.setState(state => ({
                    campeon: state.campeon = winner
                }));
                break;
        }
    }
    
    adjust = (partido) =>{
        switch(partido) {
            case 1:
                if(this.state.semi1!=''){
                    this.setState(state => ({
                        semi1: state.semi1 = ''
                    }));
                    if(this.state.final1!=''){
                        this.setState(state => ({
                            final1: state.final1 = ''
                        }));
                        if(this.state.campeon!='')
                            this.setState(state => ({
                                campeon: state.campeon = ''
                            }));
                    }
                }
                break;
            case 2:
                if(this.state.semi2!=''){
                    this.setState(state => ({
                        semi2: state.semi2 = ''
                    }));
                    if(this.state.final1!=''){
                        this.setState(state => ({
                            final1: state.final1 = ''
                        }));
                        if(this.state.campeon!='')
                            this.setState(state => ({
                                campeon: state.campeon = ''
                            }));
                    }
                }
                break;
            case 3:
                if(this.state.semi3!=''){
                    this.setState(state => ({
                        semi3: state.semi3 = ''
                    }));
                    if(this.state.final3!=''){
                        this.setState(state => ({
                            final2: state.final2 = ''
                        }));
                        if(this.state.campeon!='')
                            this.setState(state => ({
                                campeon: state.campeon = ''
                            }));
                    }
                }
                break;
            case 4:
                if(this.state.semi4!=''){
                    this.setState(state => ({
                        semi4: state.semi4 = ''
                    }));
                    if(this.state.final4!=''){
                        this.setState(state => ({
                            final2: state.final2 = ''
                        }));
                        if(this.state.campeon!='')
                            this.setState(state => ({
                                campeon: state.campeon = ''
                            }));
                    }
                }
                break;
            case 5:
                if(this.state.final1!=''){
                    this.setState(state => ({
                        final1: state.final1 = ''
                    }));
                    if(this.state.campeon!='')
                            this.setState(state => ({
                                campeon: state.campeon = ''
                            }));
                }
                break;
            case 6:
                if(this.state.final2!=''){
                    this.setState(state => ({
                        final2: state.final2 = ''
                    }));
                    if(this.state.campeon!='')
                            this.setState(state => ({
                                campeon: state.campeon = ''
                            }));
                }
                break;
            case 7:
                if(this.state.campeon!='')
                        this.setState(state => ({
                            campeon: state.campeon = ''
                        }));
                break;
        }
    }

    render(){
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
                                <button onClick={() => this.handleWinner(this.state.octavos[0],1)} className="button">{this.state.octavos[0]}<span className="score"></span></button>
                                <button onClick={() => this.handleWinner(this.state.octavos[1],1)} className="button">{this.state.octavos[1]}<span className="score"></span></button>
                            </ul>  
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleWinner(this.state.octavos[2],2)} className="button">{this.state.octavos[2]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.octavos[3],2)} className="button">{this.state.octavos[3]}<span className="score">&nbsp;</span></button>
                            </ul>   
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleWinner(this.state.octavos[4],3)} className="button">{this.state.octavos[4]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.octavos[5],3)} className="button">{this.state.octavos[5]}<span className="score">&nbsp;</span></button>
                            </ul>
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleWinner(this.state.octavos[6],4)} className="button">{this.state.octavos[6]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.octavos[7],4)} className="button">{this.state.octavos[7]}<span className="score">&nbsp;</span></button>
                            </ul>                                       
                        </div> 
                    
                        <div className="round round-two">
                            <br/>
                            <div className="round-details">Cuartos<br/><span className="date">Octubre 1</span></div>          
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleWinner(this.state.cuartos1,9)} className="button">{this.state.cuartos1}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.cuartos2,9)} className="button">{this.state.cuartos2}<span className="score">&nbsp;</span></button>
                            </ul>   
                            <ul className="matchup">
                                <button onClick={() => this.handleWinner(this.state.cuartos3,10)} className="button">{this.state.cuartos3}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.cuartos4,10)} className="button">{this.state.cuartos4}<span className="score">&nbsp;</span></button>
                            </ul>                                       
                        </div>       
                    </div> 

                    <div className="champion">
                        <br/><br/><br/> <br/> 
                        <div className="semis-l">
                            <div className="round-details">Semifinal 1 <br/><span className="date">Octubre 1</span></div>     
                            <ul className ="matchup championship">
                                <button onClick={() => this.handleWinner(this.state.semi1,13)} className="button">{this.state.semi1}<span className="vote-count">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.semi2,13)} className="button">{this.state.semi2}<span className="vote-count">&nbsp;</span></button>
                            </ul>
                        </div>
                        <br/><br/><br/><br/>
                        <div className="semis-r">       
                            <div className="round-details">Semifinal 2 <br/><span className="date">Octubre 1</span></div>     
                            <ul className ="matchup championship">
                                <button onClick={() => this.handleWinner(this.state.semi3,14)} className="button">{this.state.semi3}<span className="vote-count">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.semi4,14)} className="button">{this.state.semi4}<span className="vote-count">&nbsp;</span></button>
                            </ul>
                        </div>  
                        <div className="final">
                            <div className="round-details">Final <br/><span className="date">Noviembre 23</span></div>      
                            <ul className ="matchup championship">
                                <button onClick={() => this.handleWinner(this.state.final1,15)} className="button">{this.state.final1}<span className="vote-count">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.final2,15)} className="button">{this.state.final2}<span className="vote-count">&nbsp;</span></button>
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
                                <button onClick={() => this.handleWinner(this.state.cuartos5,11)} className="button">{this.state.cuartos5}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.cuartos6,11)} className="button">{this.state.cuartos6}<span className="score">&nbsp;</span></button>
                            </ul>   
                            <ul className="matchup">
                                <button onClick={() => this.handleWinner(this.state.cuartos7,12)} className="button">{this.state.cuartos7}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.cuartos8,12)} className="button">{this.state.cuartos8}<span className="score">&nbsp;</span></button>
                            </ul>                                       
                        </div>   

                        <div className="round round-one current">
                            <div className="round-details">Octavos<br/><span className="date">Agosto 1</span></div>                     
                            <ul className="matchup">
                                <button onClick={() => this.handleWinner(this.state.octavos[8],5)} className="button">{this.state.octavos[8]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.octavos[9],5)} className="button">{this.state.octavos[9]}<span className="score">&nbsp;</span></button>
                            </ul>  
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleWinner(this.state.octavos[10],6)} className="button">{this.state.octavos[10]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.octavos[11],6)} className="button">{this.state.octavos[11]}<span className="score">&nbsp;</span></button>
                            </ul>  
                            <br/> <br/> 
                            <ul className="matchup">
                                <button onClick={() => this.handleWinner(this.state.octavos[12],7)} className="button">{this.state.octavos[12]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.octavos[13],7)} className="button">{this.state.octavos[13]}<span className="score">&nbsp;</span></button>
                            </ul>
                            <br/> <br/>
                            <ul className="matchup">
                                <button onClick={() => this.handleWinner(this.state.octavos[14],8)} className="button">{this.state.octavos[14]}<span className="score">&nbsp;</span></button>
                                <button onClick={() => this.handleWinner(this.state.octavos[15],8)} className="button">{this.state.octavos[15]}<span className="score">&nbsp;</span></button>
                            </ul>                                       
                        </div>              
                    </div>
                </div>
                <div className="jumbotron" >
                    <div className="col-sm-4" >
                        <h1>Prode numero: {this.state.idProde}</h1>
                        <button className="btn btn-secondary mb-2 mr-2 " onClick={this.clear}>Limpiar</button>
                        <button className="btn btn-success mb-2 mr-2 " onClick={this.save}>Guardar</button>
                        <button className="btn btn-primary mb-2 mr-2 " onClick={this.update}>Actualizar</button>
                        <button className="btn btn-danger mb-2 mr-2 " onClick={this.delete}>Borrar</button>
                    </div>
                    <div className="row">
                        <div className="col-sm myDiv Content">
                            <div className="list-group">
                                <h3 className="list-group-item list-group-item-action active">Mis prodes</h3>
                                {this.state.prodes.map((prode, i) =>
                                    <button type="button"
                                        key = {prode.id}
                                        id = {prode.id} 
                                        className="list-group-item list-group-item-action" 
                                        onClick={this.search}>
                                            Prode {prode.id} / 
                                            Creado: {prode.created_at}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
            </section>
        </div>
        );
    }
}
