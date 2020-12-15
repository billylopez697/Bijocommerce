import { Component, OnInit } from '@angular/core';
import{FormControl,FormControlName,FormGroup, Validators}  from '@angular/forms';
import{UploadServiceService} from '../Servicios/UploadService'
import {Observable} from 'rxjs';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  constructor( private uploadService:UploadServiceService) {}
  empresa:any= JSON.parse(sessionStorage.getItem('Admi'));
  imageform:FormGroup;
  image:any="../../assets/img/LADI.jpg";
  file:any;

  ngOnInit(): void {
    this.imageform=new FormGroup({
      name:new FormControl(null, Validators.required),
      producto:new FormControl(null, Validators.required),
      file:new FormControl(null,Validators.required),
      urlimg: new FormControl('../../assets/img/LADI.jpg',Validators.required),
      precio:new FormControl(null,Validators.required),
      cantidad: new FormControl(null,Validators.required),
    })
  }

  onfileChange(event){
    if(event.target.files && event.target.files.length>0){
      const file=event.target.files[0];
      if(file.type.includes("image")){
        const reader= new FileReader()
        reader.readAsDataURL(file);
        reader.onload=function load(){
          this.image=reader.result;
        }.bind(this);
        this.file=file;
      }else{
          console.log('error');
        }
      }

    }

  onSubmit(){
   const form=this.imageform;
   if(form.valid){
     this.uploadService.uploadImage(form.value,this.file,this.empresa._id).subscribe(res=>{
      console.log(res);
      this.imageform= this.imageform=new FormGroup({
      producto:new FormControl(null),
      name:new FormControl(null),
      file:new FormControl(null),
      precio:new FormControl(null),
      cantidad: new FormControl(null),

      })
      this.image="../../assets/img/LADI.jpg";
    },error=>{
      console.log(error);
    });

   }
  }
}
