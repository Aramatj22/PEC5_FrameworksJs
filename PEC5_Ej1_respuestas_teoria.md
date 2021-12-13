
### Ejercicio 1 – Preguntas teóricas sobre formularios Angular

**a)  ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?**

- En los formularios dirigidos por **template, la interacción se produce en la plantilla**, mientras que en los formularios  **reactivos, la mayor parte de la interacción se produce en el componente.**
- Los formularios dirigidos por  **template** usan `FormsModule`, mientras que los formularios reactivos usan `ReactiveFormsModule`.
- Los formularios controlados por **template** son asíncronos, mientras que los **formularios reactivos** son síncronos.
- Los formularios de **plantilla son más fáciles de crear**, pero son un desafío cuando se quieren hacer pruebas unitarias, porque las pruebas requieren la presencia de un DOM, mientras que los **formularios reactivos requieren más implementación de codificación en el componente,** sin embargo resulta más fácil escribir pruebas unitarias para ellos.

**b)  ¿Qué  son,  para  qué  sirven  y  cómo  se  utilizan  las  directivas  ngModel y ngModelChange?**

- **ngModel :** Es una directiva que funciona  como si fuera una propiedad del campo INPUT de un formulario del template (vista), a esta directiva se le estaría asignando el valor que está declarado en el componente , entonces lo que se escriba en el campo INPUT también viajará hacia el modelo, actualizando el valor de la propiedad del componente.
    - Para utilizarlo se tiene que importar `FormsModule` en el módulo donde se va  a crear el componente, y en la vista (template) se utilizará la siguiente sintaxis:
        
        ```jsx
        <input type="number" [(ngModel)]="lado"> // [(ngModel)] se debe usar la sintaxis de doble binding o "banana in a box"
        ```
        
    
- **ngModelChange :** Es un evento que se ejecuta cuando cambia el valor en la propiedad asociada a un ngModel, con el que se podría conseguir un comportamiento idéntico al visto en el punto anterior del doble binding, pero sin usarlo.
    - Se debe trabajar ngModelChange en conjunto con la directiva ngModel, lo que permite asociar un manejador de evento (una variable llamada $event) a ngModelChange, cada vez que esa propiedad cambia.
        
        La sintaxis sería así:
        
        ```jsx
        <input type="number" [ngModel]="lado" (ngModelChange)="lado = $event">
        ```
        
    

**c)  ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?**

Los  estados , permiten echar un vistazo al estado del control del formulario,  o para mostrar mensajes significativos al usuario,si el usuario lo ha visitado o  lo ha cambiado , si está en un estado válido, o por ejemplo si un campo es obligatorio y el usuario lo deja en blanco, debe darle una advertencia al usuario:

Los formularios tienen los siguientes estados:

- `$pristine` **→** Aún no se han modificado los campos.
- `$dirty` **→** Uno o más han sido modificados.
- `$invalid`**→**El contenido del formulario no es válido
- `$valid` **→**El contenido del formulario es válido
- `$submitted` **→** El formulario esta enviado

**d)  ¿Qué ventajas aportan los FormGroup en la composición de formularios?**

La ventaja de la directiva FormGroup es que reune en un cojunto los  FormControls para así  poder manejar los datos de un formulario.