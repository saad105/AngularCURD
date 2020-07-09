import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { EmployeeModel } from '../model/employee';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() options: any;
  isDataLoaded : boolean = false;


  constructor(private apiService: ApiService,public router: Router) {
    console.log(this.options);

  }

  employee: EmployeeModel[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  ngOnInit(): void {
    const scope = this;
    this.options.dataTableOptions.columns.push({ title: "Action", data: "id" });
    this.options.columnDefs = [
      {
        targets: 2,
        render: function (data, type, row) {
          return `<span class="text-center">${data}</span>`;
        }
      },
      {
        targets: 3,
        render: function (data, type, row) {
          return `<span class="text-center">${data}</span>`;
        }
      },
      {
        targets: 4,
        render: function (data, type, row) {
          return `                        
          <button class="edit btn btn-primary" title = "Edit"> Edit </button>
          <button class="delete btn btn-danger" title = "Delete"> Delete </button>`;
        },
        fnCreatedCell: function (nTd, sData, oData, iRow, iCol) {
          $(nTd).find('button.edit').on('click', () => {
            console.log("edit", oData, "  ", sData);
            //functions.openModalIPM(sData);
            editData(oData);
          });
          $(nTd).find('button.delete').on('click', () => {
            console.log("delete button clicked", oData);
            deleteData(oData.id);
          });
        }
      }

    ]


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      responsive: true,
      lengthChange: false,
      data: [],
      columns: this.options.dataTableOptions.columns,
      columnDefs: this.options.columnDefs,

    };

    this.apiService.getData(this.options.baseUrl + this.options.Get)
      .subscribe(result => {
        this.dtOptions.data = result.data;
        console.log(result.data);
        this.dtTrigger.next();
        this.isDataLoaded = true;
      })

      function editData(data){
        localStorage.removeItem('empData');
        localStorage.setItem('empData', JSON.stringify(data));
        scope.router.navigate(['edit-employee']);
      }
      function deleteData(id:number) {
        console.log(id);
        scope.apiService.deleteData(scope.options.baseUrl+scope.options.delete,id)
        .subscribe(result => {
            if(result.message == "success"){
              alert("Record has been deleted successfully..");
            }
            else{
              alert("Failed to delete the record..");
            }
            
         
        })
      }

   
  }
  

  addemployee(){
    this.router.navigate(['add-employee']);
  }
}
