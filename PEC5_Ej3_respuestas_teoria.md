### Ejercicio 3 – Preguntas teóricas sobre formularios reactivos Angular

**a) ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?**

- **FormControl ⇒**  Es el núcleo de cualquier formulario reactivo, es un objeto qué se usa en los formularios para gestionar el valor y el estado de validez de un control de formulario individual. Corresponde a un control de formulario HTML como `<input>`o `<select>`.  Para usarlo:
    
    
    1. Importar el `ReactiveFormsModule`
    2. Agregar el `ReactiveFormsModule`a la `NgModule` sección `imports`
    3. creamos una instancia de `FormControl`
    
    ```tsx
    const ctrl = new FormControl('some value');
    console.log(ctrl.value);
    ```
    
- **FormGroup ⇒** Gestiona el valor y el estado de validez de un grupo de instancias `AbstractControl`. Las propiedades del grupo incluyen sus controles secundarios. El formulario de nivel superior en su componente es `FormGroup`.
    
    
    Para importar  **FormControl** y **FormGroup** en ****el formulario del HTML se muestra el siguiente ejemplo:
    
    ```html
    <form *novalidate* *[formGroup]*="group">
      Name: <input *type*="text" *formControlName*="name">
      Location: <input *type*="text" *formControlName*="location"></form>
    ```
    

- **FormBuilder ⇒**  Es un servicio inyectable que proporciona métodos de fábrica para crear instancias de control, es decir, se usa para construir un formulario creando de forma rápida `FormGroup`y `FormControl`elementos sin llamar manualmente `new`para cada uno, y  realiza un seguimiento del valor y estado de cambio y validez de los datos.
    
    Para utilizar  **FormBuilder,** primero hay que importarlo junto con lo que se va  a necesitar:
    
    ```tsx
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    ```
    
    A continuación se  lo inyecta en el constructor:
    
    ```tsx
    constructor(private fb: FormBuilder) {}
    ```
    
    Ahora usando **FormBuilder,** el componente  se vería así:
    
    ```tsx
    ngOnInit() {
      this.user = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
          password: ['', Validators.required],
          passwordRepeat: ['', Validators.required]
      });
    }
    ```
    

**b) Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.**

|  static min(min: number): ValidatorFn | Validador que requiere que el valor del control sea mayor o igual al número proporcionado. |
| --- | --- |
| static max(max: number): ValidatorFn | Validador que requiere que el valor del control sea menor o igual al número proporcionado. |
| static required(control: AbstractControl): ValidationErrors | null | El validador que requiere el control tiene un valor no vacío. |
| static requiredTrue(control: AbstractControl): ValidationErrors | null | Validador que requiere que el valor del control sea verdadero. Este validador se usa comúnmente para las casillas de verificación requeridas. |
| static email(control: AbstractControl): ValidationErrors | null | Validador que requiere que el valor del control pase una prueba de validación por correo electrónico. |
| static minLength(minLength: number): ValidatorFn | Validador que requiere que la longitud del valor del control sea mayor o igual que la longitud mínima proporcionada. |
| static maxLength(maxLength: number): ValidatorFn | Validador que requiere que la longitud del valor del control sea menor o igual que la longitud máxima proporcionada. |
| static pattern(pattern: string | RegExp): ValidatorFn | Validador que requiere que el valor del control coincida con un patrón de expresiones regulares. |
| static nullValidator(control: AbstractControl): ValidationErrors | null | Validador que no realiza ninguna operación. |
| static compose(validators: ValidatorFn[]): ValidatorFn | null | Compone varios validadores en una única función que devuelva la unión de los mapas de error individuales para el control proporcionado. |
| static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null | Componga varios validadores asíncronos en una única función que devuelva la unión de los objetos de error individuales para el control proporcionado. |

**c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?**

Los estados determinan en todo momento la situación de cada control y del formulario en si mismo. Existen los **estados de validación** y los **estados de modificación.**

- **Estados de validación ⇒**  Al establecer una o más reglas para uno o más controles activamos el sistema de chequeo y control del estado de cada control y del formulario en su conjunto. Los estados de validación son los siguientes:
    - **VALID**: el control ha pasado todos los chequeos.
    - **INVALID**: el control ha fallado al menos en una regla.
    - **PENDING**: el control está en medio de un proceso de validación.
    - **DISABLED**: el control está desactivado y exento de validación.
    
- **Estados de modificación ⇒** Los estados de modificación ****monitorizan en el formulario, el valor del control y sus cambios.
    
    Contemplan entre otros los siguientes:
    
    - **PRINSTINE**: el valor del control no ha sido cambiado por el usuario.
    - **DIRTY**: el usuario ha modificado el valor del control.
    - **TOUCHED**: el usuario ha tocado el control lanzando un evento `blur` al salir.
    - **UNTOUCHED**: el usuario no ha tocado y salido del control lanzando ningún evento `blur`.