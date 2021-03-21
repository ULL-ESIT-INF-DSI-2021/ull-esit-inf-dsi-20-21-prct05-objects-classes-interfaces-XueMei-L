import {Articulo} from './articulo'

export class GestorBibliografico{
    constructor(public articulos:Articulo){}

    /**
     * showArticle()
     * Mostrar la informacion basica de un articulo
     */
    public showArticle(){
        console.table(this.articulos);
    }

    /*Falta el gestor de bibligrafico */
    public Find(keywords:string[]){
        for(let key of keywords){

        }
    }


}