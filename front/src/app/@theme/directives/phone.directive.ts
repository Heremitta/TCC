import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {


  constructor(private el: ElementRef) {}

  ngOnInit(){

  }
  @HostListener('keyup',['$event'])
  up(event){
    if(event.shiftKey || event.ctrlKey || event.antKey || ( event.key == 'a'  && event.ctrlKey  ) ){
      return
    }else{
      let lastChar = this.el.nativeElement.value.charAt(this.el.nativeElement.value.length-1)
      if(lastChar != '/' && lastChar != '-' && !parseInt(lastChar) && lastChar != 0){
        this.el.nativeElement.value  =  this.el.nativeElement.value.replace(/\D/g,"");
      }
      while( !parseInt(this.el.nativeElement.value) &&  this.el.nativeElement.value !== '' && !parseInt(event.key) && (parseInt(lastChar) !== 0) ){
        this.el.nativeElement.value  =  this.el.nativeElement.value.replace(/\D/g,"");

        lastChar = this.el.nativeElement.value.charAt(this.el.nativeElement.value.length-1)
      }

    }

  }

  @HostListener('keydown')
  @HostListener('keypress')
  press(){
    this.el.nativeElement.value = this.formataTelefone(this.el.nativeElement.value)
  }

  formataTelefone(celular){
  celular = celular.replace(/\D/g,"");
  celular = celular.replace(/(\d{2})(\d)/,"($1) $2");
  celular = celular.replace(/(\d{5})(\d)/,"$1-$2");
  celular = celular.replace(/(\d{4})(\d)/,"$1$2");
  return celular;
}
}
