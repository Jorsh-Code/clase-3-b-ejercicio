import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

enum PAISES{
  'MEXICO',
  'JAPON',
  'RUSIA'
}

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit, AfterViewInit {

  @ViewChild('text',{static:true}) titulo!: ElementRef


  public PAISES = PAISES;

  public flag : boolean = true;

  public paises : any[] = [
    {
      id:1,
      nombre: 'Mexico'
    },
    {
      id:2,
      nombre: 'Japon'
    },
    {
      id:3,
      nombre: 'Rusia'
    }
  ];

  
  public platillos : any[] = [
    {
    platillo: 'Taco',
    pais: PAISES.MEXICO
  },
  {
    platillo: 'Pambazo',
    pais: PAISES.MEXICO
  },
  {
    platillo: 'Sushi',
    pais: PAISES.JAPON
  },
  {
    platillo: 'Ramen',
    pais: PAISES.JAPON
  },
  {
    platillo: 'Vodka',
    pais: PAISES.RUSIA
  }];
  




  constructor(private render : Renderer2) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    /*console.log(this.titulo)
    this.render.setAttribute(this.titulo.nativeElement,'id','text2');
    this.render.setStyle(this.titulo.nativeElement,'color','red');*/
  }

 /* getButton(){
    document.getElementById('btn')?.addEventListener('click',()=>{
      this.flag = !this.flag;
    });
  }*/

}
