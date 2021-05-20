# Walnut
### La página web que se explicara a continuación pertenece a la asignatura de WEBGIS creada a partir de las enseñanzas de clase y en casa.
#### Para ver la página web Wilnut haz click al siguiente enlace. (https://andrea1508.github.io/backup/index.html)

## La temática 
La tematica web trata sobre las ventajas de empezar a reducir el consumo de carne y lo facil, saludable y rico que es llevar una dieta vegetariana.

## Objetivos
1. Saber los conocimientos básicos de herramientas web.
2. Entender el funcionamiento de GIT, GITHUB, GitCola o la terminal.
3. Aprender y manejar principios básicos de HTML, CSS y JS.
4. Elaborar un mapa con JavaScrip
5. Buscar un cercador API
6. Elaborar un mapa mediante la herramienta QGIS y añadirla a la web.

## Metodologia
_Paso 1_: 
Crear un logo, crear diferentes layouts para las distintas paginas, recopilar la información de la página.

_Paso 2_:  Creación del HTML
Elaboración del Head: añadir los links necesarios para facilitar la elaboración de la web como por ejemplo:
  · Boostrap
  · CSS
Elaboración del Body: donde encontramos la cabecera, el contenido principal, con un carrusel,  información dentro contenedores y por ultimo el footer.

_Paso 3_: Creación del CSS
Para que la página web tenga armonia, se creo la carpeta CSS a la vez del HTML para ir viendo el resultado mediante se creaba, con ello puedes poner el mismo tipo de letra, el mismo color para los contenedores principales, otro color para otro tipo de contenedor, etc...

## Contenido de la página web
La página web trata sobre la comida vegetariana y sana, motivos para reducir el consumo de carne, una página de curiosidades, recetas para empezar una nueva forma de comer, un mapa donde se encuentran ubicados algunos restaurantes con opciones vegetarianas en Tarragona, otro mapa donde puedes poner distinas coordenadas y viajas a traves del mapa, un apartado con una tabla y gráfica ciurcular con el precio del menú de los restaurantes seleccionados y por último una pagina de contacto. En la pagina web hay 3 tipos de layouts que se explicaran a continuación.

#### Página principal

Lo primero que se observa en la pagina principal es la barra de navegación con el logo en el lado
izquierdo. Seguidamente hay un carrusel con distintas imágenes de comida, donde luego se
explicarán las recetas.
Seguidamente se ha a construido los layouts con la creación de distintos contenedores donde
contenían otros contenedores en el interior y fotos.
Abajo del todo se encuentra el pie de página, igual que en las siguientes páginas que se
explicaran a continuación.

#### Mapa 

Se ha realizado mediante una API de Google para generar el mapa, al no tener la licencia no es del todo perfecta, donde añadiendo las coordenadas que desee, le lleva al lugar del mapa de dichas coordenadas, para ello se ha utilizado el JavaScript para obtener los datos de JSON. 
Se ha generado un formulario HTML para poder modificar el contenido del mapa pasándole parámetros a la API. 
En el JavaScript encontramos un código con 3 selectores y un botón para determinar la latitud, longitud y el zoom del mapa. Seguidamente se ha añadido un condicional, donde se le ha mandado dos normas, si encuentra los tres selectores esta bien y lo identifica, por lo contrario, lo identifica como mal. Por último, tiene dos funciones, la primera es el mapa justo al iniciar con unas coordenadas fijas y la otra función es para que el mapa sea dinámico según las coordenadas y el zoom que escojamos.
En el HTML, tenemos la cabecera y el footer igual que en todas las paginas de la página web y en el body encontramos el elemento <label> que representa una etiqueta que puede ser asociada a un control de formulario, y que se supone provee una descripción corta para éste, y el elemento <input> se usa para crear controles interactivos para formularios basados en la web con el fin de recibir datos del usuario.


#### Sabias que...

Como en todas se encuentra la barra y al final el pie de página. Entre medio tenemos el body
con un layout distinto, ya que, en este apartado hay tres columnas con 3 contenedores en su
interior mostrándonos algunas curiosidades de la comida.

#### Recetas

En la pagina de las recetas sigue el modelo de la pagina principal, cambiando los colores de los
contenedores según cambia el tipo de receta (desayuno, comida, cena y snack).

#### Página de contacto

En la página de contacto se ha utilizado action="submeter-formulario.php" method="post" para
poder hacer el formulario e introducir los datos de los clientes. 

## Itinerario de un día por Tarragona # 

### En este mapa podremos observar cómo sería una ruta por Tarragona visitando diferentes monumentos
La ruta empieza desde la Imperial Tarraco, que es donde se sitúa la estación de autobuses y hace una ruta circular para acabar en el inicio.

**Para la realización del mapa se han hecho varios pasos:**

1.	Digitalizar los restaurantes (puntos)
2.	Digitalizar los monumentos o sitios de interés (polígono)
3.	Digitalizar la ruta (línea)
4.	Modificar la tabla de atributos para añadir la ruta de las imágenes y añades el HTML
5.	Modificar el mapa en QGIS y exportarlo
6.	Con las carpetas creadas, modificas el CSS para lograr el popup deseado
7.	Creas un repositorio en GitHub
8.	Subes las carpetas y cambias las rutas de local a internet

## Precio de los menús

#### Para la realización de la tabla:

Se ha creado una tabla de los restaurantes, el precio del menú y si son vegetarianos o con opción para vegetarianos. La tabla se ha realizado mediante los comandos de boostrap 4.

#### Para la realización de la gráfica:

La gráfica de la página web ha sido posible mediante el lenguaje mermaid.

## Conclusiones y opinión personal
La asignatura que se nos ha presentado este curso, ha sido la más distinta hasta la fecha, por ello creo que la mayor dificultad ha sido empezar a crear una página desde 0, sin haber dado antes ninguna asignatura parecida, por eso mismo, creo que sacar adelante esta página y por ende la asginatura ha sido un reto personal y a dia de hoy estoy satisfecha por haberle dedicado tantas horas a ello.
Por otro lado, dado la cantidad de trabajo y tener que aprender un lenguaje, deberia ser una asignatura de más creditos para poder dominar mejor el lenguaje.
Como debilidad de mi página, creo que seria que la API seleccionada no esta muy acertada con la tematica de la web y en el caso de escoger la reforma que haria seria la API y en segundo lugar, seria el diseño de la web, ya que no es del todo de mi agrado. 




