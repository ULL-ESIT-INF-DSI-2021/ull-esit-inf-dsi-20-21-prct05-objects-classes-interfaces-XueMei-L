/**
 * **Class Artiruclo:**
 * Information describing the article
 * @param titulo titulo del articulo
 * @param author autor o autores del articulo
 * @param email email de cada uno de los autores
 * @param keywords palabras claves o keywords
 * @param abstract Resumen o abstract del articulo
 * @param date Fecha de publicacion
 * @param editorial Editorial en la que se publicó el articulo
 * @param citas numero de veces que ha sido referenciado
 */
export class Articulo{
    private titulo:string[];
    private author:string[];
    private email:string[];
    private keywords:string[];
    private abstract:string[];
    private date:string[];
    private editorial:string[];
    private citas:number;

    constructor(titulo:string[], author:string[], email:string[], keywords:string[], abstract:string[], date:string[], editorial:string[], citas:number){
        this.titulo = titulo;
        this.author = author;
        this.email = email;
        this.keywords = keywords;
        this.abstract = abstract;
        this.date = date;
        this.editorial = editorial;
        this.citas = citas;
    }

    getTitulo(){ return this.titulo; }
    getauthor() { return this.author; }
    getEmail() { return this.email; }
    getKeyWords() { return this.keywords; }
    getAbstract() { return this.abstract; }
    getdate() { return this.date; }
    getEditorial() { return this.editorial; }
    getCitas() { return this.citas; }

    /**
     * **Method reference()**
     * @returns la referencia del articulo enformato APA para revista electronica sin DOI
     */
    public reference():string{
        let result:string = "";
        let i:number = 0;
        this.author.forEach((autor) =>{
            if(i == 0){
                result += autor;
            }else if(i == this.author.length - 1){
                result = result + ', y ' + autor + '.';
            }else{
                result = result + `,` + autor;
            }
            i++;
        });
        result += `(` + this.date + `).` + this.titulo + `.` + this.editorial + `.`;
        return result;
    }
}