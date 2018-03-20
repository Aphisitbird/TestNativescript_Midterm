import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'todoLists',
    moduleId: module.id,
    templateUrl: 'todoLists.component.html'
})

export class TodoListsComponent implements OnInit{
    oneWay: String;
    trafixs = [
        {
            "ROUTE": 1,
            "CONTROL": 102,
            "STATION_ID": 6,
            "NAMET": "แยก คปอ. - สนามกีฬาธูปะเตมีย์",
            "NAMEE": "KO PO O INTERSECTION - THUPATEMEE STADIUM",
            "DIV_NUM": 13,
            "DISTRICT": "ขท.กรุงเทพ",
            "ENG_DIST": "BANGKOK HIGHWAY DISTRICT",
            "KM1": "25+556",
            "TYPE": "C",
            "CODE": 411,
            "NOD": 3,
            "CHANGWAT": "กรุงเทพมหานคร",
            "ENG_CHANG": "BANGKOK",
            "VEH1_T": 53,
            "VEH2_T": 8335,
            "VEH3_T": 34098,
            "VEH4_T": 11223,
            "VEH5_T": 43,
            "VEH6_T": 1055,
            "VEH7_T": 1633,
            "VEH8_T": 14101,
            "VEH9_TVEH10_T": 491,
            "VEH11_T": 204,
            "VEH12_T": 130,
            "VEH13_T": 37,
            "VEH_T": 6,
            "HVTOT": 63015,
            "FIELD30": 5.634
        },
        {
            "ROUTE": 1,
            "CONTROL": 201,
            "STATION_ID": 76,
            "NAMET": "สนามกีฬาธูปะเตมีย์ - ต่างระดับคลองหลวง",
            "NAMEE": "THUPATEMEE STADIUM - KHLONG LUANG INTERCHANGE",
            "DIV_NUM": 13,
            "DISTRICT": "ขท.ปทุมธานี",
            "ENG_DIST": "PATHUM THANI HIGHWAY DISTRICT",
            "KM1": "35+550",
            "TYPE": "C",
            "CODE": 416,
            "NOD": 36,
            "CHANGWAT": "ปทุมธานี",
            "ENG_CHANG": "PATHUM THANI",
            "VEH1_T": 316,
            "VEH2_T": 13215,
            "VEH3_T": 169899,
            "VEH4_T": 32508,
            "VEH5_T": 15953,
            "VEH6_T": 3713,
            "VEH7_T": 10722,
            "VEH8_T": 62329,
            "VEH9_TVEH10_T": 7976,
            "VEH11_T": 3408,
            "VEH12_T": 2255,
            "VEH13_T": 2018,
            "VEH_T": 26,
            "HVTOT": 310781,
            "FIELD30": 9.683
        },{
            "ROUTE": 1,
            "CONTROL": 202,
            "STATION_ID": 72,
            "NAMET": "ต่างระดับคลองหลวง - ประตูน้ำพระอินทร์",
            "NAMEE": "KHLONG LUANG INTERCHANG - PRATU NAM PHRA IN",
            "DIV_NUM": 13,
            "DISTRICT": "ขท.ปทุมธานี",
            "ENG_DIST": "PATHUM THANI HIGHWAY DISTRICT",
            "KM1": "48+100",
            "TYPE": "C",
            "CODE": 416,
            "NOD": 36,
            "CHANGWAT": "ปทุมธานี",
            "ENG_CHANG": "PATHUM THANI",
            "VEH1_T": 33,
            "VEH2_T": 23196,
            "VEH3_T": 61319,
            "VEH4_T": 32148,
            "VEH5_T": 4045,
            "VEH6_T": 4954,
            "VEH7_T": 13096,
            "VEH8_T": 37420,
            "VEH9_TVEH10_T": 14176,
            "VEH11_T": 9514,
            "VEH12_T": 4545,
            "VEH13_T": 3868,
            "VEH_T": 13,
            "HVTOT": 185085,
            "FIELD30": 27.097
         },
    ]
    constructor(){
 
    }

    ngOnInit(){

    }

    add(word){
        alert("ค้นหาคำว่า ="+word);
    }

    onItemTap(args){
        alert(args);
    }


}