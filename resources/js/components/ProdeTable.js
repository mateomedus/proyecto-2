import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class ProdeTable extends Component{

    constructor(props){
        super();
        this.state = {
            prodes: props.prodes
        }
    }

    

    render(){
        return(
            <div className="jumbotron" >
                <div className="col-sm-4" >
                    <h1>Prode numero: {this.props.idProde}</h1>
                    <button className="btn btn-secondary mb-2 mr-2 " onClick={this.props.clear}>Limpiar</button>
                    <button className="btn btn-success mb-2 mr-2 " onClick={this.props.save}>Guardar</button>
                    <button className="btn btn-primary mb-2 mr-2 " onClick={this.props.update}>Actualizar</button>
                    <button className="btn btn-danger mb-2 mr-2 " onClick={this.props.delete}>Borrar</button>
                </div>
                <div className="row">
                    <div className="col-sm myDiv Content">
                        <div className="list-group">
                            <h3 className="list-group-item list-group-item-action active">Mis prodes</h3>
                            {this.props.prodes.map((prode, i) =>
                                <button type="button"
                                    key = {prode.id} 
                                    id = {prode.id} 
                                    className="list-group-item list-group-item-action" 
                                    onClick={this.props.search}>
                                        Prode {prode.id} / 
                                        Creado: {prode.created_at}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );   
    }


    
                
}