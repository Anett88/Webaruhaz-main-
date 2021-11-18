class Kosar{
    constructor(){
        this.kosarTomb=[];
        this.kosarElem=$("#kosaram");
        //torles
        $(".kosar").on("click", ".torles",(event)=>{
            let ID=$(event.target).attr("dataid");
            console.log(ID);
            this.kosarTomb.splice(ID,1);
            localStorage.setItem("kosar",JSON.stringify(this.kosarTomb));
            this.megjelenit();
            
        }); 

        this.kosarTomb=JSON.parse(localStorage.getItem("kosar"));
        this.megjelenit();
        
    }
    
    
    setElemKosarba(elem){
        this.kosarTomb.push(elem);
        localStorage.setItem("kosar",JSON.stringify(this.kosarTomb));
        this.megjelenit();
        
    }

    /* táblázatba*/
    megjelenit(){
         
        $("#kosaram").empty();

        $("#kosaram").append("<table>");

        

        let txt = "<tr>";
        

        for (let index = 0; index < this.kosarTomb.length; index++) {
            txt+="<td>"+this.kosarTomb[index]["nev"]+"</td>";
            txt+="<td>"+this.kosarTomb[index]["ar"]+"</td>";
            txt+="<td>"+"<button class=torles dataid='"+index+"'>X</button>"+"</td>";
            txt += "</tr>";

        }
        

        
     
        $("#kosaram table").append(txt);

      /*   this.torol = this.elem.children('button'); */


        //nyil=> this kiirja a teljes osztályt (közvetlen hatókör) teljes 

        //function this egy konrét elemet,azt amire pl rákkatintottunk


  

    }


  


    
    
    
}