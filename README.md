# API RESTful Endpoints Done


## Ejercicio a desarrollar
En equipos de 3-4 personas
Desarrollar una API RESTful, 
0. La API debe funcionar como el backend de un blog con registro de usuarios, sistema de publicaciones, y sistema de likes.

que cumpla con los siguientes puntos:
1. Debe tener endpoint users
2. Al consultar un usuario debe devolver, su email, password, id, postIds[1,2,3,4,5]
3. Debe tener endpoint posts (publicaciones)
4. Debe tener sistema de likes
5. Al consultar un post, debe devolver el userId, el postId, description, createdAt, likes(Nº de Likes que tiene)

```
const user = {
    userId: 1, 
    email: 'x', 
    pw: 'x'}
const post = {
    postId: 99,
    userId: 1 , 
    descripcion: 'x', 
    createdAt: 'x',
    likes: CANTIDADdeLIKES}

// OPCIONALMENTE
const likes = [{
        likeId: OPCIONAL,
        userId: 1,
        postId: 99
    },
    {
        likeId: OPCIONAL,
        userId: 2,
        postId: 99
    },
    {
        likeId: OPCIONAL,
        userId: 3,
        postId: 99
    },
    {
        likeId: OPCIONAL,
        userId: 1,
        postId: 22
    }]
```
### MUST BE
1. Cuando un usuario da like a una publicacion, y NO existe su like, debe aumentarse en algun lugar o llevarse ese registro o ambas cosas
2. Cuando un usuario da like a una publicacion, y SI existe su like, debe de eliminarse o no contarse dentro de los likes totales que debe tener esa publicacion
3. Cuando un usuario da like por primera vez, debe CREARSE ese registro relacionando LA PUBLICACION y EL USUARIO que hizo like
4. Cuando un usuario quita el like de una publicacion, debe ELIMINARSE ó INVALIDAR esa variable en base de datos,es decir, donde usted lo halla guardado
5. Cuando un se recibe un GET sobre una o todas las publicaciones, debe retornar sus datos incluyendo cuantos likes ha recibido
6. Para calcular los likes recibidos en una publicacion, tiene muchas opciones para lograrlo:
a. Podria contar cuantos postId existen en una tabla/coleccion de DB llamada LIKES. Pero tenga presente que si la persona llega a quitar el like, usted debe invalidar este registro, sea eliminandolo o con un booleano que cambia a true o false, y usted de ahi toma el contador bajo esa condicion.



















PAL KAHOOTTTTT
Un modelo es una clase con la que construimos documentos. 
mongodb: comando para levantar servidor
mongo: comando para levantar cliente
diferencias entre put y patch 







