import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  flightData = [];
  copyFlightData = [];
  data = {type: "oneWay"};

 
  constructor(private searchService:SearchService) { }
     
  ngOnInit() {
    this.searchService.getFlightData().subscribe((data)=>{
      this.flightData = data.json();
       this.copyFlightData = this.flightData.slice(0);
    })
  }
  selectType(type){
    console.log(type);
    this.data.type = type;
  }
  search(){
     var filterAray = [];
     var obj:any= this.data;
     this.copyFlightData = this.flightData.slice(0);
     console.log(obj);
    if(obj.type == "oneWay"){
    filterAray = this.copyFlightData.filter((item)=>{
         return item.source == obj.source && item.destination == obj.desitination;
    })
     this.copyFlightData = filterAray;
     console.log(this.flightData);
    }else if(this.data.type == "twoWay"){
     this.copyFlightData.forEach(function(item){
              if((item.source == obj.source && item.destination == obj.destination)||
              (item.source == obj.destination && item.destination == obj.source)){
                filterAray.push(item);
                
              }
      });
      this.copyFlightData = filterAray;
    }else{
      this.copyFlightData = this.flightData;
    }
  }
  

 
}
