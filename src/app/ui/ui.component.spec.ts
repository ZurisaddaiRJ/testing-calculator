import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call addition method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 2;
     component.operator2 = 2;
 
     // Act
     component.addition();
     result = component.result;
 
     // Assert
     expect(result).toBe(4);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the addition button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.addition-button'));

    // Act
    additionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(7.5);

   });

  it('Should render sum in result div', () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;
 
    // Act
    component.addition();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('10');
     
  });


});

describe('Ui substraction-component', () => {
  //User interfaces test
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call substraction method', () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.substraction();
    result = component.result;

    // Assert
    expect(result).toBe(0);
  });

  it('Should set operator1 model through ngModel for substraction', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '3.1416';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(3.1416);
  });

  it('Should set operator2 model through ngModel', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.71);
  });


  it('should add operator1 and operator2 when i click the substraction button ', () => {
    // Arrange 
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let substractionButton = fixture.debugElement.query(By.css('.substraction-button'));

    // Act
    substractionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(2.5);

  });

  it('Should render substraction in result div', () => {
    // Arrange
    component.operator1 = 15;
    component.operator2 = -5;

    // Act
    component.substraction();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.result'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('20');

  });
});

describe('Ui Multiplication - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call Multiplication method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 7;
     component.operator2 = 5;
 
     // Act
     component.multiplication();
     result = component.result;
 
     // Assert
     expect(result).toBe(35);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '9.1483';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(9.1483);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '5.33';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(5.33);
  });


  it('should Multiply operator1 and operator2 when i click the multiplicacion button ', () => {
    // Arrange 
    component.operator1 = 7.0;
    component.operator2 = 2.5;
    let multiplicationButton = fixture.debugElement.query(By.css('.multiplication-button'));

    // Act
    multiplicationButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(17.5);

   });

  it('Should render mult in result div', () => {
    // Arrange
    component.operator1 = 9;
    component.operator2 = 5;
 
    // Act
    component.multiplication();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('45');   
  });
});


describe('Ui Exponent - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call Exponent method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 3;
     component.operator2 = 5;
 
     // Act
     component.exp();
     result = component.result;
 
     // Assert
     expect(result).toBe(243);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '5';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(5);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.7';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.7);
  });


  it('should elevate operator1 to operator2 when i click the exponent button ', () => {
    // Arrange 
    component.operator1 = 7.0;
    component.operator2 = 3.0;
    let exponentButton = fixture.debugElement.query(By.css('.exponent-button'));

    // Act
    exponentButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(343);

   });

  it('Should render exp in result div', () => {
    // Arrange
    component.operator1 = 9;
    component.operator2 = 4;
 
    // Act
    component.exp();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('6561');   
  });
});

describe('Ui Square - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call Square method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 7;
 
     // Act
     component.sqr();
     result = component.result;
 
     // Assert
     expect(result).toBe(49);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '5';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(5);
  });

  it('should square operator1 when i click the square button ', () => {
    // Arrange 
    component.operator1 = 6.0;
    let squareButton = fixture.debugElement.query(By.css('.sqr-button'));

    // Act
    squareButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(36);

   });

  it('Should render square in result div', () => {
    // Arrange
    component.operator1 = 10;
 
    // Act
    component.sqr();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('100');
     
  });

});

describe('Ui Square Root - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call Square Root method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 9;
 
     // Act
     component.sqrt();
     result = component.result;
 
     // Assert
     expect(result).toBe(3);
  });

  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '7';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(7);
  });

  it('should square root operator1 when i click the square root button ', () => {
    // Arrange 
    component.operator1 = 12.0;
    let squareRootButton = fixture.debugElement.query(By.css('.sqrt-button'));

    // Act
    squareRootButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(3.4641016151377544);

   });

  it('Should render square root in result div', () => {
    // Arrange
    component.operator1 = 10;
 
    // Act
    component.sqrt();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('3.16227766');
     
  });
});

describe('Ui Divition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call Divition method', () => {
     // Arrange
     let result = 0;
     component.operator1 = 7;
     component.operator2 = 5;
 
     // Act
     component.division();
     result = component.result;
 
     // Assert
     expect(result).toBe(1.4);
  });



  it('Should set operator1 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator1"]')).nativeElement;

    // Act 
    inputElement.value = '5';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator1).toEqual(5);
  });
 
  it('Should set operator2 model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="operator2"]')).nativeElement;

    // Act 
    inputElement.value = '2.7';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.operator2).toEqual(2.7);
  });


  it('should divide operator1 and operator2 when i click the divition button ', () => {
    // Arrange 
    component.operator1 = 7.0;
    component.operator2 = 2.5;
    let divisionButton = fixture.debugElement.query(By.css('.division-button'));

    // Act
    divisionButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result).toBe(2.8);

   });

  it('Should render division in result div', () => {
    // Arrange
    component.operator1 = 10;
    component.operator2 = 5;
 
    // Act
    component.division();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('2');
     
  });
});